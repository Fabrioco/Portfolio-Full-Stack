"use client";

import { motion } from "framer-motion";
import { Envelope, PhoneCall } from "@phosphor-icons/react";

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 300 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-5 md:justify-center md:items-center"
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-semibold text-title"
      >
        Meus Contatos
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 300 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <motion.h3
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-medium"
        >
          E-mail
        </motion.h3>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="mailto:fabriciooliveiralopes50@gmail.com"
          className="flex items-center gap-1"
        >
          <Envelope size={40} color="#fffffe" />
          fabriciooliveiralopes50@gmail.com
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 300 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2"
      >
        <motion.h3
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-medium"
        >
          Telefone
        </motion.h3>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="tel:+55 (11) 9
            6016-8159"
          className="flex items-center gap-1"
        >
          <PhoneCall size={40} color="#fffffe" /> +55 (11) 9 6016-8159
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
