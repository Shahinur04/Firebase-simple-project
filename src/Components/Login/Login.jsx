import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/Firebase.init";

const Login = () => {
  const [user, setUser] = useState([]);
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
        setUser(logInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Google login</button>
      <button onClick={handleGoogleSignOut}>SignOut</button>
      {user && (
        <div>
          <p>User name:{user.displayName}</p>
          <img src={user.photoURL} alt="" />
          <p>Email:{user.email}</p>
        </div>
      )}
      {user && (
        <div>
          {user.displayName && <h3>User name:{user.displayName}</h3>}
          {user.photoURL && <img src={user.photoURL} alt="" />}
          {user.email && <h3>Email:{user.email}</h3>}
        </div>
      )}
    </div>
  );
};

export default Login;
