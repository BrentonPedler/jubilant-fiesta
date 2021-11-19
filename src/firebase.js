// firebase.js

import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {

    apiKey: "AIzaSyApokvaKSwfLiq0baeNtzAuFrLRekhnkGQ",
  
    authDomain: "fir-app-2af0d.firebaseapp.com",
  
    projectId: "fir-app-2af0d",
  
    storageBucket: "fir-app-2af0d.appspot.com",
  
    messagingSenderId: "1050972241205",
  
    appId: "1:1050972241205:web:3d8812b985bacc0bf1e07c"
  
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;