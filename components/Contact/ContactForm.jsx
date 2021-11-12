import React from "react";
import Button from "../CTA Button/Button";
import Link from "next/link";
import * as styles from "./contactForm.module.css";

const ContactForm = () => {
  return (
    <form
      className={styles.myForm}
      action="https://formspree.io/f/mwkadnnl"
      method="POST"
    >
      <ul>
        <li>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="John Snow"
            required=""
            className={styles.inputArea}
          />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="thewhitewolf@gmail.com"
            className={styles.inputArea}
          />
        </li>
        <li>
          <label htmlFor="message">Message</label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Normally I would use a raven but..."
            required=""
            className={styles.inputArea}
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          ></input>
        </li>
      </ul>
      <Button type="submit" text="Submit" to="/" />
    </form>
  );
};

export default ContactForm;
