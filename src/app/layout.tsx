import type { Metadata } from "next";
import { Audiowide } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroll from "@/components/smooth-scroll";

const audiowide = Audiowide({
  variable: "--font-audiowide",
  weight: "400",
  subsets: ["latin"],
}); 

export const metadata: Metadata = {
  title: "NIRVAN '26",
  description: "Where Ideas Become Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={audiowide.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
