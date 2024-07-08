import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './LoginPage.module.css';

const UserLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    console.log('Admin Username:', username);
    console.log('Admin Password:', password);
    history.push('/dashboard');
    // Add your login logic here
  };

  const handleSignupClick = () => {
    history.push('/signup');
  };

  return (
    <div className={styles.containeradmin}>
      <div className={styles.loginSection}>
        <h2>Login</h2>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="User ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleLogin} className={styles.buttonadmin}>Login</button>
        </div>
        <div className={styles.forgotPasswordContainer}>
          <a href="#">Forgot Password?</a>
        </div>
      </div>
      <div className={styles.welcomeSection}>
        <h2>Hello, Friend!</h2>
        <p>Register with your personal details to use all of our site's features.</p>
        <button className={styles.signupButtongreen} onClick={handleSignupClick}>Sign Up</button>
      </div>
    </div>
  );
};

export default UserLoginPage;