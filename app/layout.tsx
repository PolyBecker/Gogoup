import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gogoup.com"),
  title: {
    default: "Gogoup | Assessoria estratégica para negócios crescerem",
    template: "%s | Gogoup",
  },
  description:
    "Assessoria para organizar presença digital, atendimento, vendas online e estratégia de crescimento para pequenos negócios.",
  keywords: [
    "Gogoup",
    "assessoria digital",
    "presença online",
    "WhatsApp Business",
    "Google Business Profile",
    "vendas online",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gogoup | Assessoria estratégica para negócios crescerem",
    description:
      "Seu negócio conquista mais clientes e cresce de forma consciente com presença digital, atendimento e vendas organizadas.",
    type: "website",
    locale: "pt_BR",
    url: "https://gogoup.com",
    siteName: "Gogoup",
  },
};

export const viewport: Viewport = {
  themeColor: "#9fb0ff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
