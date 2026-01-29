import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Axiom X",
  description: "Terms and Conditions for using Axiom X services.",
};

export default function TermsPage() {
  return (
    <section className="py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="container-axiom">
        <div className="max-w-[900px] mx-auto px-4 md:px-0">
          {/* Page Title */}
          <h1
            className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-black mb-4"
            style={{ fontFamily: "'Alexandria', sans-serif" }}
          >
            Terms & Conditions
          </h1>
          <p className="text-[14px] md:text-[15px] text-gray-500 mb-8 md:mb-12">
            Last Updated: January 2025
          </p>

          {/* Introduction */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              1. Agreement to Terms
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mb-4">
              Welcome to Axiom X. By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed">
              These Terms and Conditions govern your use of our logistics, warehousing, call center support, back-office services, and all related offerings provided by Axiom X Group.
            </p>
          </div>

          {/* Description of Services */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              2. Description of Services
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mb-4">
              Axiom X provides comprehensive operational solutions including but not limited to:
            </p>
            <ul className="list-disc list-inside text-[14px] md:text-[16px] text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>Last Mile Delivery Services</li>
              <li>Warehousing and Inventory Management</li>
              <li>Call Center Support</li>
              <li>Back Office Services</li>
              <li>Value-Added Services (VAS)</li>
              <li>Upselling Revenue Programs</li>
            </ul>
          </div>

          {/* User Responsibilities */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              3. User Responsibilities
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-[14px] md:text-[16px] text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Comply with all applicable local, national, and international laws</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              4. Intellectual Property
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed">
              All content, trademarks, logos, and intellectual property displayed on this website are the property of Axiom X Group or its licensors. You may not use, reproduce, or distribute any content from this website without our prior written consent.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              5. Limitation of Liability
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, Axiom X shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
            </p>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed">
              Our total liability for any claim arising from our services shall not exceed the amount you paid to us for the specific service giving rise to the claim.
            </p>
          </div>

          {/* Indemnification */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              6. Indemnification
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless Axiom X, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              7. Governing Law
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              8. Changes to Terms
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this website. Your continued use of our services after any changes constitutes your acceptance of the new terms.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              9. Contact Information
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed space-y-2">
              <p><strong>Email:</strong> info@axiomxgroup.com</p>
              <p><strong>Phone:</strong> +971 4 3101 010</p>
              <p><strong>Regions:</strong> UAE | KSA | Oman | Kuwait</p>
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-[#53ac70] font-medium hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
