"use client";
import { motion } from "framer-motion";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

export function SocialMedia() {
  return (
    <motion.div
      className="flex flex-col gap-5 md:w-1/3"
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 300 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5 }}
      className="text-xl font-semibold text-title">Redes Sociais</motion.h2>
      <div className="grid grid-cols-2 place-items-center gap-y-2 md:gap-y-6 md:gap-x-10 w-1/2 md:w-full">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://www.instagram.com/fabriocode/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo
            size={40}
            color="#fffffe"
            weight="bold"
            className="cursor-pointer"
          />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://www.linkedin.com/in/fabrício-oliveira-lopes-b713892bb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogo size={40} color="#fffffe" weight="bold" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://wa.me/5511960168159?text=Olá%20Fabrício,%20gostaria%20de%20conversar%20com%20você!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsappLogo size={40} color="#fffffe" weight="regular" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="https://github.com/Fabrioco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo size={40} color="#fffffe" weight="bold" />
        </motion.a>
      </div>
    </motion.div>
  );
}
