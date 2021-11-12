import React from "react";
import * as styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About Josh</h2>
        <div className={styles.blockOne}>
          <p>
            Hi 👋 I'm Josh. I'm a self taught developer, but it's not quite that
            simple. I've been interested in code since I was a preteen. I
            thought I was going to go to college to get a computer science
            degree. When I turned twenty though, I decided it was time to join
            the military. I wanted a new challenge. I spent six years in the US
            Navy's nuclear power program, did some traveling, met my beautiful
            wife, had my first child. I'd say it worked out!
          </p>
          {/* <StaticImage
            className={headshot}
            src="../images/headshot.jpg"
            alt="josh sandefer"
            loading="eager"
          /> */}
        </div>
        <p>
          I forgot about my dream of coding though, and when I left the Navy I
          pursued a degree in finance. I completed my degree in finance and
          while I was good at it, it never felt quite right. I worked as a
          photographer instead. In 2020, at the start of the pandemic, I started
          doing a lot of soul searching, and finally realized what had felt so
          wrong this entire time. I needed to write code!
        </p>
        <p>
          So, I set out to learn JavaScript and here I am today consuming
          everything I can in the space. I work hard to ensure that I am the
          best developer I am capable of being.
        </p>
        <p>
          In my spare time I am working toward a spending time with my beautiful
          wife and now TWO kids, working toward my CS degree at University of
          Houston, and pumping iron. Oh, and the occasional video game, when
          time permits. :)
        </p>
      </div>
    </div>
  );
};

export default About;
