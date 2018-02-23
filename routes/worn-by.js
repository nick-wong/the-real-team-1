exports.view = function(req, res){
  var user = req.user;
  res.render('worn-by', {'layout' : 'defaultLayout', 'user': user});
};
