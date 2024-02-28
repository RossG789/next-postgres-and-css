import { Inter } from "next/font/google";
import "./globals.css";
import headerStyles from "./header.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Singer Porsche Gallery",
  description: "Tribute site to the Porsche 911's made by Singer Design",
  // openGraph: {
  //   title: "Singer Porsche Gallery",
  //   description: "Tribute site to the Porsche 911's made by Singer Design",
  //   type: "website",
  //   // url: "https://next-comments-postgres.vercel.app/",
  //   // image: "https://next-comments-postgres.vercel.app/og-image.png", // add an appropriate image to your public folder
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
