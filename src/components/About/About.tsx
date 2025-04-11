import React from "react";

import styles from "./About.module.css";



export const About: React.FC = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img
             src="/assets/about/frontend.png"
             alt="ursor icon"
             className={styles.heroImg} height={100} width={100}
          />
           
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img
             src="/assets/about/backend.jpeg"
             alt="ursor icon"
             className={styles.heroImg} height={100} width={100}
          />

            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
