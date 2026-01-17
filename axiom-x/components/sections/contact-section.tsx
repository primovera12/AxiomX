"use client";

import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    {/* Section - Responsive padding */}
    <section id="contact" className="pt-[30px] pb-[50px] md:pt-[40px] md:pb-[65px] lg:pt-[50px] lg:pb-[80px]">
      <div className="container-axiom">
        <div className="max-w-full px-4 md:max-w-[800px] md:px-0 mx-auto">
          {/* Section Title - Responsive margin */}
          <div className="mb-[30px] md:mb-[40px] lg:mb-[50px]">
            {/* h2 - Responsive font size */}
            <h2
              className="text-[28px] md:text-[40px] lg:text-[55px] text-black font-bold leading-[110%] mb-[10px]"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              Contact Us
            </h2>

            {/* h3 - Responsive font size */}
            <h3
              className="text-[18px] md:text-[22px] lg:text-[28px] text-black font-semibold leading-[110%] mb-[10px]"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              Let&apos;s talk scale.
            </h3>

            {/* p - Responsive font size */}
            <p
              className="text-[14px] md:text-[18px] lg:text-[24px] font-light"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              Whether you&apos;re looking to optimize delivery, centralize
              operations, or unlock new revenue — Axiom x is your growth
              partner.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            {/* Name Field - Responsive spacing */}
            <div className="mb-[15px] md:mb-[20px] lg:mb-[25px]">
              {/* label - Responsive text and padding */}
              <label
                className="block w-full mb-[10px] md:mb-[12px] lg:mb-[15px] text-[16px] md:text-[18px] lg:text-[22px] font-semibold pl-4 md:pl-6 lg:pl-[40px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Your Name
              </label>
              {/* input - Responsive height and padding */}
              <input
                type="text"
                placeholder="Your Full Name Here|"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full h-[50px] md:h-[70px] lg:h-[90px] py-3 md:py-[12px] lg:py-[15px] px-4 md:px-6 lg:px-[40px] text-[14px] md:text-[16px] lg:text-[18px] text-white rounded-[80px] bg-[#519b66] border-none outline-none placeholder:text-white placeholder:opacity-50"
              />
            </div>

            {/* Email Field - Responsive */}
            <div className="mb-[15px] md:mb-[20px] lg:mb-[25px]">
              <label
                className="block w-full mb-[10px] md:mb-[12px] lg:mb-[15px] text-[16px] md:text-[18px] lg:text-[22px] font-semibold pl-4 md:pl-6 lg:pl-[40px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Your Mail
              </label>
              <input
                type="email"
                placeholder="Your Mail Here|"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full h-[50px] md:h-[70px] lg:h-[90px] py-3 md:py-[12px] lg:py-[15px] px-4 md:px-6 lg:px-[40px] text-[14px] md:text-[16px] lg:text-[18px] text-white rounded-[80px] bg-[#519b66] border-none outline-none placeholder:text-white placeholder:opacity-50"
              />
            </div>

            {/* Message Field - Responsive */}
            <div className="mb-[15px] md:mb-[20px] lg:mb-[25px]">
              <label
                className="block w-full mb-[10px] md:mb-[12px] lg:mb-[15px] text-[16px] md:text-[18px] lg:text-[22px] font-semibold pl-4 md:pl-6 lg:pl-[40px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Write your question or Message
              </label>
              {/* textarea - Responsive height and padding */}
              <textarea
                placeholder="What's on your mind ?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full h-[150px] md:h-[200px] lg:h-[250px] py-4 md:py-5 lg:py-[20px] px-4 md:px-6 lg:px-[40px] text-[14px] md:text-[16px] lg:text-[18px] text-white rounded-[24px] bg-[#519b66] border-none outline-none resize-none placeholder:text-white placeholder:opacity-50"
              />
            </div>

            {/* Submit Button - Responsive sizing */}
            <div className="mb-[15px] md:mb-[20px] lg:mb-[25px]">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-[#19342c] text-white text-[18px] md:text-[26px] lg:text-[36px] font-semibold h-[50px] md:h-[70px] lg:h-[94px] w-full md:w-[380px] lg:w-[440px] py-2 md:py-[8px] lg:py-[10px] px-6 md:px-[20px] lg:px-[30px] rounded-[100px] gap-[10px] transition-all duration-300 hover:bg-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info - Responsive gap and margin */}
        <div className="flex items-center justify-center gap-3 md:gap-5 lg:gap-[30px] mt-[40px] md:mt-[60px] lg:mt-[80px] flex-wrap px-4 md:px-0">
          {/* contact-item - Responsive text and padding */}
          <p
            className="m-0 text-[14px] md:text-[20px] lg:text-[28px] bg-[#e8f8f3] py-2 px-3 md:py-[8px] md:px-[16px] lg:py-[10px] lg:px-[24px] rounded-[12px] font-medium text-[#529b66]"
            style={{ fontFamily: "'Alexandria', sans-serif" }}
          >
            UAE | KSA | Oman | Kuwait
          </p>

          <a
            href="mailto:info@axiomxgroup.com"
            className="inline-block m-0 text-[14px] md:text-[20px] lg:text-[28px] bg-[#e8f8f3] py-2 px-3 md:py-[8px] md:px-[16px] lg:py-[10px] lg:px-[24px] rounded-[12px] font-medium text-black no-underline transition-all duration-300 hover:text-[#373737]"
            style={{ fontFamily: "'Alexandria', sans-serif" }}
          >
            info@axiomxgroup.com
          </a>

          <a
            href="tel:+97141234567"
            className="inline-block m-0 text-[14px] md:text-[20px] lg:text-[28px] bg-[#e8f8f3] py-2 px-3 md:py-[8px] md:px-[16px] lg:py-[10px] lg:px-[24px] rounded-[12px] font-medium text-black no-underline transition-all duration-300 hover:text-[#373737]"
            style={{ fontFamily: "'Alexandria', sans-serif" }}
          >
            +971 4 123 4567
          </a>
        </div>
      </div>
    </section>
  );
}
