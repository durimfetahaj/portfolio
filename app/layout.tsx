"use client";

import "./global.css";
import Sidebar from "@/components/Sidebar";
import { Container, Grid } from "@mui/material";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Container
          maxWidth="md"
          sx={{ padding: { xs: "12px", md: "120px 0px" } }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                justifyContent: { xs: "flex-start", md: "flex-end" },
                display: "flex",
                marginBottom: { xs: "20px" },
              }}
            >
              <Sidebar />
            </Grid>
            <Grid item xs={12} md={9}>
              <main>{children}</main>
            </Grid>
          </Grid>
        </Container>
      </body>
    </html>
  );
}
