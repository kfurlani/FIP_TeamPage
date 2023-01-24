var express = require('express');
var router = express.Router();

// each team member should put there data here with there own branch

  const team = {
    
    hiral: {
      name: 'Hiral',
      role: 'Front-End Developer',
      avatar: '',
      bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
    },

    pablo: {
      name: 'Pablo Ortiz',
      role: 'Motion - 3D Artist',
      avatar: 'pablo.jpg',
      bio: 'The old man of the team; Publicist by profession but graphic designer at heart with 22 years of experience in the graphic industry. His affinity with the audiovisual makes him contribute to projects as a motion and 3D artist, giving life and movement to ideas that impact.'
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
