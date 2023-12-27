import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AuthProvider from "./auth/Provider";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Adore A Pet",
    default: "Adore A Pet",
  },
  description:
    "A place to adopt and give your pets. You can give details of your pet, if anyone wants to get your pet, they will able to contact you. No need to worry about leaving your loved pets on streets.",
  openGraph: {
    title: "Adore A Pet",
    description: "A place to adopt and give your pets.",
    images: "/opengraph-image.png",
  },
  verification: {
    google:
      "google-site-verification=T9lCMdcbypjP2WpQkt3Wsbb5NBL3hpLLzRX_nDGEB8k",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          <div className="flex min-h-screen flex-col items-center mb-28 pt-10 px-10">
            {children}
          </div>
          <Footer />
          <Toaster position="top-center" />
        </AuthProvider>
      </body>
    </html>
  );
}
