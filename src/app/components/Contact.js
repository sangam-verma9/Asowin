"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: null,
    message: "",
    form: "New Form",
    app: null,
    company: null,
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // Function to check if the email is a work email
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

    try {
      const response = await fetch("https://form.appstorys.com/api/add-response/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status !== 201) {
        throw new Error("Failed to submit form");
      }

      setStatus({
        type: "success",
        message: "Thank you for contacting us! We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile: null,
        message: "",
        form: "home Form",
        app: null,
        company: null,
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "There was an error submitting the form. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col lg:flex-row w-full bg-[#F5FDFF]">
      {/* Left side with image */}
      <div className="w-full lg:w-[40%] flex items-center justify-center p-8">
        <Image
          src="/contact.png"
          alt="Contact illustration"
          width={500}
          height={400}
          className="w-full max-w-xl object-contain"
        />
      </div>

      {/* Right side with form */}
      <div className="w-full lg:w-[60%] flex items-center justify-center p-8">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl md:text-[60px] font-serif mb-8">Contact Us</h1>

            {status.message && (
              <div
                className={`p-4 mb-6 rounded ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#004851]"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#004851]"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#004851]"
                  required
                />
              </div>

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full lg:w-1/2 h-[37px] text-center font-medium py-1 px-6 text-white bg-[#004851] rounded-[18px] hover:bg-[#003842] transition-colors uppercase text-sm tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
