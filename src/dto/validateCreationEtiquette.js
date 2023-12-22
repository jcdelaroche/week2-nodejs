const Joi = require('joi');
const { usePattern } = require('../utils/pattern');

const validateCreationEtiquette = (data) => {
    const schema = Joi.object({
        ModeCol: Joi.string().regex(usePattern('ModeCol')).required(),
        ModeLiv: Joi.string().regex(usePattern('ModeLiv')).required(),
        NDossier: Joi.string().regex(usePattern('NDossier')).optional(),
        NClient: Joi.string().regex(usePattern('NClient')).optional(),
        Expe_Langage: Joi.string().regex(usePattern('Expe_Langage')).required(),
        Expe_Ad1: Joi.string().regex(usePattern('Expe_Ad1')).required(),
        Expe_Ad2: Joi.string().regex(usePattern('Expe_Ad2')).optional(),
        Expe_Ad3: Joi.string().regex(usePattern('Expe_Ad3')).required(),
        Expe_Ad4: Joi.string().regex(usePattern('Expe_Ad4')).optional(),
        Expe_Ville: Joi.string().regex(usePattern('Expe_Ville')).required(),
        Expe_CP: Joi.string().regex(usePattern('Expe_CP')).required(),
        Expe_Pays: Joi.string().regex(usePattern('Expe_Pays')).required(),
        Expe_Tel1: Joi.string().regex(usePattern('Expe_Tel1')).required(),
        Expe_Tel2: Joi.string().regex(usePattern('Expe_Tel2')).optional(),
        Expe_Mail: Joi.string().regex(usePattern('Expe_Mail')).optional(),
        Dest_Langage: Joi.string().regex(usePattern('Dest_Langage')).required(),
        Dest_Ad1: Joi.string().regex(usePattern('Dest_Ad1')).required(),
        Dest_Ad2: Joi.string().regex(usePattern('Dest_Ad2')).optional(),
        Dest_Ad3: Joi.string().regex(usePattern('Dest_Ad3')).required(),
        Dest_Ad4: Joi.string().regex(usePattern('Dest_Ad4')).optional(),
        Dest_Ville: Joi.string().regex(usePattern('Dest_Ville')).required(),
        Dest_CP: Joi.string().regex(usePattern('Dest_CP')).required(),
        Dest_Pays: Joi.string().regex(usePattern('Dest_Pays')).required(),
        Dest_Tel1: Joi.string().regex(usePattern('Dest_Tel1')).required(),
        Dest_Tel2: Joi.string().regex(usePattern('Dest_Tel2')).optional(),
        Dest_Mail: Joi.string().regex(usePattern('Dest_Mail')).optional(),
        Poids: Joi.string().regex(usePattern('Poids')).required(),
        Longueur: Joi.string().regex(usePattern('Longueur')).optional(),
        Taille: Joi.string().regex(usePattern('Taille')).optional(),
        NbColis: Joi.string().regex(usePattern('NbColis')).required(),
        CRT_Valeur: Joi.string().regex(usePattern('CRT_Valeur')).required(),
        CRT_Devise: Joi.string().regex(usePattern('CRT_Devise')).optional(),
        Exp_Valeur: Joi.string().regex(usePattern('Exp_Valeur')).optional(),
        Exp_Devise: Joi.string().regex(usePattern('Exp_Devise')).optional(),
        COL_Rel_Pays: Joi.string().regex(usePattern('COL_Rel_Pays')).required(),
        COL_Rel: Joi.string().regex(usePattern('COL_Rel')).required(),
        LIV_Rel_Pays: Joi.string().regex(usePattern('LIV_Rel_Pays')).required(),
        LIV_Rel: Joi.string().regex(usePattern('LIV_Rel')).required(),
        TAvisage: Joi.string().regex(usePattern('TAvisage')).optional(),
        TReprise: Joi.string().regex(usePattern('TReprise')).optional(),
        Montage: Joi.string().regex(usePattern('Montage')).optional(),
        TRDV: Joi.string().regex(usePattern('TRDV')).optional(),
        Assurance: Joi.string().regex(usePattern('Assurance')).optional(),
        Instructions: Joi.string().regex(usePattern('Instructions')).optional(),
        Texte: Joi.string().regex(usePattern('Texte')).optional(),
    });

    return schema.validate(data)
}

exports.validateCreationEtiquette = validateCreationEtiquette;