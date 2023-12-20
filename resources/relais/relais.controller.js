const { execute } = require('../../services/client');
const Joi = require('joi');

const params = {
    Enseigne: 'BDTEST13',
    Pays: 'FR',
    Ville: 'PARIS',
    CP: '75001',
}

module.exports = {
    async getRelais (req, res) {
        const args = {
            Enseigne: 'BDTEST13',
            Pays: 'FR',
            Ville: 'PARIS',
            CP: '75001',
        }
        execute({
            func: 'WSI4_PointRelais_Recherche', params: args, callback: (data) => res.send(JSON.stringify(data.WSI4_PointRelais_RechercheResult.PointsRelais.PointRelais_Details))
        })
    }
}