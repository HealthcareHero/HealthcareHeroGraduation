const admin = require('firebase-admin');
const fieldValue = require('firebase-admin').firestore.FieldValue;
const serviceAccount = require('./service-account.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

const firestore = admin.firestore();
firestore.settings({ timestampsInSnapshots: true });

module.exports = { firestore, fieldValue };