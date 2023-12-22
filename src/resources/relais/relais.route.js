const express = require('express');
const { validateRechercheRelais } = require('../../dto/validateRechercheRelais');
const { validatorMiddleware } = require('../../middlewares/validator');

const {
    getRelais
} = require('./relais.controller');

const router = express.Router();

router.route('').post([validatorMiddleware(validateRechercheRelais)], getRelais);

module.exports = router;