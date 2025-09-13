
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UniverseEx",
  description: "Visualize imagens de Marte capturadas por Rovers da NASA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
