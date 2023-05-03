import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reach",
  description: "Reach social network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className}`}>
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
