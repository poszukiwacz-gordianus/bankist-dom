import "@/app/_styles/globals.css";
import { Poppins } from "next/font/google";
import { NavigationProvider } from "./_contexts/NavigationContext";

export const metadata = {
  title: "DEMO: Bankist | When banking meets Minimalist",
  description:
    "Project from The Complete Javascript Course by Jonas Schmedtmann, build with Next.js and Tailwind Css",
  keywords:
    "Banking, Finance, JavaScript, Next.js, Tailwind CSS, Learning Project",
  author: "Gord The Finder, Jonas Schmedtmann",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} overflow-x-hidden`}>
      <body className="overflow-x-hidden bg-stone-100 antialiased">
        <NavigationProvider>{children}</NavigationProvider>
      </body>
    </html>
  );
}
