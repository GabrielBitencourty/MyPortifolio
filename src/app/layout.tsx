import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { SmoothScroll } from "@/components/layout/SmoothScroll";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Bitencourt | Software Engineer",
  description: "Portfólio de Gabriel Bitencourt, Software Engineer especializado em aplicações web modernas, APIs e soluções escaláveis.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} h-full antialiased`}
    >
      <SmoothScroll />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
