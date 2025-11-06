import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MedPro Supply - Equipamiento Médico y Quirúrgico Profesional",
  description: "Líder en suministro de material médico y quirúrgico de alta calidad. Soluciones integrales para hospitales, clínicas y profesionales de la salud.",
  keywords: "material médico, equipamiento quirúrgico, suministros hospitalarios, instrumental médico, equipos médicos profesionales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
