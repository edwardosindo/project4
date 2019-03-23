const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Welcome page
router.get('/', (req, res) => res.render('index'));

// About page 
router.get('/about', (req, res) => res.render('about'));

//User panel 
router.get('/userpanel', (req, res) => res.render('userpanel'));
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
// Dashboard    
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard', {
    
    name: req.user.name

}));
    


module.exports = router;
