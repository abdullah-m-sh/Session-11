import { Helmet } from "react-helmet-async";
import "./Sign-up.css";
import { useEffect, useState } from "react";

// firebase imports
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/confige";

import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
const SignUp = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [userName, setUserName] = useState("");

  let [hasError, setHasError] = useState("");
  let navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (!user) {
    return (
      <div className="signup-container">
        <Helmet>
          <title>SignUp Page</title>
        </Helmet>
        <h2>Create a new account</h2>
        <form className="signup-form">
          <input
            type="text"
            placeholder="User name "
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
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
              createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed up
                  // const user = userCredential.user;
                  console.log("User created successfully");
                  updateProfile(auth.currentUser, {
                    displayName: userName,
                  })
                    .then(() => {
                      // ...
                    })
                    .catch((error) => {
                      // An error occurred
                      // ...
                    });

                  navigate("/");
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorCode, errorMessage);
                  setHasError(errorCode);
                });
            }}
          >
            Registration
          </button>

          {true && <p className="error-text">{hasError} </p>}
        </form>
      </div>
    );
  }
};

export default SignUp;
