import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC8BVDkP2NGUmX9nOoUuzVax0GTqIF8Kvs",
    authDomain: "ecom-eca47.firebaseapp.com",
    projectId: "ecom-eca47",
    storageBucket: "ecom-eca47.appspot.com",
    messagingSenderId: "717651611452",
    appId: "1:717651611452:web:fc8baf9c9561b4799c9839",
    measurementId: "G-SBZY8Y08FW"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;