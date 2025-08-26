import "./globals.css";
import Script from "next/script";
import ServiceWorker from "./components/ServiceWorker";
import PerformanceMonitor from "./components/PerformanceMonitor";

export const metadata = {
  metadataBase: new URL('https://www.asowin.com'),
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
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>

        {/* Resource hints for performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical images */}
        <link rel="preload" as="image" href="/pattern.png" />
        <link rel="preload" as="image" href="/casestudy2.png" />
        <link rel="preload" as="image" href="/appversal.png" />
        <link rel="preload" as="image" href="/phone.png" />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-58866TH2');`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-58866TH2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
        <ServiceWorker />
        <PerformanceMonitor />
      </body>
    </html>
  );
}