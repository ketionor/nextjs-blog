import React from "react";
import Nav from "./Nav/Nav";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Nav />
      {/* <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit={variants.exit} // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        className=""
      > */}
      {children}
      {/* </motion.main> */}
    </div>
  );
};

export default Layout;
