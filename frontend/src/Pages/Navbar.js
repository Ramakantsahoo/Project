
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory } from 'react-router-dom';
import drdo from "./Images/drdoLogo.png";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

 const Navbar=()=>{
 const history = useHistory();

  const handleAboutNav=()=>{
    // history.push('/about');
    console.log("button clicked");
  };
  return (
    <div>
    <div className={styles.topnav} id="myTopnav" style={{width:'100%',position:'fixed',left:'0',top:'0'}}>
    <img src={drdo} alt="" className={styles.logonw} />
    <a href="/" >Home</a>
    <a href="/about" onClick={handleAboutNav}>About</a>
    <a href="/selection">Sign In/Up</a>
    <a href="javascript:void(0);" className={styles.icon}>
    <GiHamburgerMenu className={`${styles.fa} fa-bars`} onClick={()=>{
      //alert('huoi');
      var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " navresponsive";
        } else {
          x.className = "topnav";
        }
    }}/>
    </a>
  </div>
  </div>
  );
 }
 export default Navbar;