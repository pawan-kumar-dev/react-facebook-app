import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
const Login = () => {
  const signIn = e => {
    e.preventDefault();
    //   before this enable the authentication in your firebase and select the google //method

    // signin with the auth protocol
    auth.signInWithPopup(provider).catch(err => alert(err.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          alt="logo"
        />
        <div className="login__text">
          <h1>Sign in to Facebook</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
