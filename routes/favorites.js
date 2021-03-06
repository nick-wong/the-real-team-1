var data = require('../data.json');

exports.view = function(req, res){
  var user = req.user;
  console.log(data.users);
  var favoritesArray = data.users[0].favorites;
  var favorites = [];
  var items = data.items;

  items.forEach(function(obj) {
    if (favoritesArray.indexOf(obj.id) >= 0) {
      favorites.push(obj);
    }
  });

  res.render('favorites', {'layout' : 'defaultLayout', 'favorites' : favorites, 'user': user});
};

exports.addToFavorites = function(req, res) {
  if(data.users[0]['favorites'].indexOf(parseInt(req.body.item)) >= 0) {
    data.users[0]['favorites'].splice(data.users[0]['favorites'].indexOf(parseInt(req.body.item)), 1);
    data.items[parseInt(req.body.item)].favorites_num -= 1;
  }
  else {
    data.users[0]['favorites'].push(parseInt(req.body.item));
    data.items[parseInt(req.body.item)].favorites_num += 1;
  }
  //console.log(data.users);
  console.log(data.items[parseInt(req.body.item)]);
}
