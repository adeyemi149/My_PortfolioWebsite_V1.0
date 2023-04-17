import React from "react";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const variant = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variant}
      transition={{ duration: 0.7, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
