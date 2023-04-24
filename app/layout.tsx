"use client";

import "./global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
