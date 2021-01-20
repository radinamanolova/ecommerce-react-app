import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyADYJCch2VIPmYzSPl3afkf8liepv2WdoQ",
  authDomain: "ecommerce-react-app-814f4.firebaseapp.com",
  projectId: "ecommerce-react-app-814f4",
  storageBucket: "ecommerce-react-app-814f4.appspot.com",
  messagingSenderId: "361996208468",
  appId: "1:361996208468:web:d7265cbf9c857e775b60c1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;