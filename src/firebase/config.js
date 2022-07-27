import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAg1s3zhGAVJ9spy0U_PPqB9KhybPzl9rk",
  authDomain: "olx-clone-e0127.firebaseapp.com",
  projectId: "olx-clone-e0127",
  storageBucket: "olx-clone-e0127.appspot.com",
  messagingSenderId: "653003985353",
  appId: "1:653003985353:web:c94f1c1325a6a67b615818",
  measurementId: "G-9L97FNKFXV"
};

// Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);