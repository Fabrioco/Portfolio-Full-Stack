import { TitleProject } from "@/ui/projects/titleProject";
import { SelectionTagProject } from "@/ui/projects/selectionTagProject";

export default function Projects() {
  return (
    <div className="h-full flex flex-col gap-10">
      <TitleProject />
      <SelectionTagProject />
    </div>
  );
}
