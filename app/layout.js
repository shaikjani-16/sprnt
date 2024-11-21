import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";
export const metadata = {
  title: "Sprnt",
  description: "Project Management App",
};
import { GridBackgroundDemo } from "@/components/ui/gridBackground";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${inter.className} grid-bg`}>
          {" "}
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />
            <footer className=" container mx-auto px-4 text-center text-white bg-[#041F41] py-12">
              <div>&copy; 2023 Sprnt. All rights reserved.</div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
