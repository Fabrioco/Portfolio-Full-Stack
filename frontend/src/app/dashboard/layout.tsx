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
      <motion.header
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -300 }}
        transition={{ duration: 0.5 }}
        className="w-11/12 flex flex-row items-center justify-between mb-20 mt-10"
      >
        <ToggleSwitch />
        <ToggleSidebar />
      </motion.header>
      <div>{children}</div>
    </div>
  );
}
