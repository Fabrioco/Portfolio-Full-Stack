import { Description } from "@/app/ui/aboutMe/description";
import { Title } from "@/app/ui/aboutMe/title";

export default function AboutMe() {
  return (
    <div className="w-11/12 h-auto flex flex-col justify-center items-center text-white px-2 gap-10 mx-auto">
      <div className="text-center w-10/12 md:w-1/2">
        <Title />
      </div>
      <div className="w-10/12 md:w-1/2  text-justify text-paragraph mb-4">
        <Description />
      </div>
    </div>
  );
}
