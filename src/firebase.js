import * as firebase from 'firebase';

const config =  {
  apiKey: "AIzaSyAeuaIjXz3N0UTOCaP3S3wtpJJ-oOmQi38",
    authDomain: "visioncoach-f88e0.firebaseapp.com",
    databaseURL: "https://visioncoach-f88e0.firebaseio.com",
    projectId: "visioncoach-f88e0",
    storageBucket: "visioncoach-f88e0.appspot.com",
    messagingSenderId: "426136697856",
    appId: "1:426136697856:web:c59b227bd434698124ece5",
    measurementId: "G-HGHVCRY5M7"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
