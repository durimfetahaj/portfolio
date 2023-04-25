"use client";

import "./global.css";
import Sidebar from "@/components/Sidebar";
import { Container } from "@mui/material";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Container sx={{ display: "flex", paddingTop: { xs: 3, sm: 30 } }}>
          <Sidebar />
          <main>{children}</main>
        </Container>
      </body>
    </html>
  );
}
