const mongoose = require('mongoose');

const etiquetteSchema = new mongoose.Schema({
    url: String,
    nameFile: String
});

module.exports = mongoose.model('Etiquette', etiquetteSchema);