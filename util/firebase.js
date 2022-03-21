// Import the functions you need from the SDKs you need
const dotenv = require('dotenv')
const { initializeApp } = require("firebase/app");
const { getStorage } = require('firebase/storage')

dotenv.config({path: './config.env'});

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.envMEASUREMENT_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp)

module.exports = { storage };