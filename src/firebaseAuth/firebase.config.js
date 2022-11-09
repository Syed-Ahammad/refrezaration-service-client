// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATb8dGwOF7UGO37kKOynRIa80NwJnxYhs",
  authDomain: "services-refrigaration.firebaseapp.com",
  projectId: "services-refrigaration",
  storageBucket: "services-refrigaration.appspot.com",
  messagingSenderId: "986918392270",
  appId: "1:986918392270:web:dbbd854d06872500211b9f"
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey
//   authDomain: process.env.REACT_APP_authDomain
//   projectId: process.env.REACT_APP_projectId
//   storageBucket: process.env.REACT_APP_storageBucket
//   messagingSenderId: process.env.REACT_APP_messagingSenderId
//   appId: process.env.REACT_APP_appId
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);