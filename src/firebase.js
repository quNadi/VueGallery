


import {initializeApp} from 'firebase';


// Your web app's Firebase configuration
const app = initializeApp({
  apiKey: "",
  authDomain: "myart-213809.firebaseapp.com",
  databaseURL: "https://myart-213809.firebaseio.com",
  projectId: "myart-213809",
  storageBucket: "myart-213809.appspot.com",
  messagingSenderId: "227383812269",
  appId: "1:227383812269:web:5d720bce349420072c2624"
});
// Initialize Firebase
export const db=app.datebase(); //?????????????????????????
export const paintingsRef=db.ref('paintings');
