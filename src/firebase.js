import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBnVxoNtXNcwwYPTHkC2C2c-9N7CqkOq6s",
    authDomain: "tinder-clone-4f74b.firebaseapp.com",
    databaseURL: "https://tinder-clone-4f74b.firebaseio.com",
    projectId: "tinder-clone-4f74b",
    storageBucket: "tinder-clone-4f74b.appspot.com",
    messagingSenderId: "803937521480",
    appId: "1:803937521480:web:6907ef1343a99ccc8fed7d",
    measurementId: "G-VSH1KMPLQW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;