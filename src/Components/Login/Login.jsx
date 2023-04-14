import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../../Firebase/Firebase.init';



const Login = () => {
    const auth=getAuth(app);
    const provider= new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,provider)
    }
    return (
        <div>
           <button onClick={handleGoogleSignIn}>Google login</button> 
        </div>
    );
};

export default Login;