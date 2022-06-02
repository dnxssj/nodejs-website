const express = require('express');
const router = express.Router();

// routes
router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '/views/index.html'));
    res.render('index', { title: 'DNX Programación'});
 });

 router.get('/contact', (req, res) => {
    res.render('contact', { title: 'DNX Contact'});
 });

 router.get('/about', (req, res) => {
    res.render('about', { title: 'DNX About me'});
 });

 module.exports = router;
 