// components/ScrollReveal.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollReveal = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;