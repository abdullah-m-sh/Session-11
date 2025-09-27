import { Link } from "react-router-dom";
import "./ResetPage.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/confige";

const ResetPasswordPage = () => {
  return (
    <div className="ResetPasswordPage">
      <form className="reset-password">
        <input type="email" placeholder="E-mail" />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            sendPasswordResetEmail(auth, email)
              .then(() => {
                console.log("reset password");
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
              });
          }}
        >
          Reset Password
        </button>
      </form>
      <Link to="/login">
        <button className="button" type="button">
          I will remember my password
        </button>
      </Link>
    </div>
  );
};

export default ResetPasswordPage;
