import React from 'react';
import '../Pages/RegisterScreen.css'; // Include your CSS styles

function RegisterPage() {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Register</h2>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <label>
            Employee No.
            <input type="text" name="employeeNo" />
          </label>
          <label>
            Position:
            <select name="position">
              <option>Doctor</option>
              <option>Nurse</option>
              <option>Pharmacist</option>
            </select>
          </label>
          <p>
            Already have an account? <a href="/login">Login</a>
          </p>
          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
      <div className="image-container">
        <img src="/src/images/login2.jpg" alt="Medical Background" />
      </div>
    </div>
  );
}

export default RegisterPage;
