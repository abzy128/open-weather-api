import { Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseLine from "@mui/material/CssBaseline";
import { lightModeTheme } from "@/themes";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "API Docs",
  description: "API Docs",
};

export default function SwaggerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <ThemeProvider theme={lightModeTheme}>
        <CssBaseLine />
        {children}
        <Footer />
      </ThemeProvider>
  );
}
