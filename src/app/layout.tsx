

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CongratsProvider } from "./congratsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The deceptive dossier",
  description: "A murder mistery game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/dossier.ico" sizes="any" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet" />
      </head>
      <CongratsProvider>
        <body className={inter.className}>
          {children}
        </body>
      </CongratsProvider>
    </html>
  );
}
