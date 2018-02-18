exports.view = function(req, res){
  res.render('categories', {'layout' : 'defaultLayout'});
};

exports.viewCategory = function(req, res){
  res.render('categories', {'layout' : 'defaultLayout'});
};
