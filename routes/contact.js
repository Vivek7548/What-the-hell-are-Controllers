const express = require('express');

const contactController = require('../controllers/contact')

const router = express.Router();



// / => GET
router.get('/contact',contactController.getContact);

// / => POST
router.post('/contact', contactController.postContact);


module.exports = router;