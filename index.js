const express = require('express');
const app = express();
const relaisRoute = require('./resources/relais/relais.route');
const tagsRoute = require('./resources/etiquettes/etiquettes.route');
require('dotenv').config();
require('./db/connect')();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/relais', relaisRoute);
app.use('/api/v1/tags', tagsRoute);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.clear();
    console.log(`Listening on port ${port}`)
});