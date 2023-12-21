const express = require('express');

const successController = require('../controllers/success')

const router = express.Router();

// / => GET
router.get('/success',successController.getSuccess);

// / => POST
router.post('/success',successController.postSuccess);


module.exports = router;