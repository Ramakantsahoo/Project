import React from 'react';
import styles from './About.module.css'; // Import the CSS file

const About = () => {
    return (
        <div className={styles['about-container']}>
            <h1>About Us</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rerum quam fugiat in vitae ratione? Doloribus
                 vel quia quaerat, sed, rem fuga eum doloremque adipisci aut reiciendis earum quo temporibus?
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel vero ea, labore optio reprehenderit doloremque error? Nam adipisci 
                 ut porro nisi asperiores molestiae laboriosam, labore ad odio quod, pariatur tenetur.

            </p>
            <p>
                Our mission is to deliver high-quality products that bring value to our customers.
                We believe in continuous improvement and always strive to exceed expectations.
            </p>
            <h2 >Team Members</h2>
                         
            <div className={styles['team-grid']}>
               <div className={styles['team-member']}>
                     <h3>John Doe</h3>
                     <p>Frontend Developer</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>John Doe</h3>
                     <p>Frontend Developer</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>John Doe</h3>
                     <p>Frontend Developer</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>John Doe</h3>
                     <p>Frontend Developer</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>John Doe</h3>
                     <p>Frontend Developer</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>John Doe</h3>
                     <p>Frontend Developer</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>John Doe</h3>
                     
                     <p>Frontend Developer</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>John Doe</h3>
                     
                     <p>Frontend Developer</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>John Doe</h3>
                     
                     <p>Frontend Developer</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>John Doe</h3>
                     
                     <p>Frontend Developer</p>
               </div>

               <div className={styles['team-member']}>
                     <h3>John Doe</h3>
                     
                     <p>Frontend Developer</p>
               </div>
                
               <div className={styles['team-member']}>
                     <h3>John Doe</h3>
                     
                     <p>Frontend Developer</p>
               </div>
       
            </div>
        </div>
    );
};
                    
export default About;
