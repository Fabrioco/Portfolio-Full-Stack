"use client";
import { motion } from "framer-motion";

export function Description() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        Sou um Desenvolvedor Full Stack apaixonado por tecnologia e programação.
        Sempre fui curioso sobre como as coisas funcionam por trás das telas, e
        isso me levou a mergulhar no mundo do desenvolvimento web.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.75 }}
      >
        Atualmente, desenvolvo projetos utilizando <strong>Next.js</strong>,{" "}
        <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>,{" "}
        <strong>Node.js</strong> e <strong>PostgreSQL</strong>, criando
        aplicações modernas, escaláveis e eficientes.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      >
        Estou em busca da minha primeira oportunidade profissional e também
        aberto para freelances. Gosto de desafios, aprendizado constante e de
        transformar ideias em soluções digitais.
      </motion.p>
    </>
  );
}
