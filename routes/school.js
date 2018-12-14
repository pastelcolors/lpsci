const express = require('express');

const router = express.Router();

const date = new Date().getFullYear();
router.get('/', (req, res) => {
  res.render('pages/schoolPath/index', {
    title: 'LPSci | Home', description: 'Las Piñas City National Science High School Homepage', ogImage: 'put path here', currentYear: date,
  });
});

router.get('/knowledgebase', (req, res) => {
  res.render('pages/schoolPath/under-construction', {
    title: 'LPSci | Knowledgebase', description: 'Looking for frequently asked questions? Or maybe you wanted to know something from LPSci? This knowledgebase might help you out!', ogImage: 'put path here', currentYear: date,
  });
});

router.get('/contact', (req, res) => {
  res.render('pages/schoolPath/contact', {
    title: 'LPSci | Contact', description: 'contact page', ogImage: 'put path here', currentYear: date,
  });
});

router.get('/about', (req, res) => {
  res.render('pages/schoolPath/about', {
    title: 'LPSci | About', description: 'about page', ogImage: 'put path here', currentYear: date,
  });
});

router.get('/faculty', (req, res) => {
  res.render('pages/schoolPath/under-construction', {
    title: 'LPSci | Faculty', description: 'faculty page', ogImage: 'put path here', currentYear: date,
  });
});

router.get('/facilities', (req, res) => {
  res.render('pages/schoolPath/under-construction', {
    title: 'LPSci | Facilities', description: 'facilities page', ogImage: 'put path here', currentYear: date,
  });
});

router.get('/achievements', (req, res) => {
  res.render('pages/schoolPath/under-construction', {
    title: 'LPSci | Achievements', description: 'achievement page', ogImage: 'put path here', currentYear: date,
  });
});

router.get('/admission', (req, res) => {
  res.render('pages/schoolPath/under-construction', {
    title: 'LPSci | Admission', description: 'admission page', ogImage: 'put path here', currentYear: date,
  });
});

router.get('/downloadables', (req, res) => {
  res.render('pages/schoolPath/under-construction', {
    title: 'LPSci | Downloadables', description: 'downloadables page', ogImage: 'put path here', currentYear: date,
  });
});

router.get('/under-construction', (req, res) => {
  res.render('pages/schoolPath/under-construction', {
    title: 'LPSci | Under Construction', description: 'Sorry, this page is still under construction, please come and visit this page later!', ogImage: 'put path here', currentYear: date,
  });
});

module.exports = router;
