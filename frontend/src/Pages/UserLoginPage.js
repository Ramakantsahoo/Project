import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './LoginPage.module.css';
import axios from 'axios';

const UserLoginPage = () => {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', {
        name,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        alert('Login successful');
        console.log('Login successful');
        history.push('/user/dashboard');
      }
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
      alert('Login failed: ' + error.response.data.message);
    }
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
            value={name}
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