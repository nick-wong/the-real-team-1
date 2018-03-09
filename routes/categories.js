var data = require('../data.json');

exports.view = function(req, res){
  res.render('categories', {'layout' : 'defaultLayout', 'is_category_page': true, 'user' : req.user});
};

exports.viewB = function(req, res){
  res.render('categories-b', {'layout' : 'defaultLayout', 'is_category_page': true, 'user' : req.user});
};

exports.viewCategory = function(req, res){
  var user = req.user;
  var category = req.params.category.toLowerCase();
  var items = data.items;

  var category_items = [];
  items.forEach(function(obj) {
    if (obj.category.toLowerCase() == category) {
      category_items.push(obj);
      console.log(obj.category);
    }
  });

  console.log(category.toLowerCase());
  console.log(category_items);

  res.render('category-items', {'layout' : 'defaultLayout', 'category_items': category_items, 'is_subcategory': false, 'user': user, 'category': req.params.category});
};

exports.viewSubcategory = function(req, res){
  var user = req.user;
  var category = req.params.category;
  var subcategory = req.params.subcategory;
  var items = data.items;

  var category_items = [];
  items.forEach(function(obj) {
    if (obj.subcategory.indexOf(subcategory.toLowerCase()) >= 0) {
      category_items.push(obj);
    }
  });
  console.log("zzz");
  res.render('category-items', {'layout' : 'defaultLayout', 'category_items': category_items, 'is_subcategory': true, 'user': user, 'category': req.params.subcategory});
};
