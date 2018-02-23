var data = require("../data.json");

/*
 * GET home page.
 */

exports.view = function(req, res){
  var user = req.user;
  var items = data.items;
  var recommendations = data.recommendations;

  var recommendations_list = [];
  items.forEach(function(obj) {
    obj.favorited = false;
    if(data.users[0].favorites.indexOf(obj.id) >= 0) {
      obj.favorited = true;
    }
    if (recommendations.indexOf(obj.id) >= 0) {
      recommendations_list.push(obj);
    }
  });
  var name = "You";

  console.log(recommendations_list);
  res.render('index', {'user': user, 'layout': 'defaultLayout', 'recommendations': recommendations_list});
};
