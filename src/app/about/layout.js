export const metadata = {
    title: "About - App Store Optimization - ASOWin",
    description:
      "Learn about ASOWin, a results-driven app agency specializing in ASO, AI-powered strategies, and creative solutions to help apps grow, boost visibility, and achieve success in competitive app markets.",
    keywords:
      "ASO, App Store Optimization, App Reputation, Creative A/B Testing, Design, Keyword Install, ASO Solution, Automated ASO, User Acquisition, Search Ad ASO, Competitor Analysis, Keyword Research",
    openGraph: {
      title: "About - App Store Optimization - ASOWin",
      description:
        "Learn about ASOWin, a results-driven app agency specializing in ASO, AI-powered strategies, and creative solutions to help apps grow, boost visibility, and achieve success in competitive app markets.",
      url: "https://www.asowin.com/about",
      siteName: "ASOWin",
      images: [
        {
          url: "/og-about.jpg",
          width: 1200,
          height: 630,
          alt: "About ASOWin",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "About - App Store Optimization - ASOWin",
      description:
        "Learn about ASOWin, a results-driven app agency specializing in ASO, AI-powered strategies, and creative solutions to help apps grow, boost visibility, and achieve success in competitive app markets.",
      images: ["/og-about.jpg"],
      site: "@asowin",
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
  
  export default function AboutLayout({ children }) {
    return <>{children}</>;
  }
  