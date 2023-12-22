const express = require('express');
const { signup, getAllUsers, login } = require('./users.controller');

const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('').get(getAllUsers);

module.exports = router;