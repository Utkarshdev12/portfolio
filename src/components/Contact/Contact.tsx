import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="utkarshdev12@email.com">utkarshdev12@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/utkarsh-dev-862373249?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3drb3QooRA6K8fSFG9Jo8Q%3D%3D">linkedin.com/Utkarsh Dev</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Utkarshdev12">github.com/utkarshdev12</a>
        </li>
      </ul>
    </footer>
  );
};
