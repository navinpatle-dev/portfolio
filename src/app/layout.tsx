import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Navinkumar Patle | DevOps Engineer",
  description: "DevOps Engineer with 2+ years of experience in cloud infrastructure, CI/CD, and automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}