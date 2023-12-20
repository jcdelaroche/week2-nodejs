const express = require('express');

const {
    getTag
} = require('./etiquettes.controller');

const router = express.Router();

router.get('', getTag);

module.exports = router;