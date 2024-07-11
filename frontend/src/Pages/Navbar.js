import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory, useLocation } from 'react-router-dom';
import drdo from "./Images/Anchor.png";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  const handleAboutNav = () => {
    console.log("button clicked");
  };

  const isDashboardPath = location.pathname === '/admin/dashboard' || location.pathname === '/user/dashboard';

  return (
    <div>
      <div className={styles.topnav} id="myTopnav" style={{ width: '100%', position: 'fixed', left: '0', top: '0' }}>
        <img src={drdo} alt="" className={styles.logonw} />
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/about">About</NavLink>
        {!isDashboardPath && <NavLink exact to="/selection">Sign In</NavLink>}
        <a href="javascript:void(0);" className={styles.icon}>
          <GiHamburgerMenu className={`${styles.fa} fa-bars`} onClick={() => {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
              x.className += " navresponsive";
            } else {
              x.className = "topnav";
            }
          }} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
