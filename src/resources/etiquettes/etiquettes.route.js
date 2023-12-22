const express = require('express');

const {
    getEtiquettes
} = require('./etiquettes.controller');

const router = express.Router();

router.route('').post(getEtiquettes);

module.exports = router;