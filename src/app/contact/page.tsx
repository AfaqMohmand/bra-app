"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    terms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      // In a real implementation, you would use a server API endpoint
      // Here we're simulating a successful submission
      console.log(
        `Sending email to afaq3167710@gmail.com with data:`,
        formData
      );

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        terms: false,
      });

      setSubmitStatus({
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus({
        success: false,
        message: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between max-w-6xl mx-auto">
          {/* Left side - Contact heading and text */}
          <div className="md:w-1/3 mb-8 md:mb-0 pr-0 md:pr-8">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact</h1>
            <p className="text-gray-700 mb-4">
              Contact us to report a problem, clarify any doubts about our bra
              size calculator, or just find out more.
            </p>
          </div>

          {/* Right side - Contact form */}
          <div className="md:w-2/3">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject*
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Choose a subject...
                      </option>
                      <option value="question">Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="support">Support</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Write a message"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-start items-center">
                  <div>
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      className="h-4 w-4 text-yellow-500 border-gray-300 rounded mt-2"
                      required
                    />
                  </div>
                  <div className="text-right">
                    <label
                      htmlFor="terms"
                      className="block text-sm text-gray-700 ml-2"
                    >
                      I accept:{" "}
                      <a
                        href="/terms"
                        className="text-yellow-500 hover:underline"
                      >
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy"
                        className="text-yellow-500 hover:underline"
                      >
                        Legal & Privacy
                      </a>
                    </label>
                  </div>
                </div>

                {submitStatus.message && (
                  <div
                    className={`p-3 rounded ${
                      submitStatus.success
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="text-right">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-2 bg-yellow-500 text-white font-medium rounded-md transition-colors duration-300 ${
                      isSubmitting
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:bg-red-600"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
