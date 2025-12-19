import type { Metadata } from "next";
import { Providers } from "./components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "LicenseFlow - Ship Compliant Open-Source Projects",
  description: "AI-powered license compliance and dependency scanning for developers",
  openGraph: {
    title: "LicenseFlow",
    description: "Ship compliant open-source projects in minutes, not months",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
