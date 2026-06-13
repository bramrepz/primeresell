import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prime Resell — Exclusieve Luxe. Direct Leverbaar.",
  description:
    "Prime Resell biedt exclusieve designer petten en high-end horloges. Op voorraad in Nederland, direct leverbaar met snelle en veilige verzending.",
  keywords: [
    "luxe horloges",
    "designer petten",
    "reseller",
    "Nederland",
    "Prime Resell",
  ],
};

const themeScript = `
(function () {
  try {
    var theme = localStorage.getItem("primeresell-theme");
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "dark" : "light"
    );
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
