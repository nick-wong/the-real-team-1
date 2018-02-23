exports.view = function(req, res){
  var user = req.user;
  res.render('user', {'layout' : 'defaultLayout', 'user':user});
};
