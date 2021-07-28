const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

router.post('/', usersCtrl.create);
router.post('/login', userCtrl.login);

module.exports = router;