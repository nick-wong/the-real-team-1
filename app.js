
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
var search_results = require('./routes/search-results');
var login = require('./routes/login');
var register = require('./routes/register');
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
app.get('/item', item.view);
app.get('/favorites', favorites.view);
app.get('/settings', settings.view);
app.get('/top-deals', top_deals.view);
app.get('/categories', categories.view);
app.get('/fashion-trends', fashion_trends.view);
app.get('/worn-by', worn_by.view);
app.get('/search-results', search_results.view);
app.get('/login', login.view);
app.get('/register', register.view)
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
