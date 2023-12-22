const Joi = require('joi'); 
const { usePattern } = require('../utils/pattern');

const validateRechercheRelais = (data) => {
    const schema = Joi.object({
        Pays: Joi.string().regex(usePattern('Pays')).required(),
        Ville: Joi.string().regex(usePattern('Ville')).required(),
        CP: Joi.string().required(),
        NumPointRelais: Joi.string().regex(usePattern('NumPointRelais')).optional(),
        Latitude:Joi.string().regex(usePattern('Latitude')).optional(),
        Longitude: Joi.string().regex(usePattern('Longitude')).optional(),
        Taille: Joi.string().regex(usePattern('Taille')).optional(),
        Poids: Joi.string().regex(usePattern('Poids')).optional(),
        Action: Joi.string().regex(usePattern('Action')).optional(),
        DelaiEnvoi: Joi.string().regex(usePattern('DelaiEnvoi')).optional(),
        RayonRecherche: Joi.string().regex(usePattern('RayonRecherche')).optional(),
        TypeActivite: Joi.string().regex(usePattern('NumPointRelais')).optional(),
    });

    return schema.validate(data)
}

exports.validateRechercheRelais = validateRechercheRelais;