var data = require("../data.json");

exports.viewResults = function(req, res){
  var user = req.user;
  if (req.params.text == null) {
    res.render('new_search', {'layout' : 'defaultLayout', 'user': user});
  }
  else {
    var search_text = req.params.text;
    var items = data.items;

    var search_results = [];
    items.forEach(function(obj) {
      if (obj.name.toLowerCase().indexOf(search_text) >= 0) {
        search_results.push(obj);
      }
    });

    console.log(search_text);
    console.log(search_results);
    
    res.render('search', {'layout' : 'defaultLayout', 'search_text' : search_text, 'results' : search_results, 'user' : user});
  }
}
