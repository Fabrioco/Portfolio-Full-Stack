import { Profile } from "../ui/dashboard/profile";
import { Description } from "../ui/dashboard/description";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center h-auto text-white px-2 gap-10">
      <Profile />
      <Description />
    </div>
  );
}
