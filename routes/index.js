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
      bio: 'Introducing Pablo, the seasoned Motion Designer at Final Stand Agency. With over 22 years of experience in the field, he brings a wealth of knowledge and expertise to the Bullyproof Hockey campaign team. As a key member of the team, Pablo is responsible for creating visually stunning and engaging motion graphics that support the mission of the campaign mission of ending the bullying cycle in hockey and creating a safer, more inclusive environment for all players. His passion for design and animation, coupled with his extensive experience, make him a valuable asset to the team.'
    }, 

    krystal: {
      name: 'Krystal Furlani',
      role: 'Project Manager', 
      avatar: 'krystal-teampage.jpg',
      bio: 'Meet Krystal, the Project Manager at Final Stand Agency. Krystal is responsible for overseeing all aspects of the project, from strategy development to implementation. With a team of media designers, front-end and back-end developers, and a motion designer, Krystal is dedicated to ending the bullying cycle in hockey and creating a safer, more inclusive environment for all players. Krystal is a skilled manager with a passion for teamwork and a commitment to delivering results, and is always available to help and support the team in achieving their goals.'
    },

    cristine: {
      name: 'Cristine de Noronha',
      role: 'Back-End Developer', 
      avatar: 'Cristine.jpg',
      bio: 'Meet Cristine, a skilled Back-end Developer at Final Stand Agency. As a member of the Bullyproof Hockey campaign team, Cristine is responsible for the technical infrastructure using PHP, MySQL and lumen framework. She works closely with the team members to develop and implement new features and enhancements to the website. Cristine s attention to detail, problem-solving skills, and expertise in PHP, MySQL and lumen framework make her a valuable asset to the team, delivering top-notch outcomes for the campaign.'
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
