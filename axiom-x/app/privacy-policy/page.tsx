import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Axiom X",
  description: "Privacy Policy for Axiom X - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-[60px] md:py-[80px] lg:py-[100px]">
      <div className="container-axiom">
        <div className="max-w-[900px] mx-auto px-4 md:px-0">
          {/* Page Title */}
          <h1
            className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-black mb-4"
            style={{ fontFamily: "'Alexandria', sans-serif" }}
          >
            Privacy Policy
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
              1. Introduction
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mb-4">
              Axiom X Group (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed">
              Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              2. Information We Collect
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <h3 className="text-[16px] md:text-[18px] font-semibold text-black mb-2 mt-4">Personal Information</h3>
            <ul className="list-disc list-inside text-[14px] md:text-[16px] text-gray-700 leading-relaxed space-y-2 ml-4 mb-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company name and business details</li>
              <li>Shipping and billing addresses</li>
              <li>Account credentials</li>
            </ul>
            <h3 className="text-[16px] md:text-[18px] font-semibold text-black mb-2 mt-4">Automatically Collected Information</h3>
            <ul className="list-disc list-inside text-[14px] md:text-[16px] text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              3. How We Use Your Information
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-[14px] md:text-[16px] text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>Provide, operate, and maintain our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, updates, and marketing communications</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              4. Information Sharing
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside text-[14px] md:text-[16px] text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>Service providers who assist in our operations</li>
              <li>Business partners for joint offerings</li>
              <li>Legal authorities when required by law</li>
              <li>Affiliated companies within our corporate group</li>
            </ul>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </div>

          {/* Data Security */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              5. Data Security
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Cookies and Tracking */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              6. Cookies and Tracking Technologies
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files stored on your device that help us:
            </p>
            <ul className="list-disc list-inside text-[14px] md:text-[16px] text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve our services</li>
              <li>Provide personalized content</li>
            </ul>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mt-4">
              You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
            </p>
          </div>

          {/* Third-Party Links */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              7. Third-Party Links
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              8. Your Rights
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-[14px] md:text-[16px] text-gray-700 leading-relaxed space-y-2 ml-4">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to opt-out of marketing communications</li>
              <li>The right to data portability</li>
            </ul>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              9. Children&apos;s Privacy
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </div>

          {/* Changes to Privacy Policy */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy periodically.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mb-8 md:mb-10">
            <h2
              className="text-[20px] md:text-[24px] font-semibold text-black mb-4"
              style={{ fontFamily: "'Alexandria', sans-serif" }}
            >
              11. Contact Information
            </h2>
            <p className="text-[14px] md:text-[16px] text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
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
