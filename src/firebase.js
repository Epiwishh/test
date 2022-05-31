import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc} from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyC8qyvVR43TYgvAbYAtzYu6TRhfBBgvbHo",
    authDomain: "bonfire-2946c.firebaseapp.com",
    projectId: "bonfire-2946c",
    storageBucket: "bonfire-2946c.appspot.com",
    messagingSenderId: "373345825804",
    appId: "1:373345825804:web:3e49c99c6308b97fd3aa29",
    measurementId: "G-ZV1JKNV933"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


export const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


  export const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


  export const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };


 export const logout = () => {
    signOut(auth);
  };


