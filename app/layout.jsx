import { Figtree, Macondo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/UI/Header";
import { ClerkProvider } from "@clerk/nextjs";

const figTree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const macondo = Macondo({
  weight: ["400"],
  // variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata = {
  title: "fs04-v02",
  description: "Nettside for å vise frem studenter hvordan å kode i Next.js",
  // author: "Joakim Villo",
  authors: [{ name: "Joakim Villo" }, { name: "Ola Bolla Doa" }],
  openGraph: {
    title: "fs04-v02",
    description: "Nettside for å vise frem studenter hvordan å kode i Next.js",
    url: "https://fs04-v2.vercel.app",
    type: "website",
    images: [
      {
        url: "/crystals.jpg",
        width: 1200,
        height: 630,
        alt: "crystals for some reason",
        type: "image/jpg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${macondo.className} antialiased bg-black`}>
        <Header />
        <main className="grid gap-24 mb-24">{children}</main>
      </body>
    </html>
    </ClerkProvider>
  );
}
