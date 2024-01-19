import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

const inter = Inter({ subsets: ["cyrillic-ext"] });

export const metadata: Metadata = {
  title: "OpenWeatherApi",
  description: "API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
