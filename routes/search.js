var data = require("../data.json");

exports.viewResults = function(req, res){
  if (req.params.text == null) {
    res.render('new_search', {'layout' : 'defaultLayout'});
  }
  else {
    var search_text = req.params.text;
    var items = data.items;

    var search_results = [];
    items.forEach(function(obj) {
      if (obj.name.toLowerCase().includes(search_text)) {
        search_results.push(obj);
      }
    });

    console.log(search_text);
    console.log(search_results);
    
    res.render('search', {'layout' : 'defaultLayout', 'search_text' : search_text, 'results' : search_results});
  }
}