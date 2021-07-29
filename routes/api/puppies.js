const express = require('express');
const router = express.Router();
const puppiesCtrl = require('../../controllers/api/puppies');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', puppiesCtrl.index);
router.post('/new', puppiesCtrl.create)
router.post('/', puppiesCtrl.create);

module.exports = router;