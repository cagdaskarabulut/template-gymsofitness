import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gymso Fitness",
  description: "Upgrade your body at Gymso Fitness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/tooplate-gymso-style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
