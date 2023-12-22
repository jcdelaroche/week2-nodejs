const express = require('express');
const { validatorMiddleware } = require('../../middlewares/validator');
const { validateCreationEtiquette } = require('../../dto/validateCreationEtiquette');

const {
    createEtiquette,
    getEtiquette
} = require('./etiquettes.controller');

const router = express.Router();

router.route('').post([validatorMiddleware(validateCreationEtiquette)], createEtiquette);
router.route('/s').get(getEtiquette);

module.exports = router;