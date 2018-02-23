exports.view = function(req, res){
  var user = req.user;
  res.render('register', {'layout' : false, 'user' : user});
};

