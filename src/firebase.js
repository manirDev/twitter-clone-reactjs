import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB4XCPN8zwIyaJXUE25gOWPksZ1W1vG6RA",
    authDomain: "twitter-clone-d0328.firebaseapp.com",
    projectId: "twitter-clone-d0328",
    storageBucket: "twitter-clone-d0328.appspot.com",
    messagingSenderId: "490671702007",
    appId: "1:490671702007:web:dcf05db01ed24097d178f2",
    measurementId: "G-75ECX2M6D4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;