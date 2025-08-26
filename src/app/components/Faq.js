'use client';

import React, { useState } from 'react';

const Faq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What is App Store Optimization (ASO)?',
      answer: 'App Store Optimization (ASO) is the process of improving an app\'s visibility and discoverability in app stores like Google Play and Apple\'s App Store. It involves optimizing keywords, titles, descriptions, visuals, and user reviews to increase organic downloads and improve app rankings.'
    },
    {
      id: '2',
      question: 'Why is ASO important for my app?',
      answer: 'ASO helps your app stand out in crowded app stores, drives organic downloads, improves visibility, enhances user engagement, and ultimately reduces user acquisition costs by attracting the right audience organically.'
    },
    {
      id: '3',
      question: 'What services does ASOWin offer?',
      answer: 'We offer end-to-end ASO solutions, including: Keyword research and optimization, Metadata optimization, A/B testing for screenshots and icons, Competitor analysis, Review and rating management, Keyword installs and tracking, Custom reporting and insights.'
    },
    {
      id: '4',
      question: 'How does ASOWin handle reputation management for apps?',
      answer: 'We manage app reputation by responding to user reviews, boosting app ratings, and addressing negative feedback effectively. Our incentivized community of over 20 lakh members helps improve app reputation and ratings organically.'
    },
    {
      id: '5',
      question: 'Can you help my app rank for specific keywords?',
      answer: 'Yes, we specialize in keyword research and optimization. By analyzing trends, user intent, and competitors, we can rank your app for targeted keywords, ensuring better discoverability.'
    },
    {
      id: '6',
      question: 'Do you provide services for both Android and iOS apps?',
      answer: 'Absolutely! We offer ASO services for both Google Play Store and Apple App Store, ensuring your app is optimized for each platform\'s unique algorithms and requirements.'
    },
    {
      id: '7',
      question: 'How long does it take to see results from ASO?',
      answer: 'ASO is an ongoing process, and while some improvements may be visible within a few weeks, consistent efforts are required to maintain and improve rankings. Typically, significant results can be seen in 3-6 months.'
    },
    {
      id: '8',
      question: 'Do you work with apps in specific industries?',
      answer: 'We work with apps across a wide range of industries, including e-commerce, finance, gaming, education, and more. No matter your niche, we can tailor our ASO strategies to meet your needs.'
    },
    {
      id: '9',
      question: 'What tools do you use for ASO?',
      answer: 'We leverage industry-leading ASO tools for keyword research, analytics, and performance tracking, along with proprietary methods developed by our expert team.'
    },
    {
      id: '10',
      question: 'How does ASO differ from Paid User Acquisition?',
      answer: 'ASO focuses on organic app growth by optimizing the app\'s presence in app stores, while Paid User Acquisition relies on advertisements to drive downloads. Both strategies can complement each other to maximize your app\'s success.'
    },
    {
      id: '11',
      question: 'Can ASO help improve my app\'s conversion rates?',
      answer: 'Yes, by optimizing your app\'s visuals (icons, screenshots, and videos) and ensuring the metadata is clear and compelling, ASO can significantly improve your app\'s download conversion rates.'
    },
    {
      id: '12',
      question: 'How does ASOWin ensure data-driven results?',
      answer: 'We base all our ASO strategies on thorough research, analytics, and A/B testing. Our customized reports provide insights into your app\'s performance, enabling continuous improvement.'
    },
    {
      id: '13',
      question: 'Does ASOWin offer a free ASO audit?',
      answer: 'Yes, we offer a free ASO audit to identify areas for improvement in your app\'s metadata, visuals, keywords, and overall optimization strategy.'
    },
    {
      id: '14',
      question: 'How can I get started with ASOWin?',
      answer: 'Simply reach out to us through our contact form or email us at [your email address]. Our team will get in touch with you to discuss your app\'s needs and provide a customized ASO strategy.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-6">Frequently Asked Questions</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
        {faqData.map((faq) => (
          <div 
            key={faq.id}
            className="border-b border-gray-200 py-4"
          >
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenItem(openItem === faq.id ? null : faq.id)}
            >
              <div className="flex items-center gap-4">
                <span className="text-[#014458] font-medium">{faq.id}.</span>
                <h3 className="text-gray-800 font-medium text-[20px]">{faq.question}</h3>
              </div>
              <button 
                type="button" 
                className="text-[#014458] text-2xl"
                aria-label={openItem === faq.id ? 'Close answer' : 'Open answer'}
              >
                {openItem === faq.id ? '−' : '+'}
              </button>
            </div>
            <div 
              className={`mt-2 pl-10 transition-all duration-300 overflow-hidden ${
                openItem === faq.id ? 'max-h-48' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;