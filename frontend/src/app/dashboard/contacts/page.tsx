import { Contact } from "@/ui/contacts/contacts";
import { SocialMedia } from "@/ui/contacts/socialMedia";
import { TitleContacts } from "@/ui/contacts/title";

export default function Contacts() {
  return (
    <div className="w-11/12 h-full flex flex-col gap-10 mx-auto md:items-center text-white md:text-center">
      <TitleContacts />
      <SocialMedia />
      <Contact />
    </div>
  );
}
