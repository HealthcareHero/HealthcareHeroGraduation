const functions = require('firebase-functions');
const configureServer = require('./src/server');

const server = configureServer();

/** Connect to Google Cloud Function **/
const api = functions.https.onRequest(server);
module.exports = { api };
