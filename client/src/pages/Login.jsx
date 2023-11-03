import React, { useState } from 'react';

function Login() {
  const [loginData, setLoginData] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const [signupData, setSignupData] = useState({
    signupName: '',
    signupEmail: '',
    signupPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLoginForm(loginData);
    if (Object.keys(validationErrors).length === 0) {
      // Check login logic here (e.g., match email and password)
      const user = users.find((u) => u.email === loginData.loginEmail);
      if (user && user.password === loginData.loginPassword) {
        alert('Login successful!');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateSignupForm(signupData);
    if (Object.keys(validationErrors).length === 0) {
      // Add user to the users array (for demo purposes)
      setUsers([...users, signupData]);
      alert('Sign-up successful! You can now login.');
      setSignupData({
        signupName: '',
        signupEmail: '',
        signupPassword: '',
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateLoginForm = (data) => {
    const errors = {};

    if (!data.loginEmail) {
      errors.loginEmail = 'Email is required';
    }
    if (!data.loginPassword) {
      errors.loginPassword = 'Password is required';
    }

    return errors;
  };

  const validateSignupForm = (data) => {
    const errors = {};

    if (!data.signupName) {
      errors.signupName = 'Name is required';
    }
    if (!data.signupEmail) {
      errors.signupEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.signupEmail)) {
      errors.signupEmail = 'Email is invalid';
    }
    if (!data.signupPassword) {
      errors.signupPassword = 'Password is required';
    }

    return errors;
  };

  return (
    <div className="container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="loginEmail"
              value={loginData.loginEmail}
              onChange={handleLoginChange}
            />
            {errors.loginEmail && <span className="error">{errors.loginEmail}</span>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="loginPassword"
              value={loginData.loginPassword}
              onChange={handleLoginChange}
            />
            {errors.loginPassword && <span className="error">{errors.loginPassword}</span>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignupSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="signupName"
              value={signupData.signupName}
              onChange={handleSignupChange}
            />
            {errors.signupName && <span className="error">{errors.signupName}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="signupEmail"
              value={signupData.signupEmail}
              onChange={handleSignupChange}
            />
            {errors.signupEmail && <span className="error">{errors.signupEmail}</span>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="signupPassword"
              value={signupData.signupPassword}
              onChange={handleSignupChange}
            />
            {errors.signupPassword && <span className="error">{errors.signupPassword}</span>}
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
