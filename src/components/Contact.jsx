import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-700 text-purple-700 dark:text-purple-300 transition-colors duration-300  pb-10" id="contact">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          We'd love to hear from you! Please fill out the form below.
        </p>

        {/* Responsive iframe container with hidden scrollbar */}
        <div className="h-350  bg-white dark:bg-gray-900 relative overflow-visible rounded-lg shadow-lg pb-[150%] sm:pb-[100%] md:pb-[75%] lg:pb-[65%]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdZM7EHnY3EJM7FDGJCyMcZWcRkRG3uMTMW2du8EtS3FcAjLQ/viewform?embedded=true"
            className="absolute top-0 left-0 w-full border-none bg-white  dark:bg-gray-900 scrollbar-hide p-7 rounded-2xl"
            title="Contact Form"
            style={{ height: "100%", width: "100%" }}
            loading="lazy"
          >
            Loading…
          </iframe>
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Having trouble viewing the form? Try refreshing the page or{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdZM7EHnY3EJM7FDGJCyMcZWcRkRG3uMTMW2du8EtS3FcAjLQ/viewform"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            open it in a new tab
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;
