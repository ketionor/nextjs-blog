import React from "react";
import * as styles from "./hero.module.css";
import Button from "../CTA Button/Button";
// import Social from "../Social/Social";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.myName}>Developer</h1>
          <p className={styles.tagLine}>
            Building ultra fast websites, because thats what Google likes. In my
            spare time I like to take dope photos. Houston, Texas.
          </p>
        </div>
        <div>
          <Button type="" text="CONTACT" to="/contact" />
          <Button type="" text="SEE MY WORK" to="/projects" />
        </div>
        <div>{/* <Social /> */}</div>
      </div>
    </div>
  );
};

export default Hero;
