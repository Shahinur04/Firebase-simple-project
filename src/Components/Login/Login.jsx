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
      .then((result)=>{
        console.log(result)
        setUser(null);
      })
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

    {/* user ? logout : sign in  */}
      { user ?<button onClick={handleGoogleSignOut}>SignOut</button> :
      <button onClick={handleGoogleSignIn}>Google login</button>}
      
      
      {user && 
        <div>
          <h3>User name:{user.displayName}</h3>
          <img src={user.photoURL} alt="" />
          <h3>Email:{user.email}</h3>
        </div>
      }
    </div>
  );
};

export default Login;
