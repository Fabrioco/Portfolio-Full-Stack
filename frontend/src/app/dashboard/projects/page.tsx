import { NavButtonsProjects } from "@/ui/projects/navButton";
import { TitleProject } from "@/ui/projects/titleProject";
import { ProjectsList } from "@/ui/projects/projectsList";

export default function Projects() {
  return (
    <div className="h-full flex flex-col  justify-center gap-10">
      <TitleProject />
      <NavButtonsProjects />
      <ProjectsList />
    </div>
  );
}
