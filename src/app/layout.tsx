import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Projeto do curso NextJS - Origamid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={type_second.variable}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
