'use client';

import React, { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Navbar from "./Navbar";

const ContactHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: null,
    message: "",
    form: "New Form",
    app: null,
    company: null
  });

  const isWorkEmail = (email) => {
    const freeEmailDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "aol.com",
      "protonmail.com",
    ];
    const domain = email.split("@")[1];
    return domain && !freeEmailDomains.includes(domain);
  };

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const [additionalFields, setAdditionalFields] = useState({
    phone: "",
    countryCode: "+1",
    website: ""
  });

  const countryCodes = [
    { code: "+1", country: "USA/Canada" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
    { code: "+86", country: "China" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+81", country: "Japan" },
    { code: "+82", country: "South Korea" },
    { code: "+7", country: "Russia" },
    { code: "+353", country: "Ireland" },
    { code: "+39", country: "Italy" },
    { code: "+34", country: "Spain" },
    { code: "+31", country: "Netherlands" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in formData) {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    } else {
      setAdditionalFields(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // Validate email before submitting
    if (!isWorkEmail(formData.email)) {
      setStatus({
        type: "error",
        message: "Please use a valid work email address.",
      });
      setLoading(false);
      return;
    }

    const submitData = {
      name: formData.name,
      email: formData.email,
      mobile: additionalFields.phone ? `${additionalFields.countryCode}${additionalFields.phone}` : null,
      message: formData.message,
      form: "New Form",
      app: additionalFields.website || null,
      company: null
    };

    try {
      const response = await fetch('https://form.appstorys.com/api/add-response/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });

      if (response.status !== 201) {
        throw new Error('Failed to submit form');
      }

      setStatus({
        type: "success",
        message: "Thank you for contacting us! We'll get back to you soon."
      });

      setFormData({
        name: "",
        email: "",
        mobile: null,
        message: "",
        form: "New Form",
        app: null,
        company: null
      });

      setAdditionalFields({
        phone: "",
        countryCode: "+1",
        website: ""
      });

    } catch (error) {
      setStatus({
        type: "error",
        message: "There was an error submitting the form. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="w-full min-h-[90vh] relative"
        id="form-section"
        style={{
          backgroundImage: `url('/contactbg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column */}
            <div className="flex flex-col mt-10">
              <h1 className="text-[52px] leading-tight font-normal text-black mb-4">
                Contact Us
              </h1>

              <p className="text-black text-lg mb-10">
                Contact ASOWin and our team will connect with you instantly
              </p>

              {/* Company Info */}
              <div className="space-y-8">
                {/* Addresses */}
                <div>
                  <p className="text-sm text-black font-medium mb-4">
                    Company Addresses
                  </p>
                  <div className="space-y-4">
                    {/* Delaware Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-base text-black">
                        <span className="font-bold">Delaware:</span> 16192
                        Coastal Hwy, Lewes, DE 19958, USA
                      </p>
                    </div>
                    {/* California Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-base text-black">
                        <span className="font-bold">California:</span> 140 Black
                        Mountain Cir, Fremont, California, USA - 94536
                      </p>
                    </div>
                    {/* Mumbai Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-base text-black">
                        <span className="font-bold">Mumbai:</span> Office #3,
                        Neelkanth, Next to Shreeji Heights, Sector 46A, Navi
                        Mumbai, Maharashtra, India - 400706
                      </p>
                    </div>
                    {/* Noida Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="text-base text-black">
                        <span className="font-bold">Noida:</span> Office #37,
                        Tapasya Corp Heights, Sector 126, Noida, Uttar Pradesh -
                        201301
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email and Phone */}
                <div>
                  <p className="text-sm text-black font-medium mb-1">
                    Contact Us
                  </p>
                  <div className="flex items-center justify-between space-x-8">
                    <a
                      href="mailto:support@asowin.com"
                      className="text-base text-black underline"
                    >
                      support@asowin.com
                    </a>
                    <div className="flex flex-col text-base text-black">
                      {/* <h3>Phone:</h3> */}
                      <p>+1 510-365-7173 (USA)</p>
                      {/* <p>+91 9619963340 (India)</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="mt-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {status.message && (
                  <div className={`p-4 rounded ${status.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {status.message}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    FULL NAME*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-200 rounded focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    EMAIL ADDRESS*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-200 rounded focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    ADDITIONAL MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Please provide any additional details about your request"
                    className="w-full min-h-[150px] px-4 py-3 border border-gray-200 rounded focus:ring-1 focus:ring-gray-300 focus:border-gray-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`px-8 py-3 bg-[#FF8712] text-white font-medium rounded-full hover:bg-[#e85f25] transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'SUBMITTING...' : 'SUBMIT FORM'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHero;