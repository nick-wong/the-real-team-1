var data = require("../data.json");

// var lookup = {};
// for (var i = 0; len = array.length; i < )

exports.viewItem = function(req, res){
  // var newItem = {
  // 	name : req.query.name,
  // 	id : req.params.id,
  // 	imageURL: req.query.imageURL
  // }

  var newItem = data.items[req.params.id];
  newItem['layout'] = 'defaultLayout';
  res.render('item', newItem);

};
