exports.view = function(req, res){
  res.render('settings', {'layout' : 'defaultLayout'});
};

exports.viewChangeEmail = function(req, res){
  res.render('email', {'layout' : 'defaultLayout'});
};

exports.viewChangePassword = function(req, res){
  res.render('password', {'layout' : 'defaultLayout'});
};
