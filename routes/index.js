var express = require('express');
var router = express.Router();

// each team member should put there data here with there own branch

  const team = {
    
    hiral: {
      name: 'Hiral',
      role: 'Front-End Developer',
      avatar: 'hiral.jpg',
      bio: '"Introducing Hiral Shah, the front-end wizard at our agency. With a keen eye for design and a talent for creating seamless user experiences, Hiral is amazing at bringing website visions to life. As a key member of the "Bully Proof Hockey" campaign team, Hiral will be playing a crucial role in developing the campaign website, ensuring it is visually stunning and easy to navigate. Hiral is passionate about using technology to promote positive change and is dedicated to making a difference in the world. When not coding up a storm, He can be found exploring new hobbies and staying up to date on the latest front-end development trends"'
    },

    pablo: {
      name: 'Pablo Ortiz',
      role: 'Motion - 3D Artist',
      avatar: 'pablo.jpg',
      bio: 'The old man of the team; Publicist by profession but graphic designer at heart with 22 years of experience in the graphic industry. His affinity with the audiovisual makes him contribute to projects as a motion and 3D artist, giving life and movement to ideas that impact.'
    }, 

    krystal: {
      name: 'Krystal Furlani',
      role: 'Project Manager', 
      avatar: 'krystal-teampage.jpg',
      bio: 'Meet Krystal, the Project Manager at Final Stand Agency. Krystal is responsible for overseeing all aspects of the project, from strategy development to implementation. With a team of media designers, front-end and back-end developers, and a motion designer, Krystal is dedicated to ending the bullying cycle in hockey and creating a safer, more inclusive environment for all players. Krystal is a skilled manager with a passion for teamwork and a commitment to delivering results, and is always available to help and support the team in achieving their goals.'
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
