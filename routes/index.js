var data = require("../data.json");

/*
 * GET home page.
 */

exports.view = function(req, res){
  var items = data.items;
  var recommendations = data.recommendations;

  var recommendations_list = [];
  items.forEach(function(obj) {
    if (recommendations.includes(obj.id)) {
      recommendations_list.push(obj);
    }
  });
  var name = "test";

  console.log(recommendations_list);
  res.render('index', {'name': name, 'layout': 'defaultLayout', 'recommendations': recommendations_list});
};
