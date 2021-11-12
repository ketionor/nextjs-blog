import React from "react";
import * as styles from "./contact.module.css";
import ContactForm from "./ContactForm";

const Contact = () => {
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

export default Contact;
