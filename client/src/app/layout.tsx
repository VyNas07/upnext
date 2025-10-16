import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "@/components/Header";
import { Box } from "@chakra-ui/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "UpNext - Programas de Formação",
  description: "Plataforma para centralizar e divulgar programas de formação em tecnologia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
        <Providers>
          <Header />
          <Box as="main">
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}