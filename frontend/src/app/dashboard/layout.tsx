import { Footer } from "@/ui/footer";
import { Header } from "@/ui/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen min-h-screen relative flex flex-col justify-between">
      <Header />
      <div className="w-11/12 h-full mx-auto mb-5">{children}</div>
      <Footer />
    </div>
  );
}
