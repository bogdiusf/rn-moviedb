// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDswCBCiM5NLpAZR-HMM2FLI74Rh61PXMs',
  authDomain: 'rn-moviedb-51e1c.firebaseapp.com',
  projectId: 'rn-moviedb-51e1c',
  storageBucket: 'rn-moviedb-51e1c.appspot.com',
  messagingSenderId: '155932595037',
  appId: '1:155932595037:web:ce8b4f6803df37147a8eb4'
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
