import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const handleSendCode = (e) => {
    e.preventDefault();
    // Send code to user's email here
    setStep(2);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    // Verify code here
    setStep(3);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Reset password here
    setStep(4);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2 className="forgot-password-heading">Forgot Password</h2>
        {step === 1 && (
          <form className="forgot-password-form" onSubmit={handleSendCode}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send Code</button>
          </form>
        )}
        {step === 2 && (
          <form className="forgot-password-form" onSubmit={handleVerifyCode}>
            <input
              type="text"
              placeholder="Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <button type="submit">Verify Code</button>
          </form>
        )}
        {step === 3 && (
          <form className="forgot-password-form" onSubmit={handleResetPassword}>
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Reset Password</button>
          </form>
        )}
        {step === 4 && (
          <div className="forgot-password-success">
            <p>Password successfully reset!</p>
            <Link to="/">Go back to login</Link>
          </div>
        )}
        <p className="forgot-password-error">{error}</p>
      </div>
    </div>
  );
};

export default ForgotPassword;
