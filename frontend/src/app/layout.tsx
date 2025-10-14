import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChakraProvider value={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
