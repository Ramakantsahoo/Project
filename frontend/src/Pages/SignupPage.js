import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SignupPage.module.css';
import drdo from "./Images/drdoLogo.png"

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Handle signup logic here
  };

  return (
    <div className={styles['signup-container']}>
      <div className={styles['signup-section']}>
        <img src={drdo} alt="" className={styles['logo']} />
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
