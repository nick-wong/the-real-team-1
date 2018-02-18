var data = require('../data.json');

exports.view = function(req, res){
  console.log(data.users);
  var favoritesArray = data.users[0].favorites;
  var favorites = [];
  var items = data.items;

  items.forEach(function(obj) {
    if (favoritesArray.includes(obj.id)) {
      favorites.push(obj);
    }
  });

  res.render('favorites', {'layout' : 'defaultLayout', 'favorites' : favorites});
};

exports.addToFavorites = function(req, res){
  if(data.users[0]['favorites'].includes(parseInt(req.body.item))) {
    data.users[0]['favorites'].splice(data.users[0]['favorites'].indexOf(parseInt(req.body.item)), 1);
  }
  else {
    data.users[0]['favorites'].push(parseInt(req.body.item));
  }
  console.log(data.users);
  console.log(data);
}
