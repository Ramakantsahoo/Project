
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './HomePage.module.css';

function HomePage() {
  
  const history = useHistory();

  
  const handleClick = () => {
    history.push('/selection');
  };

  return (
    <div className={styles['landing-page']}>
      {/* <h1>Welcome to Our Telephone Management System</h1>
      <p>Manage all your calls efficiently with our state-of-the-art system.</p> */}
        <div className={styles.iamfaded}>
        <h1>Welcome to Our Telephone Directory Management</h1>
        <p>Find contact information for businesses and individuals.<br/>
            Start your search now! Discover local restaurants, services, and more.<br/>
            Explore our comprehensive listings and connect with the right people today.<br/>
            Whether you're looking for plumbers, doctors, or local attractions,<br/>
            our directory has you covered with accurate and up-to-date information.</p>

            <button className={styles['sign-in-button']} onClick={handleClick}>Log In</button>
        </div>
      
    </div>
  );
}

export default HomePage;


