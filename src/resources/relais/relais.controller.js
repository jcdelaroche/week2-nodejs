const { execute } = require('../../services/client');
const Joi = require('joi');
const { usePattern } = require('../../utils/pattern');
const { status } = require('../../utils/status');


const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

const scheduleKeys = days.map(key => `Horaires_${key}`)

const transformHourly = (hourly) => hourly.slice(0, 2) + 'h' + hourly.slice(2);

const mountHourly = (element) => {
    return scheduleKeys.map((key, index) => ({
        [days[index]] : {
            matin: `${transformHourly(element[key].string[0])} : ${transformHourly(element[key].string[1])}`,
            aprem: `${transformHourly(element[key].string[2])} : ${transformHourly(element[key].string[3])}`
        }
    }))
}

const transformData = (data) => {
    return data.map(element => ({
        Pays: element.Pays,
        Ville: element.Ville,
        CP: element.CP,
        Nom: element.LgAdr1,
        Horraires: mountHourly(element)
    }))
}

module.exports = {
    async getRelais (req, res) {        
        const params = req.body;      
        execute({
            func: 'WSI4_PointRelais_Recherche', params, callback: (data) => {
                const statusCode = data.WSI4_PointRelais_RechercheResult.STAT
                if(statusCode !== "0") return res.status(400).json({ err : status[statusCode]})

                const formatedData = transformData(data.WSI4_PointRelais_RechercheResult.PointsRelais.PointRelais_Details); 

                res.send(JSON.stringify(formatedData))
            }
        })
    }
}