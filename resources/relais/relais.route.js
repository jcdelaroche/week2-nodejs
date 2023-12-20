const express = require('express');

const {
    getRelais
} = require('./relais.controller');

const router = express.Router();

router.get('', getRelais);

module.exports = router;