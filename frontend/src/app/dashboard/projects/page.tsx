import { NavButtonsProjects } from "@/app/ui/projects/navButton";
import { TitleProject } from "@/app/ui/projects/titleProject";
import { ProjectsList } from "@/app/ui/projects/projectsList";

export default function Projects() {
  return (
    <div className="h-full flex flex-col  justify-center gap-10">
      <TitleProject />
      <NavButtonsProjects />
      <ProjectsList />
    </div>
  );
}
