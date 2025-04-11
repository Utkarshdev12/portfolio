import React from "react";

import styles from "./Hero.module.css";


export const Hero: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Utkarsh Dev</h1>
        <p className={styles.description}>
          I'm a full-stack developer 
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
         src="/assets/hero/heroImage.jpeg"
         alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
