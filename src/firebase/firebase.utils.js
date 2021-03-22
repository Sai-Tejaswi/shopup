import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyAnfEknm7IaAl4RO56VIPCdc4W0i0T3VJs",
        authDomain: "crwn-db-302e8.firebaseapp.com",
        projectId: "crwn-db-302e8",
        storageBucket: "crwn-db-302e8.appspot.com",
        messagingSenderId: "19371208527",
        appId: "1:19371208527:web:574330e22632539ff7df3a",
        measurementId: "G-YD9P3WEPDE"
      
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;