import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyDgFXtfiWOArNuaSY5CSDQU53tciapNSCg",
    authDomain: "kng-db-543b2.firebaseapp.com",
    projectId: "kng-db-543b2",
    storageBucket: "kng-db-543b2.appspot.com",
    messagingSenderId: "109858024624",
    appId: "1:109858024624:web:ad8f8933ae48c413199f75",
    measurementId: "G-00EHWTEVY8"
  };
firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>{
    auth.signInWithPopup(provider)
}

export default firebase;