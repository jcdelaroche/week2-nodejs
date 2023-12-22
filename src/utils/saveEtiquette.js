const etiquettesModel = require('../resources/etiquettes/etiquettes.model')

const saveEtiquette = async (res, url, nameFile) => {
    try {
        const etiquette = await etiquettesModel.create({ url, nameFile })
        res.send({ ok: true, etiquette })
    } catch (err) {
        res.status(400).json({ ok: false, err: err.message })
    }
}

exports.saveEtiquette = saveEtiquette