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
    /* Section - CSS: padding-top: 50px, padding-bottom: 80px */
    <section id="contact" className="pt-[50px] pb-[80px]">
      <div className="container-axiom">
        <div className="max-w-[800px] mx-auto">
          {/* Section Title - CSS: margin-bottom: 50px */}
          <div className="mb-[50px]">
            {/* h2 - CSS: font-size: 55px, color: #000, font-weight: 700,
                line-height: 110%, margin-bottom: 10px, font-family: Alexandria */}
            <h2
              className="text-[55px] text-black font-bold leading-[110%] mb-[10px]"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              Contact Us
            </h2>

            {/* h3 - CSS: font-size: 28px, color: #000, font-weight: 600,
                line-height: 110%, margin-bottom: 10px, font-family: Alexandria */}
            <h3
              className="text-[28px] text-black font-semibold leading-[110%] mb-[10px]"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              Let&apos;s talk scale.
            </h3>

            {/* p - CSS: font-size: 24px, font-weight: 300, font-family: Alexandria */}
            <p
              className="text-[24px] font-light"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              Whether you&apos;re looking to optimize delivery, centralize
              operations, or unlock new revenue — Axiom x is your growth
              partner.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            {/* Name Field - CSS: single-item margin-bottom: 25px */}
            <div className="mb-[25px]">
              {/* label - CSS: display: block, width: 100%, margin-bottom: 15px,
                  font-size: 22px, font-weight: 600, font-family: Inter, padding-left: 40px */}
              <label
                className="block w-full mb-[15px] text-[22px] font-semibold pl-[40px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Your Name
              </label>
              {/* input - CSS: width: 100%, height: 90px, padding: 15px 40px, font-size: 18px,
                  color: #fff, border-radius: 80px, background-color: #519b66 */}
              <input
                type="text"
                placeholder="Your Full Name Here|"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full h-[90px] py-[15px] px-[40px] text-[18px] text-white rounded-[80px] bg-[#519b66] border-none outline-none placeholder:text-white placeholder:opacity-50"
              />
            </div>

            {/* Email Field */}
            <div className="mb-[25px]">
              <label
                className="block w-full mb-[15px] text-[22px] font-semibold pl-[40px]"
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
                className="w-full h-[90px] py-[15px] px-[40px] text-[18px] text-white rounded-[80px] bg-[#519b66] border-none outline-none placeholder:text-white placeholder:opacity-50"
              />
            </div>

            {/* Message Field */}
            <div className="mb-[25px]">
              <label
                className="block w-full mb-[15px] text-[22px] font-semibold pl-[40px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Write your question or Message
              </label>
              {/* textarea - CSS: width: 100%, height: 250px, padding: 20px 40px, font-size: 18px,
                  color: #fff, border-radius: 24px, background-color: #519b66 */}
              <textarea
                placeholder="What's on your mind ?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full h-[250px] py-[20px] px-[40px] text-[18px] text-white rounded-[24px] bg-[#519b66] border-none outline-none resize-none placeholder:text-white placeholder:opacity-50"
              />
            </div>

            {/* Submit Button - CSS: background: #19342c, font-size: 36px, font-weight: 600,
                color: #fff, height: 94px, width: 440px, padding: 10px 30px, border-radius: 100px,
                hover: background #000 */}
            <div className="mb-[25px]">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-[#19342c] text-white text-[36px] font-semibold h-[94px] w-[440px] py-[10px] px-[30px] rounded-[100px] gap-[10px] transition-all duration-300 hover:bg-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info - CSS: display: flex, align-items: center, gap: 30px,
            margin-top: 80px, justify-content: center */}
        <div className="flex items-center justify-center gap-[30px] mt-[80px] flex-wrap">
          {/* contact-item p - CSS: font-size: 28px, background: #e8f8f3, padding: 10px 24px,
              border-radius: 12px, font-weight: 500, font-family: Alexandria, color: #529b66 */}
          <p
            className="m-0 text-[28px] bg-[#e8f8f3] py-[10px] px-[24px] rounded-[12px] font-medium text-[#529b66]"
            style={{ fontFamily: "'Alexandria', sans-serif" }}
          >
            UAE | KSA | Oman | Kuwait
          </p>

          {/* contact-item a - CSS: color: #000, hover: color #373737 */}
          <a
            href="mailto:info@axiomxgroup.com"
            className="inline-block m-0 text-[28px] bg-[#e8f8f3] py-[10px] px-[24px] rounded-[12px] font-medium text-black no-underline transition-all duration-300 hover:text-[#373737]"
            style={{ fontFamily: "'Alexandria', sans-serif" }}
          >
            info@axiomxgroup.com
          </a>

          <a
            href="tel:+97141234567"
            className="inline-block m-0 text-[28px] bg-[#e8f8f3] py-[10px] px-[24px] rounded-[12px] font-medium text-black no-underline transition-all duration-300 hover:text-[#373737]"
            style={{ fontFamily: "'Alexandria', sans-serif" }}
          >
            +971 4 123 4567
          </a>
        </div>
      </div>
    </section>
  );
}
