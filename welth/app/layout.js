import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One-stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} `}>
          {/* Header */}
          <Header />

          <main className="min-h-screen">{children}</main>

          {/* Footer */}
          <footer className="bg-blue-500 py-4 ">
            <div className="container mx-auto px-4 text-clip text-gray-600 text-center">
              <p>Made with ❤️ by RoadSideCoder</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
