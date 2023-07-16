import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { dmSans } from "@/utils/Fonts";

export const metadata = {
  title: "Sujal Samai",
  description: "A Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} flex flex-col justify-between min-h-screen w-10/12 lg:w-9/12 mx-auto bg-gradient-to-b from-gray-900 to to-black text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
