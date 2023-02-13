import { createContext, useContext } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import Password from 'antd/es/input/Password';


const firebaseConfig = {
    apiKey: "AIzaSyAY5g14ewgHVizQ1w2u7BPfGe4kj3_v1qM",
    authDomain: "hackathon-1d317.firebaseapp.com",
    projectId: "hackathon-1d317",
    storageBucket: "hackathon-1d317.appspot.com",
    messagingSenderId: "729237272449",
    appId: "1:729237272449:web:79566c15f249ee8e46da80",
    measurementId: "G-79S1ZHYVL2"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const FirebaseContext = createContext(null)
export const useFirebase = useContext(FirebaseContext)

const FirebaseProvider = (props) => {

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(authemail, password)
    }

    return (
        <FirebaseProvider>{props.child}</FirebaseProvider>
    )
}

export default FirebaseProvider