var data = require('../data.json');

exports.view = function(req, res){
  var items = data.items;
  var topFavorites = [];
  var topFavoritesSorted = [];
  var fashionTrends = [];

  items.forEach(function(obj) {
    var favoritesNum = obj.favorites_num;

    //console.log("og price: " + obj.old_price + ", new: " + obj.new_price + ", % off: " + percentageOff);
    topFavorites.push(favoritesNum);
  });

  topFavoritesSorted = topFavorites.slice();
  topFavoritesSorted.sort(function(a, b){return b - a});

  //itemSavings
  console.log(topFavorites);
  console.log(topFavoritesSorted);
  for(i = 0; i < 5; i++) {
    fashionTrends.push(items[topFavorites.indexOf(topFavoritesSorted[i])]);
  }
  //console.log(topItems);
  console.log(fashionTrends);

  res.render('fashion-trends', {'layout' : 'defaultLayout', 'fashionTrends': fashionTrends});
};
