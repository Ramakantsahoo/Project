
import React from 'react';
import { useHistory } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  
  const history = useHistory();

  
  const handleClick = () => {
    history.push('/selection');
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Our Telephone Management System</h1>
      <p>Manage all your calls efficiently with our state-of-the-art system.</p>
      <button className="sign-in-button" onClick={handleClick}>Sign In</button>
    </div>
  );
}

export default HomePage;


