import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme";
import { Layout } from "@/components/Layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Plataforma de Programas de Formação",
  description: "Plataforma para gerenciamento de programas de formação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} antialiased`}
      >
        <ChakraProvider value={theme}>
          <Layout>
            {children}
          </Layout>
        </ChakraProvider>
      </body>
    </html>
  );
}
