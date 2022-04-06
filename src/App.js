import "./App.css";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase.init";
import { useState } from "react";
import { GithubAuthProvider } from "firebase/auth";


const auth = getAuth(app);

function App() {
  const [userData, setUserData] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((data) => {
        const user = data.user;
        console.log(user);
        setUserData(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const githubSignIn = () => {
    signInWithPopup(auth, githubProvider).then(data => {
      const user = data.user
      setUserData(user)
    }).catch(error => {
      console.log(error);
    })
  }
  const signedOut = () => {
    signOut(auth)
      .then((data) => {
        setUserData({});
      })
      .catch((error) => {
        setUserData({});
      });
  };
  return (
    <div className="App">
      <h1>Hello Firebase</h1>
      <div>
        {!userData.uid ? (
          <>
            <button onClick={googleSignIn}>Google Log In</button>
            <button onClick={githubSignIn}>Github Log In</button>
          </>
        ) : (
          <button onClick={signedOut}>Sign Out</button>
        )}
        <h2>Name: {userData.displayName}</h2>
        <h4>Email: {userData.email}</h4>
        <img src={userData.photoURL} alt="" />
      </div>
      <div></div>
    </div>
  );
}

export default App;
