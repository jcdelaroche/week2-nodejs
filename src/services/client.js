const soap = require('soap');
const crypto = require('crypto');

const merchant = process.env.MERCHANT;
const key = process.env.PRIVATE_KEY;
const apiUrl = 'https://api.mondialrelay.com/Web_Services.asmx?WSDL';

const baseParams = {
    Enseigne: merchant
}

const securityKey = (args) => {
    const content = args.filter(n => n).join('') + key;
    return crypto.createHash('md5').update(content).digest('hex').toUpperCase();
}

const execute = ({ url = apiUrl, func, params, callback }) => {
    soap.createClient(url, (err, client) => {
        client.setEndpoint(url);
        let mergedParams = {
            ...baseParams,
            ...params
        }
        const { Texte = undefined } = mergedParams;
        delete mergedParams.Texte;
        mergedParams.Security = securityKey(Object.values(mergedParams));
        if (Texte) mergedParams = { ...mergedParams, Texte }
        client[func](mergedParams, (err, result) => {
            if (err) callback(err);

            callback(result);
        });
    });
};

exports.execute = execute;
