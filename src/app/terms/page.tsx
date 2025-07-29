import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Bra Size Calculator",
  description: "Terms and conditions for using the Bra Size Calculator website",
  keywords:
    "terms and conditions, legal agreement, user terms, bra size calculator",
  openGraph: {
    title: "Terms and Conditions | Bra Size Calculator",
    description:
      "Terms and conditions for using the Bra Size Calculator website",
  },
};

const Terms = () => {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 p-4 rounded-md">
          Terms and Conditions
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-medium mb-4">Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using the Bra Size Calculator website (the
            &quot;Service&quot;), you agree to be legally bound by these Terms
            and Conditions (&quot;Terms&quot;). If you do not accept any part of
            these Terms, please stop using the Service immediately. These Terms
            govern your use of the tool and any related features, content, or
            updates we may offer.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">
            Description of Service
          </h2>
          <p className="mb-4">
            The Bra Size Calculator is an online tool created to help women
            estimate their bra size based on basic measurements. It is designed
            to be quick, simple, and educational. The tool is provided for
            informational purposes only and does not replace professional
            fittings or medical advice.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">Use of Service</h2>
          <p className="mb-4">
            You agree to use the tool responsibly and only for your own
            personal, non-commercial purposes. You must not reproduce, modify,
            sell, or distribute any part of the Service or its content without
            our prior written permission. Any misuse or unauthorized use of the
            website or tool may result in legal action.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">No Data Collection</h2>
          <p className="mb-4">
            We prioritize your privacy. Our tool does not collect, store, or
            transmit any information you input. All data stays within your
            browser session and is never saved on our servers. You can use the
            calculator confidently without worrying about your privacy being
            compromised.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">
            Accuracy and Limitations
          </h2>
          <p className="mb-4">
            While the calculator is designed to provide helpful estimates, it is
            not guaranteed to be 100% accurate. Every body is unique, and bra
            sizing can vary across brands and styles. The tool should be used as
            a general guide — for precise fitting, we recommend consulting a
            professional or trying on different sizes.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">
            Intellectual Property
          </h2>
          <p className="mb-4">
            All text, graphics, code, and design on this site are the
            intellectual property of our team and protected by copyright and
            other applicable laws. Unauthorized use or reproduction is strictly
            prohibited.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">Changes to Terms</h2>
          <p className="mb-4">
            We may revise these Terms from time to time to reflect changes in
            our services, the law, or for other operational reasons. When we do,
            we will update the &quot;Last Updated&quot; date at the bottom of
            this page. By continuing to use the Service, you accept any changes
            made.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">
            Limitation of Liability
          </h2>
          <p className="mb-4">
            We are not liable for any direct, indirect, incidental, or
            consequential issues that arise from using our tool. The calculator
            is provided &quot;as is,&quot; and we do not guarantee specific
            results. Use of the tool is at your own discretion and risk.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">Governing Law</h2>
          <p className="mb-4">
            These Terms are governed by and interpreted in accordance with the
            laws applicable in your local jurisdiction. Any disputes will be
            resolved under those laws.
          </p>

          <h2 className="text-2xl font-medium mb-4 mt-8">Contact</h2>
          <p className="mb-4">
            If you have any questions, feedback, or concerns about these Terms,
            please reach out via our Contact page. We&apos;re here to help.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Last Updated: July 29, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
