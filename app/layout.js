import "@/app/_styles/globals.css";
import { Poppins } from "next/font/google";
import { NavigationProvider } from "./_contexts/NavigationContext";

export const metadata = {
  title: "DEMO: Bankist",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} overflow-x-hidden`}>
      <body className={`mx-auto bg-stone-100 antialiased`}>
        <NavigationProvider>{children}</NavigationProvider>
      </body>
    </html>
  );
}
