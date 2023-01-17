var express = require('express');
var router = express.Router();

// each team member should put there data here with there own branch

  const team = {
    
    hiral: {
      name: 'Hiral',
      role: 'Front-End Devloper',
      image: 'justin.jpg'
    }
  }



/* GET home page. */
// This are the route

// when we hit route for index.js it hits the layout.hbs
// so it will go first to index.hbs then it will copy everything from there and will go to layout.hbs
// and the index.hbs will be injected in that body mustace tag in layout.hbs page. and all this happens dynamically.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/team/:member', function(req,res) {
  console.log(req.params.member);
  res.render('team', {person: team[req.params.member]});
})

module.exports = router;
