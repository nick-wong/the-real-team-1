var data = require('../data.json');

exports.view = function(req, res){
  res.render('categories', {'layout' : 'defaultLayout'});
};

exports.viewCategory = function(req, res){
  var category = req.params.category;
  var items = data.items;

  var category_items = [];
  items.forEach(function(obj) {
    if (obj.category == category) {
      category_items.push(obj);
    }
  });

  console.log(category);
  console.log(category_items);

  res.render('category-items', {'layout' : 'defaultLayout', 'category_items': category_items});
};
