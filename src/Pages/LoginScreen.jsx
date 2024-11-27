import React from 'react';
import '../Pages/RegisterScreen.css'; 

function LoginScreen() {
  return (
    /// This is a comment
    <div className="register-container">
    <h3>Patient checkup management system - Base Hospital Avissawella</h3>
    <div className="container">
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <p>
            Don't have an account? <a href="/login">Register</a>
          </p>
          <button type="submit" className="register-button">Login</button>
        </form>
      </div>
      <div className="image-container">
        <img src="/src/images/login2.jpg" alt="Medical Background" />
      </div>
    </div>
    </div>
  );
}

export default LoginScreen;
