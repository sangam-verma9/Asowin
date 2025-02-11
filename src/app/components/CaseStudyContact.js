'use client';
import { useState } from "react";
import Image from "next/image";

const BlogContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    appUrl: "",
    message: "",
    form: "blog form",
  });

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

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

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
        throw new Error("Failed to submit the form");
      }
  
      setStatus({
        type: "success",
        message: "Thank you! We'll be in touch soon.",
      });
  
      setFormData({ name: "", email: "", companyName: "", appUrl: "", message: "" }); // Clear form
    } catch (error) {
      setStatus({
        type: "error",
        message: "Submission failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="w-full min-h-[600px] bg-[#FFF8E7] relative flex justify-end"
      style={{
        backgroundImage: `url(/bc.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Form Container */}
      <div className="w-full md:w-1/2 p-8 md:p-16">
        <h1 className="text-4xl md:text-5xl lg:text-[77px] font-serif mb-12">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 bg-white rounded-sm shadow-sm focus:outline-none"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 bg-white rounded-sm shadow-sm focus:outline-none"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <textarea
              placeholder="Message"
              className="w-full p-4 bg-white rounded-sm shadow-sm focus:outline-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white rounded-[18px] w-[131px] h-[37px] px-8 py-1 text-sm uppercase tracking-wider"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Status Messages */}
        {status.message && (
          <div
            className={`text-sm mt-4 ${
              status.type === "success"
                ? "text-green-700 bg-green-100 p-2 rounded"
                : "text-red-700 bg-red-100 p-2 rounded"
            }`}
          >
            {status.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogContact;