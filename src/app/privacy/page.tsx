import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or use our
            services. Please read this privacy policy carefully. If you do not
            agree with the terms of this privacy policy, please do not access
            the site.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">
            Collection of Your Information
          </h2>
          <p className="mb-4">
            We may collect information about you in a variety of ways. The
            information we may collect via the Site includes:
          </p>
          <h3 className="text-xl font-medium mb-2 mt-4">Personal Data</h3>
          <p className="mb-4">
            Personally identifiable information, such as your name, shipping
            address, email address, and telephone number, and demographic
            information, such as your age, gender, hometown, and interests, that
            you voluntarily give to us when you register with the Site or when
            you choose to participate in various activities related to the Site.
            You are under no obligation to provide us with personal information
            of any kind, however your refusal to do so may prevent you from
            using certain features of the Site.
          </p>

          <h3 className="text-xl font-medium mb-2 mt-4">Derivative Data</h3>
          <p className="mb-4">
            Information our servers automatically collect when you access the
            Site, such as your IP address, your browser type, your operating
            system, your access times, and the pages you have viewed directly
            before and after accessing the Site.
          </p>

          <h3 className="text-xl font-medium mb-2 mt-4">Financial Data</h3>
          <p className="mb-4">
            Financial information, such as data related to your payment method
            (e.g., valid credit card number, card brand, expiration date) that
            we may collect when you purchase, order, return, exchange, or
            request information about our services from the Site.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">
            Use of Your Information
          </h2>
          <p className="mb-4">
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Site to:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Create and manage your account.</li>
            <li>Process your orders and manage your transactions.</li>
            <li>Email you regarding your account or order.</li>
            <li>
              Fulfill and manage purchases, orders, payments, and other
              transactions related to the Site.
            </li>
            <li>
              Monitor and analyze usage and trends to improve your experience
              with the Site.
            </li>
            <li>Notify you of updates to the Site.</li>
            <li>
              Offer new products, services, and/or recommendations to you.
            </li>
            <li>Perform other business activities as needed.</li>
            <li>
              Prevent fraudulent transactions, monitor against theft, and
              protect against criminal activity.
            </li>
            <li>Process payments and refunds.</li>
            <li>
              Request feedback and contact you about your use of the Site.
            </li>
            <li>Resolve disputes and troubleshoot problems.</li>
            <li>Respond to product and customer service requests.</li>
            <li>Send you a newsletter.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8">
            Disclosure of Your Information
          </h2>
          <p className="mb-4">
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </p>

          <h3 className="text-xl font-medium mb-2 mt-4">
            By Law or to Protect Rights
          </h3>
          <p className="mb-4">
            If we believe the release of information about you is necessary to
            respond to legal process, to investigate or remedy potential
            violations of our policies, or to protect the rights, property, and
            safety of others, we may share your information as permitted or
            required by any applicable law, rule, or regulation.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">
            Security of Your Information
          </h2>
          <p className="mb-4">
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Contact Us</h2>
          <p className="mb-4">
            If you have questions or comments about this Privacy Policy, please
            contact us at:
          </p>
          <p className="mb-4">
            Email: privacy@example.com
            <br />
            Phone: 1-800-123-4567
            <br />
            Address: 123 Privacy Street, Suite 100, City, State 12345
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
