exports.view = function(req, res){
  var user = req.user;
  res.render('settings', {'layout' : 'defaultLayout', 'user': user});
};

exports.viewChangeEmail = function(req, res){
  var user = req.user;
  res.render('email', {'layout' : 'defaultLayout', 'user': user});
};

exports.viewChangePassword = function(req, res){
  var user = req.user;
  res.render('password', {'layout' : 'defaultLayout', 'user': user});
};
