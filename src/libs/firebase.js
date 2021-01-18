import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDrj9_6-fjaB5qfd33rS0GKAJ3kh0wn-Po",
    authDomain: "fir-test0-9abcb.firebaseapp.com",
    projectId: "fir-test0-9abcb",
    storageBucket: "fir-test0-9abcb.appspot.com",
    messagingSenderId: "1064911789995",
    appId: "1:1064911789995:web:4dba435e9c676bd299fcee",
    measurementId: "G-0MDTQTF9D4"
};
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

const login = () => firebase.auth().signInWithPopup(provider).then(function(result) {
    const token = result.credential.accessToken;
    const user = result.user;
    console.log(JSON.stringify(user));
}).catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    const credential = error.credential;
    console.log('Login', errorMessage);
});

/*
const login = () => firebase.auth().signInWithEmailAndPassword('diegoflorescastillo93@gmail.com', 'Lider2020')
    .then((user) => {
        console.log('Login');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;


    });
*/

module.exports = {
    login
}
