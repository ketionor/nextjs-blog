import React from "react";
import { Link } from "gatsby";
import * as styles from "./modal.module.css";

const Modal = ({ links }) => {
  const closeNav = () => {
    document.getElementById("nav-menu").style.width = "0vw";
  };

  return (
    <div className={styles.container} id="nav-menu">
      <ul className={styles.overlayContent}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={closeNav}
          className={styles.xButton}
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
        {links.map(({ name, to }) => {
          //if the first character is a slash it is an internal link
          if (to[0] === "/") {
            return (
              <li>
                <Link to={to} activeClassName={styles.activeLink}>
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
    </div>
  );
};

export default Modal;
