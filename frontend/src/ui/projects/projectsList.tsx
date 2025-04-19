"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Project } from "./project";
import { projectsData } from "@/data/projects";

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  time_worked: string;
  image: string;
  link: string;
  tag: string;
}

export function ProjectsList({ tag }: { tag: string }) {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const tagModified = tag.replace("", "#");
    setProjects(projectsData.filter((project) => project.tag === tagModified));
  }, [tag]);

  return (
    <div className="w-full overflow-x-auto flex flex-row md:gap-10 gap-5 items-center">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0, zIndex: 0 }}
          animate={{ opacity: 1, scale: 1, zIndex: 1 }}
          exit={{ opacity: 0, scale: 0, zIndex: 0 }}
          transition={{ duration: 0.5, delay: index * 0.5 }}
        >
          <Project {...project} />
        </motion.div>
      ))}
    </div>
  );
}
