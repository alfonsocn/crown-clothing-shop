import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDCgbUXHRvHZPyQ8sVQbThEySZYVPYI2ho",
    authDomain: "crwn-db-aca3b.firebaseapp.com",
    databaseURL: "https://crwn-db-aca3b.firebaseio.com",
    projectId: "crwn-db-aca3b",
    storageBucket: "crwn-db-aca3b.appspot.com",
    messagingSenderId: "249338164955",
    appId: "1:249338164955:web:db21c3d376b904449ebefe",
    measurementId: "G-8HT5RP050D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

const fbProvider = new firebase.auth.FacebookAuthProvider();
fbProvider.setCustomParameters( { prompt: 'select_account'});

export const signInWithFacebook = () => auth.signInWithPopup(fbProvider);

export default firebase;