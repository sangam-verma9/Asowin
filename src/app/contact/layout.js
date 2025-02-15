export const metadata = {
    title: "Contact - App Store Optimization - ASOWin",
    description:
      "Get in touch with ASOWin! Reach out to our team for expert ASO solutions and personalized strategies to boost your app's performance. Let’s connect and grow together!",
    keywords:
      "ASO, App Store Optimization, App Reputation, Creative A/B Testing, Design, Keyword Install, ASO Solution, Automated ASO, User Acquisition, Search Ad ASO, Competitor Analysis, Keyword Research",
    openGraph: {
      title: "Contact - App Store Optimization - ASOWin",
      description:
        "Get in touch with ASOWin! Reach out to our team for expert ASO solutions and personalized strategies to boost your app's performance. Let’s connect and grow together!",
      url: "https://www.asowin.com/contact",
      siteName: "ASOWin",
      images: [
        {
          url: "/og-contact.jpg",
          width: 1200,
          height: 630,
          alt: "Contact ASOWin",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact - App Store Optimization - ASOWin",
      description:
        "Get in touch with ASOWin! Reach out to our team for expert ASO solutions and personalized strategies to boost your app's performance. Let’s connect and grow together!",
      images: ["/og-contact.jpg"],
      site: "@asowin",
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
  
  export default function ContactLayout({ children }) {
    return <>{children}</>;
  }
  