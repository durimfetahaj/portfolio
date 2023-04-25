"use client";

import "./global.css";
import Sidebar from "@/components/Sidebar";
import { Container, Grid } from "@mui/material";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Container
          sx={{
            paddingTop: { xs: 3, sm: 15 },
            maxWidth: 1440,
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={1}>
              <Sidebar />
            </Grid>
            <Grid item xs={12} sm={6} md={11}>
              <main>{children}</main>
            </Grid>
          </Grid>
        </Container>
      </body>
    </html>
  );
}
