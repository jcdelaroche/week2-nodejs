const Joi = require('joi');
const etiquettes = require('./etiquettes.model');
const { usePattern } = require('../../utils/pattern');
const { execute } = require('../../services/client');
const { status } = require('../../utils/status')

module.exports = {
    async getEtiquettes (req, res) {
        const schema = Joi.object({
            ModeCol: Joi.string().regex(usePattern('ModeCol')).required(),
            ModeLiv: Joi.string().regex(usePattern('ModeLiv')).required(),
            Expe_Langage: Joi.string().regex(usePattern('Expe_Langage')).required(),
            Expe_Ad1: Joi.string().regex(usePattern('Expe_Ad1')).required(),
            Expe_Ad3: Joi.string().regex(usePattern('Expe_Ad3')).required(),
            Expe_Ville: Joi.string().regex(usePattern('Expe_Ville')).required(),
            Expe_CP: Joi.string().regex(usePattern('Expe_CP')).required(),
            Expe_Pays: Joi.string().regex(usePattern('Expe_Pays')).required(),
            Expe_Tel1: Joi.string().regex(usePattern('Expe_Tel1')).required(),
            Dest_Langage: Joi.string().regex(usePattern('Dest_Langage')).required(),
            Dest_Ad1: Joi.string().regex(usePattern('Dest_Ad1')).required(),
            Dest_Ad3: Joi.string().regex(usePattern('Dest_Ad3')).required(),
            Dest_Ville: Joi.string().regex(usePattern('Dest_Ville')).required(),
            Dest_CP: Joi.string().regex(usePattern('Dest_CP')).required(),
            Dest_Pays: Joi.string().regex(usePattern('Dest_Pays')).required(),
            Dest_Tel1: Joi.string().regex(usePattern('Dest_Tel1')).required(),
            Poids: Joi.string().regex(usePattern('Poids')).required(),
            NbColis: Joi.string().regex(usePattern('NbColis')).required(),
            CRT_Valeur: Joi.string().regex(usePattern('CRT_Valeur')).required(),
            COL_Rel_Pays: Joi.string().regex(usePattern('COL_Rel_Pays')).required(),
            COL_Rel: Joi.string().regex(usePattern('COL_Rel')).required(),
            LIV_Rel_Pays: Joi.string().regex(usePattern('LIV_Rel_Pays')).required(),
            LIV_Rel: Joi.string().regex(usePattern('LIV_Rel')).required(),
            Texte: Joi.string().regex(usePattern('Texte')).optional(),
        });

        const { error } = schema.validate(req.body);

        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        const params = req.body;
        execute({
            func: 'WSI2_CreationEtiquette', params, callback: (data) => {
                console.log(data)
                const statusCode = data.WSI2_CreationEtiquetteResult.STAT
                if(statusCode !== "0") return res.status(400).json({ err : status[statusCode]})

                const formatedData = transformData(data.WSI2_CreationEtiquetteResult.PointsRelais.PointRelais_Details); 

                res.send(JSON.stringify(formatedData))
            }
        }) 

    }
}