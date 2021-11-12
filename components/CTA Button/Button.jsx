import React from "react";
import Link from "next/link";
import * as styles from "./button.module.css";

const Button = ({ type, text, to }) => {
  const handleClick = () => {
    // navigate(to);
  };

  return (
    <Link href={to} passHref={true}>
      <button type={type} className={styles.button}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
