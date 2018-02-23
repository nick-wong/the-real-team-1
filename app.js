
/**
 * Module dependencies.
 */

 var express = require('express');
 var http = require('http');
 var path = require('path');
 var handlebars = require('express3-handlebars')
 var mongoose = require('mongoose');
 var passport = require('passport');
 var flash = require('connect-flash');

//Configuration imports
var configDB = require('./config/database.js');

//MongoDB connection
mongoose.connect(configDB.url);

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(express.static(path.join(__dirname, 'public')));

//passport stuff
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
require('./config/passport')(passport);
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Routes
var index = require('./routes/index');
var item = require('./routes/item');
var favorites = require('./routes/favorites');
var settings= require('./routes/settings');
var top_deals= require('./routes/top-deals');
var categories = require('./routes/categories');
var fashion_trends = require('./routes/fashion-trends');
var worn_by = require('./routes/worn-by');
var search = require('./routes/search');
var login = require('./routes/login');
var register = require('./routes/register');
// Example route
// var user = require('./routes/user');

app.get('/login', login.view);
app.post('/login', passport.authenticate('local-login', {
  failureRedirect : '/login',
  failureFlash : 'true'
}), function(req, res) {
  res.redirect('/');
});
app.get('/register', register.view);

app.post('/register', passport.authenticate('local-register', {
  failureRedirect : '/register',
  failureFlash : true
}), function (req, res) {
  res.redirect('/login');
});

app.get('/auth/facebook', passport.authenticate('facebook', { 
  scope : ['public_profile', 'email']
}));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect : '/',
    failureRedirect : '/login'
}));

app.get('*', function(req, res, next) {
  if(!req.user) {
    res.redirect('/login')
  } else {
    next();
  }
});

app.get('/', index.view);
app.get('/item', item.viewItem);
app.get('/item/:id', item.viewItem)
app.get('/favorites', favorites.view);
app.get('/top-deals', top_deals.view);
app.get('/categories', categories.view);
app.get('/categories/:category', categories.viewCategory);
app.get('/fashion-trends', fashion_trends.view);
app.get('/worn-by', worn_by.view);
app.get('/search', search.viewResults);
app.get('/search/:text', search.viewResults);

app.get('/settings', settings.view);
app.get('/settings/user', settings.viewUserProfile);
app.get('/settings/email', settings.viewChangeEmail);
app.get('/settings/password', settings.viewChangePassword);
app.post('/addToFavorites', favorites.addToFavorites);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
