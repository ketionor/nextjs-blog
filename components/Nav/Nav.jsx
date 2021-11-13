import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import * as styles from "./nav.module.css";
// import Modal from "./Modal";
// import Logo from "../../images/signature-logo.png";
// import Button from "../CTA Button/Button";

//Define links to be used in the header, links to outside contents must use https format
const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Blog", to: "https://blog.joshsandefer.dev" },
];

const Header2 = () => {
  const openNav = () => {
    document.getElementById("nav-menu").style.width = "100vw";
  };

  return (
    <header className={styles.container}>
      {/* <Modal links={links} /> */}
      <div className={styles.logoContainer}>
        <Link href="/" passHref>
          <Image
            className={styles.logo}
            src="/signature-logo.png"
            alt="josh sandefer signature logo"
            width="130"
            height="90"
          />
        </Link>
      </div>
      <ul className={styles.navMenu}>
        {links.map(({ name, to }) => {
          if (to[0] === "/") {
            return (
              <li>
                <Link href={to} activeClassName={styles.activeLink}>
                  {name}
                </Link>
              </li>
            );
          } else {
            return (
              <li>
                <a href={to}>{name}</a>
              </li>
            );
          }
        })}
      </ul>

      <svg
        className={styles.hamburger}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onClick={openNav}
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </header>
  );
};

Header2.defaultProps = {
  siteTitle: ``,
};

export default Header2;
