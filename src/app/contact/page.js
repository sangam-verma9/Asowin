import React from "react";
import Head from "next/head";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import Faq from "../components/Faq";

const Contact = () => {
    return (
        <div className="min-h-screen">
            {/* Next.js Head for SEO Metadata */}
            <Head>
                <title>Contact - App Store Optimization - ASOWin</title>
                <meta
                    name="description"
                    content="Get in touch with ASOWin! Reach out to our team for expert ASO solutions, and personalized strategies to boost your app's performance. Let’s connect and grow together!"
                />
                <meta
                    name="keywords"
                    content="aso, app store optimisation, app reputation, creative a/b testing, design, keyword install, aso solution, automated aso, user acquisition, search ad aso, competitor analysis, keyword research."
                />
            </Head>

            {/* Page Components */}
            <ContactHero />
            <Faq />
            <GetStarted />
            <Footer />


        </div>
    );
};

export default Contact;
