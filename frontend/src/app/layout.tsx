import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Fabrício Lopes - Desenvolvedor Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${montserrat.className} ${montserratAlternates.className} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
