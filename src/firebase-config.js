import firebase from "firebase";
import { apiKey } from './secrets.json';

const config = {
  apiKey,
  authDomain: "counter-55b74.firebaseapp.com",
  databaseURL: "https://counter-55b74.firebaseio.com",
  projectId: "counter-55b74",
  storageBucket: "counter-55b74.appspot.com",
  messagingSenderId: "423724375102",
  appId: "1:423724375102:web:1493d380718be2fd7f056f",
  measurementId: "G-022J7K546P"
};
const connection = firebase.initializeApp(config);

export { connection };
