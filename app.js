
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

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
var user = require('./routes/user');
var email = require('./routes/email');
var password = require('./routes/password');

// Example route
// var user = require('./routes/user');

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
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

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
app.get('/login', login.view);
app.get('/register', register.view);
app.get('/settings', settings.view);
app.get('/settings/user', user.view);
app.get('/settings/email', email.view);
app.get('/settings/password', password.view);
app.post('/addToFavorites', favorites.addToFavorites);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
