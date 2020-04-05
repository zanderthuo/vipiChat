import firebase from 'firebase';
import "firebase/auth";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBwM6EpNTaK3vSXSbpqTimGxXxMrdZBbAg",
    authDomain: "tubonge-9cc68.firebaseapp.com",
    databaseURL: "https://tubonge-9cc68.firebaseio.com",
    projectId: "tubonge-9cc68",
    storageBucket: "tubonge-9cc68.appspot.com",
    messagingSenderId: "722621983007",
    appId: "1:722621983007:web:1929f91e516a201cc5a82a",
    measurementId: "G-E3E7SJETDP"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();