var data = require("../data.json");

/*
 * GET home page.
 */

exports.view = function(req, res){
  var items = data.items;
  var recommendations = data.recommendations;

  var recommendations_list = [];
  items.forEach(function(obj) {
    obj.favorited = false;
    if(data.users[0].favorites.includes(obj.id)) {
      obj.favorited = true;
    }
    if (recommendations.includes(obj.id)) {
      recommendations_list.push(obj);
    }
  });
  var name = "You";

  console.log(recommendations_list);
  res.render('index', {'userName': name, 'layout': 'defaultLayout', 'recommendations': recommendations_list});
};
