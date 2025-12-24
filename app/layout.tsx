import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Портфолио | Full-Stack Разработчик",
  description: "Портфолио full-stack разработчика. Современные веб-приложения, проекты и навыки. React, Next.js, TypeScript, Node.js.",
  keywords: ["портфолио", "full-stack разработчик", "React", "Next.js", "TypeScript", "веб-разработка"],
  authors: [{ name: "Full-Stack Developer" }],
  openGraph: {
    title: "Портфолио | Full-Stack Разработчик",
    description: "Портфолио full-stack разработчика. Проекты, навыки и контакты.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
