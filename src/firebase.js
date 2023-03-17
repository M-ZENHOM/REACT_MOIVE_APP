import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSm87S67Dvh3V1aBON7Qu60QGmObfl-TY",
  authDomain: "movies-auth-b6814.firebaseapp.com",
  projectId: "movies-auth-b6814",
  storageBucket: "movies-auth-b6814.appspot.com",
  messagingSenderId: "875137240484",
  appId: "1:875137240484:web:e6794747776a76d9924531",
};

const app = initializeApp(firebaseConfig);
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

export { auth, facebookProvider, googleProvider };
