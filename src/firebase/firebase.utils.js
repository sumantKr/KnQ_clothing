import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
//OAuth
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
export const createUserProfileDoc = async (userAuth, moreData) => {
  if (!userAuth)
    return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const userSnapshot = await userRef.get();
  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    console.log(userSnapshot)
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...moreData
      })
    }
    catch (err) {
      console.error('Error in setting', err.message)
    }
  }
  return userRef
}

export const addCollectionAndDocuments=async (collectionKey,objectsToAdd)=>{
  const collectionRef=firestore.collection(collectionKey);
  const batch=firestore.batch();
  console.log(objectsToAdd)
  objectsToAdd.forEach(obj=>{
    const newDocRef=collectionRef.doc();
  batch.set(newDocRef,obj);
  })
  return await batch.commit();
}

export const convertCollectionsSnapshotToMap=(collections)=>{
    const transformedCollection=collections.docs
    .map(doc=>{
      const {title,items}=doc.data();
      return{
        routeName:encodeURI(title.toLowerCase()),
        id:doc.id,
        title,
        items
      }
    })
    return transformedCollection.reduce((accumulator,collection)=>{
      accumulator[collection.title.toLowerCase()]=collection;
      return accumulator;
    },{})
}
//firestore
export const firestore = firebase.firestore();

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
}
export default firebase;