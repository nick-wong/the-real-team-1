exports.view = function(req, res){
  var user = req.user;
  res.render('login', {'layout' : false, 'user': user});
};
