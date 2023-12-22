const express = require('express');

require('dotenv').config();

const app = express();
const relaisRoute = require('./resources/relais/relais.route');
const etiquettesRoute = require('./resources/etiquettes/etiquettes.route');
const usersRoute = require('./resources/users/users.route');
require('./db/connect')();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/relais', relaisRoute);
app.use('/api/v1/etiquettes', etiquettesRoute);
app.use('/api/v1/users', usersRoute);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.clear();
    console.log(`Listening on port ${port}`)
});