"use client";
import { motion } from "framer-motion";

export default function MotionFile({children}) {
  return (
    <motion.div
      className="motionThing"
      initial={{ opacity: 0, scale: 0.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
