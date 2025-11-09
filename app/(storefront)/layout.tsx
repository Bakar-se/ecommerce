import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "../globals.css";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import CategoriesNavigation from "@/components/navigation/CategoriesNavigation";

export const metadata: Metadata = {
  title: "Exsurion",
  description: "Exsurion | Medical Instruments",
  icons: {
    icon: "/excurion.svg",
  },
};

export default function StorefrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex min-h-screen flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        <Header />
        <CategoriesNavigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster richColors position="top-center" />
        </ThemeProvider>
      </div>
  );
}
