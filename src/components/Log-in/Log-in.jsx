import { Helmet } from "react-helmet-async";
import "./Log-in.css";

import { useState } from "react";

// firebase imports
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/confige";

import { Link, useNavigate } from "react-router";

const LogIn = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let [hasError, setHasError] = useState("");

  return (

    <div className="login-container">
      <Helmet>
        <title>LogIn Page</title>
      </Helmet>
      <h2>Log in</h2>
      <form className="login-form">
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("User logged in successfully");
                navigate("/");
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                setHasError(errorCode);
              });
          }}
        >
          Entrance
        </button>
        {true && <p className="error-text">{hasError} </p>}
        <Link to="/resetpassword">
        <button className="reset" type="button">Reset Password</button>
        </Link>
      </form>
    </div>


  );
};

export default LogIn;
