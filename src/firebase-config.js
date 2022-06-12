import firebase from 'firebase/compat/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCzmB7-HhOkXDWNn2SzzxyOOy9vdLO9e74",
    authDomain: "thavasantonio-59e2e.firebaseapp.com",
    projectId: "thavasantonio-59e2e",
    storageBucket: "thavasantonio-59e2e.appspot.com",
    messagingSenderId: "324481153581",
    appId: "1:324481153581:web:1576af7641396e0ac696a4",
    measurementId: "G-3134PJ8D1V"
};

const app = firebase.initializeApp(firebaseConfig);
export let db = firebase.firestore();

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user.displayName;
        const email = result.user.email;
        localStorage.setItem('signedIn', true);

        //add user and email with unique id to database
        db.collection('users').doc(result.user.uid).set({
            user: user,
            email: email
        })

    })
    .catch(error => console.log(error));
}


