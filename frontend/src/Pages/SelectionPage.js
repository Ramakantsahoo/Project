

import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SelectionPage.module.css';
import drdo from './Images/Anchor.png';

const SelectionPage = () => {
  const history = useHistory();

  const handleAdminClick = () => {
    history.push('/admin-login');
  };

  const handleUserClick = () => {
    history.push('/user-login');
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.selectionContainer}>
        <img src={drdo} alt="DRDO Logo" className={styles.logo1} />
        <h2>Login as</h2>
        <div className={styles.buttonselectContainer}>
          <button className={styles.buttonselect} onClick={handleAdminClick}>Admin</button>
          <button className={styles.buttonselect} onClick={handleUserClick}>User</button>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
