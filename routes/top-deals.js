var data = require('../data.json');

exports.view = function(req, res){
  var items = data.items;
  var itemSavings = [];
  var itemSavingsSorted = [];
  var topItems = [];

  items.forEach(function(obj) {
    var percentageOff = Math.round(((obj.old_price - obj.new_price)/obj.old_price)*100);

    //console.log("og price: " + obj.old_price + ", new: " + obj.new_price + ", % off: " + percentageOff);
    itemSavings.push(percentageOff);
  });

  itemSavingsSorted = itemSavings.slice();
  itemSavingsSorted.sort(function(a, b){return b - a});

  //itemSavings
  console.log(itemSavings);
  for(i = 0; i < 5; i++) {
    topItems.push(items[itemSavings.indexOf(itemSavingsSorted[i])]);
  }
  //console.log(topItems);

  res.render('top-deals', {'layout' : 'defaultLayout', 'topItems': topItems});
};
