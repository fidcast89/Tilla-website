import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tilla App",
  description:
    "AI-powered POS and business app for modern retailers. New light-mode marketing site prototype.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased text-neutral-900`}
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        {children}
      </body>
    </html>
  );
}
