import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SignupPage.module.css';
import drdo from "./Images/drdoLogo.png";

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        alert('User registered successfully');
        console.log('User registered successfully');
        // Redirect to login page or other page if necessary
      } else {
        const errorData = await response.json();
        alert('Failed to register user: ' + errorData.message);
        console.log('Failed to register user:', errorData.message);
      }
    } catch (error) {
      alert('Failed to register user: ' + error.message);
      console.log('Failed to register user:', error.message);
    }
  };

  return (
    <div className={styles['signup-container']}>
      <div className={styles['signup-section']}>
        <img src={drdo} alt="" className={styles['lSignUP']} />
        <div className={styles['input-container']}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles['input-container']}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles['input-container']}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles['button-container']}>
          <button onClick={handleSignup} className={styles.buton1}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
