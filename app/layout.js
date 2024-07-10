import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Waifu Popularity Game",
  description: "guess the waifu popularity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-h-[1vh] flex flex-col gap-5">

        <Header/>
        {children}
        </div>
        </body>
    </html>
  );
}
