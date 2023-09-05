const express  = require('express');

const authController = require('../controllers/auth.controller'); 
// ..means, need to get out of the self-folder to the main project, enter to another folder)
const router = express.Router();


router.get('/signup', authController.getSignup);

router.get('/login', authController.getLogin);




module.exports = router;