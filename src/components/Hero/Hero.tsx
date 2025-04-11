import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

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
      <img src={getImageUrl("hero/heroimage.jpeg")} alt="Hero" />

     

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
