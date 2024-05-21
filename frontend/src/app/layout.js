import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FullMoon",
  description: "Coffee community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      <body className={inter.className}>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
