import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import * as styles from "../styles/contact.module.css";

const contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>Contact</h2>
        <p>Use this form to get in touch!</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default contact;
