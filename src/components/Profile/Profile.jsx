import "./Profile.css";

import { auth } from "../../firebase/confige";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  if (loading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="div">
        <p>
          Email :<span>{user.email}</span>
        </p>
        <p>
          user name:
          <span>{user.displayName}</span>
        </p>
        <p>
          Last Sign in:
          <span>{user.metadata.lastSignInTime}</span>
        </p>
        <p>
          Account Created:
          <span>{user.metadata.creationTime}</span>
        </p>
        <div className="btns">
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              signOut(auth)
                .then(() => {
                  console.log("Sign-out successful.");
                  navigate("/");
                })
                .catch((error) => {
                  // An error happened.
                  console.log("Error occurred");
                });
            }}
          >
            Logout
          </button>
          <button className="button delete">delete</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
