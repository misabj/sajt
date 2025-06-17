import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/page";
import Header from "./components/Header/page";
import CountdownWrapper from "./components/CountdownWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Хришћанска баптистичка црква",
  description: "Хришћанска баптистичка црква у Србији",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <CountdownWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
