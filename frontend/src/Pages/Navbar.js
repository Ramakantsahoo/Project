
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import drdo from "./Images/drdoLogo.png";
import styles from "./Navbar.module.css";

 const Navbar=()=>{
  return (
    <div>
    <div className={styles.topnav} id="myTopnav">
    <img src={drdo} alt="" className={styles.logonw} />
    <a href="#home" >Home</a>
    <a href="#news">About</a>
    <a href="#contact">Search</a>
    <a href="#about">Sign In/Up</a>
    <a href="#about">Dashboard</a>
    <a href="javascript:void(0);" className={styles.icon}>
    <GiHamburgerMenu className={`${styles.fa} fa-bars`} onClick={()=>{
      //alert('huoi');
      var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
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