import React from 'react';
import styles from './About.module.css'; // Import the CSS file

const About = () => {
    return (
        <div className={styles['about-container']}>
            <h1>About Us</h1>
            <p>
            Welcome to our Telephone Directory Management System!
             <br />
           We are a dedicated team of interns passionate about technology and innovation. Together, we are committed to creating a 
           user-friendly and efficient telephone directory management system to streamline contact organization and accessibility.

            </p>
            <p>
            Our mission is to develop a robust and intuitive system that simplifies the way individuals and organizations manage their contacts.
             We aim to provide a seamless experience for users, ensuring easy access to accurate and up-to-date information.
            </p>
            <h2 >Team Members</h2>
                         
            <div className={styles['team-grid']}>
               <div className={styles['team-member']}>
                     <h3>Ramakanta Sahoo</h3>
                     <p>Backend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Ashish Kumar Behera</h3>
                     <p>Backend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Sriman Swastik Das</h3>
                     <p>Backend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Suryadeep Barik</h3>
                     <p>Backend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Mahak Agrawal</h3>
                     <p>Frontend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Sanghamitra Sahoo</h3>
                     <p>Frontend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Shibani Panda</h3>
                     
                     <p>Frontend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Adya Mishra</h3>
                     
                     <p>Frontend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Bhababhanjan Panda</h3>
                     
                     <p>Frontend Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Subham Mohanty</h3>
                     
                     <p>Database Team</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>Umang Das</h3>
                     
                     <p>Database Team</p>
               </div>
                
               <div className={styles['team-member']}>
                     <h3>Jagannath Adhikari</h3>
                     
                     <p>Database Team</p>
               </div>
       
            </div>
        </div>
    );
};
                    
export default About;