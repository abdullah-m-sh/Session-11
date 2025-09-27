import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/confige";
import { getAuth, signOut } from "firebase/auth";

import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
    let navigate = useNavigate();
  return (
    <div className="Navbar">
      <Link to="/" className="logo">
        <h1>Logo</h1>
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="buttn">
        {!user && (
          <Link to="/login">
            <button className="button">Login</button>
          </Link>
        )}
        {!user && (
          <Link to="/signup">
            <button className="button">Sign Up</button>
          </Link>
        )}
        {user && (
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
            Sign out{" "}
          </button>
        )}
        {user && (
          <Link to="/profile">
            <button className="button">
              <FaRegUserCircle />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
