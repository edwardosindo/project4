const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

const data = require ('../controllers/load.controller');

// Welcome page
router.get('/', (req, res) => res.render('index'));

// About page 
router.get('/about', (req, res) => res.render('about'));
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
// Dashboard    
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard', {
    
    name: req.user.name,
    result:1
}));
    
router.get('/loads/loads/search', (req, res) => res.render('dashboard', {
    
   
    result:req.result

}));


module.exports = router;
