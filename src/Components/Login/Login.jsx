import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../Firebase/Firebase.init";

const Login = () => {
  const [user,setUser]=useState([]);
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
        setUser(logInUser)
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google login</button>
      {user && <div>
        <h3>User name:{user.displayName}</h3>
        <img src={user.photoURL} alt="" />
        <h3>Email:{user.email}</h3>
      </div>}
    </div>
  );
};

export default Login;
