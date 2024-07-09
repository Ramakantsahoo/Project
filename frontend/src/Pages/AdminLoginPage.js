import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styles from './AdminLoginPage.module.css';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/admin/login', {
        username,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('adminToken', response.data.token);
        alert('login successful');
        history.push('/admin/dashboard');
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2
        console.error('Login failed:', error.response.data.message);
        alert('Invalid username or password');
      } else if (error.request) {
        // Request was made but no response was received
        console.error('No response received:', error.request);
        alert('No response from the server. Please try again later.');
      } else {
        // Something else happened
        console.error('Error:', error.message);
        alert('An error occurred. Please try again.');
      }
    }
  };

  const handleSignupClick = () => {
    history.push('/signup');
  };

  return (
    <div className={styles.containeradmin}>
      <div className={styles.loginSection}>
        <h2>Admin Login</h2>
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
      </div>
    </div>
  );
};

export default AdminLoginPage;
