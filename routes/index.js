
/*
 * GET home page.
 */

exports.view = function(req, res){
  var name = "test";

  console.log(name);
  res.render('index', {'name': name, 'layout': 'defaultLayout'});
};
