import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styles from './AdminLoginPage.module.css';
import drdo from "./Images/Anchor.png";

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
        alert('Login successful');
        history.push('/admin/dashboard');
      }
    } catch (error) {
      if (error.response) {
        console.error('Login failed:', error.response.data.message);
        alert('Invalid username or password');
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('No response from the server. Please try again later.');
      } else {
        console.error('Error:', error.message);
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className={styles.containeradmin}>
      <div className={styles.loginSection}>
        <img src={drdo} alt="Logo" className={styles.logo} />
        <h2>Welcome!</h2>
        <p>Please login to continue</p>
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
