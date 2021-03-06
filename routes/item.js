var data = require("../data.json");

// var lookup = {};
// for (var i = 0; len = array.length; i < )

exports.viewItem = function(req, res){
  var user = req.user;
  // var newItem = {
  // 	name : req.query.name,
  // 	id : req.params.id,
  // 	imageURL: req.query.imageURL
  // }

  var newItem = data.items[req.params.id];

  newItem.favorited = false;
  if(data.users[0].favorites.indexOf(newItem.id) >= 0) {
    newItem.favorited = true;
  }
  newItem.item_type = {
    "tops": false,
    "bottoms": false,
    "shoes": false,
    "accessories": false
  }

  newItem.stores.forEach(function(obj) {
    obj['current_price'] = obj.prices[obj.prices.length-1].price;
  });
  newItem.item_type[newItem.category] = true;

  newItem.stores.sort(function(a, b) {
    return a.current_price - b.current_price;
});
  newItem['layout'] = 'defaultLayout';
  newItem.user = user;
  console.log(newItem);
  res.render('item', newItem);

};
