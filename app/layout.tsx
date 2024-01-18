import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import ReduxProvider from "@/providers/ReduxProvider";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
import "react-loading-skeleton/dist/skeleton.css";
export const metadata: Metadata = {
  title: "Burger King",
  description: "Taste the best food in the world",
};
import { SkeletonTheme } from "react-loading-skeleton";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* <div className={styles.layout}> */}
          <ReduxProvider>
            <Navbar />
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              {children}
            </SkeletonTheme>
          </ReduxProvider>
          <Footer />
          {/* </div> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
