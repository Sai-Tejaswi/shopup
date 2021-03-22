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
      
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;