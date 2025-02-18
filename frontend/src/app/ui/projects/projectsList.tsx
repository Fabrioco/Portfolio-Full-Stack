"use client";
import { motion } from "framer-motion";
import { Project } from "./project";

export function ProjectsList() {
  return (
    <div className="w-full overflow-x-auto flex flex-row md:gap-10 gap-5 items-center">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, zIndex: 0 }}
          animate={{ opacity: 1, scale: 1, zIndex: 1 }}
          exit={{ opacity: 0, scale: 0, zIndex: 0 }}
          transition={{ duration: 0.5, delay: index * 0.5 }}
        >
          <Project />
        </motion.div>
      ))}
    </div>
  );
}
