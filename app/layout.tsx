import type { Metadata } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";

const OpenSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "100",
});

export const metadata: Metadata = {
    title: "Better-Auth Starter Repo",
    description: "Your Better Auth starter project to build your own auth system going through the docs.",
    keywords: ["auth", "better-auth", "starter", "repo"],
    icons: {
        icon: "/next.svg",
        apple: "/next.svg",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${OpenSans.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
