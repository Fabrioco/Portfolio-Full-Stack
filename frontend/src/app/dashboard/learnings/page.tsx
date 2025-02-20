import { SelectionCategory } from "@/ui/learnings/selectionCategory";
import { TitleLearnings } from "@/ui/learnings/title";

export default function Learnings() {
  return (
    <div className="w-11/12 md:w-1/2 flex flex-col justify-center mx-auto gap-10 md:text-center lg:hidden">
      <TitleLearnings />
      <SelectionCategory />
    </div>
  );
}
