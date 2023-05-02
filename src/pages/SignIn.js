import React, { useState } from "react";
import "../styles/SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isStaff, setIsStaff] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Implement sign in logic here
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implement sign up logic here
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Implement forgot password logic here
  };

  const toggleStaff = () => {
    setIsStaff(!isStaff);
  };

  const toggleStudent = () => {
    setIsStudent(!isStudent);
  };

  const toggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
  };

  return (
    <div className="signInContainer">
      {!isForgotPassword ? (
        <form className="signInForm">
          <h2>Sign In/Sign Up</h2>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="userType">User Type:</label>
          <div className="userTypeContainer">
            <div
              className={isStaff ? "userTypeButton active" : "userTypeButton"}
              onClick={toggleStaff}
            >
              Staff
            </div>
            <div
              className={
                isStudent ? "userTypeButton active" : "userTypeButton"
              }
              onClick={toggleStudent}
            >
              Student
            </div>
          </div>

          <div className="buttonContainer">
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignUp}>Sign Up</button>
          </div>

          <div className="forgotPasswordLink">
            <p onClick={toggleForgotPassword}>Forgot password?</p>
          </div>
        </form>
      ) : (
        <form className="forgotPasswordForm">
          <h2>Forgot Password</h2>
          <label htmlFor="forgotPasswordEmail">Email:</label>
          <input
            type="email"
            id="forgotPasswordEmail"
            value={forgotPasswordEmail}
            onChange={(e) => setForgotPasswordEmail(e.target.value)}
            required
          />

          <div className="buttonContainer">
            <button onClick={handleForgotPassword}>Reset Password</button>
          </div>

          <div className="forgotPasswordLink">
            <p onClick={toggleForgotPassword}>Back to Sign In</p>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignIn;
