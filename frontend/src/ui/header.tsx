"use client";

import { motion } from "framer-motion";
import { ToggleSwitch } from "./toggleSwitch";
import { ToggleSidebar } from "./toggleSidebar";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -300 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -300 }}
      transition={{ duration: 0.5 }}
      className="w-11/12 flex flex-row items-center justify-between pt-5 mx-auto mb-24"
    >
      <ToggleSwitch />
      <ToggleSidebar />
    </motion.header>
  );
}
