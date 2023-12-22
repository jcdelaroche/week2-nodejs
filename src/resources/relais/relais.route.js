const express = require('express');
const { validateRechercheRelais } = require('../../dto/validateRechercheRelais');
const { validatorMidlleware } = require('../../middlewares/validator');

const {
    getRelais
} = require('./relais.controller');

const router = express.Router();

router.route('').post([validatorMidlleware(validateRechercheRelais)], getRelais);

module.exports = router;