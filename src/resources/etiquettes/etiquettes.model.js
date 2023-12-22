const mongoose = require('mongoose');

const etiquetteSchema = new mongoose.Schema({
    title: String,
    price: Number,
    to: String,
    from: String,
    });

module.exports = mongoose.model('Etiquette', etiquetteSchema);