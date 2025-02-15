export const metadata = {
    title: "Services - App Store Optimization - ASOWin",
    description:
      "Discover ASOWin's expert app optimization services. We offer impeccable services to boost your app’s visibility and growth.",
    keywords:
      "ASO, App Store Optimization, App Reputation, Creative A/B Testing, Design, Keyword Install, ASO Solution, Automated ASO, User Acquisition, Search Ad ASO, Competitor Analysis, Keyword Research",
    authors: [{ name: "ASOWin", url: "https://www.asowin.com" }],
    robots: "index, follow",
    openGraph: {
      title: "Services - App Store Optimization - ASOWin",
      description:
        "Discover ASOWin's expert app optimization services. We offer impeccable services to boost your app’s visibility and growth.",
      url: "https://www.asowin.com/services",
      siteName: "ASOWin",
      images: [
        {
          url: "/og-services.jpg",
          width: 1200,
          height: 630,
          alt: "ASOWin Services",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Services - App Store Optimization - ASOWin",
      description:
        "Discover ASOWin's expert app optimization services. We offer impeccable services to boost your app’s visibility and growth.",
      images: ["/og-services.jpg"],
      site: "@asowin",
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
  
  export default function ServicesLayout({ children }) {
    return <>{children}</>;
  }
  