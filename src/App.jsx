import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import LogIn from "./components/Log-in/Log-in";
import SignUp from "./components/Sign-up/Sign-up";
import Profile from "./components/Profile/Profile";
import ResetPasswordPage from "./components/ResetPasswordPage/ResetPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resetpassword" element={<ResetPasswordPage />} />
      </Routes>
    </>
  );
}

export default App;
