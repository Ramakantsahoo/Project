import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useHistory, useLocation } from 'react-router-dom';
import drdo from "./Images/Anchor.png";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isDashboardPath = location.pathname === '/admin/dashboard' || location.pathname === '/user/dashboard';
  const isLoginPath = location.pathname === '/admin-login' || location.pathname === '/user-login';

  return (
    <div className={isOpen ? styles.sidebarOpen : styles.sidebarClosed}>
      <div className={styles.topnav} id="myTopnav">
        {isOpen && <img src={drdo} alt="" className={styles.logonw} />}
        <NavLink exact to="/" className={isOpen ? '' : styles.hidden}>Home</NavLink>
        <NavLink exact to="/about" className={isOpen ? '' : styles.hidden}>About</NavLink>
        {!isDashboardPath && <NavLink exact to="/selection" className={isOpen ? '' : styles.hidden}>Sign In</NavLink>}
        <button className={styles.icon} onClick={toggleSidebar}>
          {isOpen ? <AiOutlineClose className={styles.fa} /> : <GiHamburgerMenu className={styles.fa} />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
