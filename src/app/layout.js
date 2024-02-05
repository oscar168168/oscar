import { Inter, Titillium_Web } from "next/font/google";
import "./globals.css";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });
const titillium = Titillium_Web({ subsets: ["latin"], weight: ["200", "300", "400", "600", "700","900"] });

export const metadata = {
  title: "Portfolio",
  description: "Rat Raksmey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={titillium.className}>{children}</body>
    </html>
  );
}
