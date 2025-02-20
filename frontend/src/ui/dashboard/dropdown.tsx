"use client";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

import { motion } from "framer-motion";

export function Dropdown() {
  return (
    <div className="absolute top-28 mt-10">
      <div className="relative w-[200px] h-[100px] grid grid-cols-2  ">
        <motion.i
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0, transition: { delay: 1.5 } }}
          className="absolute top-0 left-0"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/Fabrioco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo size={40} color="#fffffe" weight="bold" />
          </motion.a>
        </motion.i>

        <motion.i
          className="absolute top-0 right-0"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 1.5 } }}
          exit={{ opacity: 0, scale: 0, transition: { delay: 0 } }}
        >
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
        </motion.i>

        <motion.i
          className="absolute bottom-0 left-10"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.5 },
          }}
          exit={{ opacity: 0, scale: 0, transition: { delay: 1 } }}
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://wa.me/5511960168159?text=Olá%20Fabrício,%20gostaria%20de%20conversar%20com%20você!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappLogo size={40} color="#fffffe" weight="regular" />
          </motion.a>
        </motion.i>

        <motion.i
          className="absolute bottom-0 right-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 1 } }}
          exit={{ opacity: 0, scale: 0, transition: { delay: 0.5 } }}
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/fabrício-oliveira-lopes-b713892bb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={40} color="#fffffe" weight="bold" />
          </motion.a>
        </motion.i>
      </div>
    </div>
  );
}
