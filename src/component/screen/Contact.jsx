import React, { useState } from "react";
import { CheckCircle } from "lucide-react"; // For a nice success icon

function Contact({ theme = 'dark' }) {
  // State for form submission status
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errors, setErrors] = useState({});

  // Custom handleSubmit function using fetch
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meojjgbb", { // Your Formspree form endpoint
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSucceeded(true);
      } else {
        const responseData = await response.json();
        if (responseData.hasOwnProperty('errors')) {
          setErrors(responseData.errors);
        } else {
          setErrors({ form: ["An unknown error occurred."] });
        }
      }
    } catch (error) {
      setErrors({ form: ["Failed to send message. Please try again later."] });
    } finally {
      setSubmitting(false);
    }
  };


  // Theme-based color variables
  const mainBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';
  const textColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const formBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const inputBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const inputBorder = theme === 'dark' ? 'border-gray-700 focus:border-teal-500' : 'border-gray-300 focus:border-teal-500';
  const buttonClasses = "w-full px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed";

  if (succeeded) {
    return (
      <div className={`flex flex-col items-center justify-center py-40 ${mainBg}`}>
        <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
        <h3 className={`text-2xl font-bold ${titleColor}`}>Thanks for your message!</h3>
        <p className={textColor}>I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className={`py-20 px-4 sm:px-6 lg:px-8 ${mainBg}`}>
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-extrabold ${titleColor}`}>
            Contact Me
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${textColor}`}>
            Feel free to reach out for any questions or opportunities!
          </p>
        </div>

        {/* Contact Form */}
        <div className={`p-8 rounded-2xl shadow-lg ${formBg}`}>
          <h3 className={`text-2xl font-bold mb-6 ${titleColor}`}>Email Me 🚀</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="username" className={`block text-sm font-medium mb-2 ${textColor}`}>Your Name</label>
              <input
                id="username"
                name="name" // Changed from "username" to "name" for Formspree
                type="text"
                required
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 focus:ring-2 focus:ring-teal-500/50 outline-none ${inputBg} ${inputBorder} ${textColor}`}
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="userEmail" className={`block text-sm font-medium mb-2 ${textColor}`}>Your Email</label>
              <input
                id="userEmail"
                name="email" // Changed from "userEmail" to "email" for Formspree
                type="email"
                required
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 focus:ring-2 focus:ring-teal-500/50 outline-none ${inputBg} ${inputBorder} ${textColor}`}
                placeholder="you@example.com"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label htmlFor="Subject" className={`block text-sm font-medium mb-2 ${textColor}`}>Subject</label>
              <input
                id="Subject"
                name="subject" // Changed from "Subject" to "subject"
                type="text"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 focus:ring-2 focus:ring-teal-500/50 outline-none ${inputBg} ${inputBorder} ${textColor}`}
                placeholder="Let's connect!"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${textColor}`}>Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-300 focus:ring-2 focus:ring-teal-500/50 outline-none ${inputBg} ${inputBorder} ${textColor}`}
                placeholder="Your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={submitting} className={buttonClasses}>
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
