import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../Firebase/Firebase.init";

const Login = () => {
  const [user, setUser] = useState([]);
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
        setUser(logInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result=>{
      const logInUser = result.user
      console.log(logInUser)
    })
    .catch()
  };
  return (
    <div>
      {/* user ? logout : sign in  */}
      {user ? (
        <button onClick={handleGoogleSignOut}>SignOut</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google login</button>
          <button onClick={handleGithubSignIn}>Github login</button>
        </>
      )}

      {user && (
        <div>
          <h3>User name:{user.displayName}</h3>
          <img src={user.photoURL} alt="" />
          <h3>Email:{user.email}</h3>
        </div>
      )}
    </div>
  );
};

export default Login;
