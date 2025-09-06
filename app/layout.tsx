import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "sonner";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['200','300','400','500','600','700','800','900']
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neuronote",
  description: "Neuronote combines the power of natural language processing with a clean, user-friendly interface to make summarizing documents effortless and effective.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='relative flex min-h-screen flex-col'>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        </div>
        <Toaster   />
      </body>
     
    </html>
    </ClerkProvider>
  );
}
