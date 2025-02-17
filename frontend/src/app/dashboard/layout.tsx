"use client";
import { ToggleSidebar } from "../ui/toggleSidebar";
import { ToggleSwitch } from "../ui/toggleSwitch";
import { motion } from "framer-motion";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex flex-col items-center">
      <header className="w-11/12 flex flex-row items-center justify-between mb-20 mt-10">
        <ToggleSwitch />
        <ToggleSidebar />
      </header>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
