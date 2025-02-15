


import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata = {
  title: "ASOWin | App Store Optimization for Apps - Leading Global Company",
  description:
    "Discover how ASOWin helps you optimize your app store presence and increase visibility. Learn more about our services and case studies.",
  keywords:
    "SEO Agency, ASO, ASOWin, App Store Optimization, Mobile Growth, App Marketing",
  authors: [{ name: "ASOWin", url: "https://www.asowin.com" }],
  robots: "index, follow",
  openGraph: {
    title: "ASOWin | App Store Optimization for Apps - Leading Global Company",
    description:
      "Discover how ASOWin helps you optimize your app store presence and increase visibility.",
    url: "https://www.asowin.com",
    siteName: "ASOWin",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ASOWin Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASOWin | App Store Optimization for Apps - Leading Global Company",
    description:
      "Discover how ASOWin helps you optimize your app store presence and increase visibility.",
    images: ["/og-image.jpg"],
    site: "@asowin",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
        <GoogleAnalytics />

        {/* Intercom Live Chat */}
        {/* <IntercomProvider /> */}

        {children}
      </body>
    </html>
  );
}

