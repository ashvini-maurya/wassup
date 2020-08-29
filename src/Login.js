import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";

const Login = () => {
  const signIn = () => {
    console.log("signedin");
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="wassup logo"
        />
        <div className="login__text">
          <h1>Sign in to Wassup</h1>
        </div>

        <Button type="submit" onClick={() => signIn()}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
