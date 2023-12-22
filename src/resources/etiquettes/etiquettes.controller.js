const Joi = require('joi');
const etiquettesModel = require('./etiquettes.model');
const { execute } = require('../../services/client');
const { status } = require('../../utils/status')
const { downloadPDF } = require('../../utils/downloadPDF')
const { saveEtiquette } = require('../../utils/saveEtiquette')

module.exports = {
    async createEtiquette(req, res) {
        const params = req.body;
        execute({
            func: 'WSI2_CreationEtiquette', params, callback: async (data) => {
                console.log(data)
                const statusCode = data.WSI2_CreationEtiquetteResult.STAT
                if (statusCode !== "0") return res.status(400).json({ ok: false, err: status[statusCode] })
                const url = `https://www.mondialrelay.com/${data.WSI2_CreationEtiquetteResult.URL_Etiquette}`
                const nameFile = data.WSI2_CreationEtiquetteResult.ExpeditionNum
                downloadPDF(url, nameFile)
                saveEtiquette(res, url, nameFile)
            }
        })

    },
    async getEtiquette(req, res) {
        const nameFile = req.query.nameFile
        if (!nameFile) res.status(400).json({ ok: false, err: "Pas de nom de fichier" })
        try {
            const data = await etiquettesModel.findOne({ nameFile })
            if (!data) return res.status(400).json({ ok: false, err: `Pas d'étiquette avec le nom ${nameFile}` })
            res.json({ ok: true, data })
        }
        catch (err) {
            res.status(500).json({ ok: false, err: err.message })
        }
    }
}