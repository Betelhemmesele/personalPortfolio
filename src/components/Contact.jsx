import React from "react";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("form", formData);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("/thank-you/"))
      .catch((error) => alert(error));
  }

  return (
    <section
      id="contact"
      className="bg-gray-900 bg-cover min-h-screen px-4 py-10 sm:px-10 md:px-20 lg:px-40 xl:px-80"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center mx-auto">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-5 bg-white rounded shadow-lg"
        >
          <input type="hidden" name="contact" value="contact" />
          <h2 className="text-gray-900 text-2xl sm:text-4xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed text-gray-600 mb-5">
            I'm always excited to connect with new people and explore potential
            opportunities. Whether you'd like to discuss a project, ask a
            question, or just say hello, feel free to reach out using the form
            below.
          </p>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-900 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-900 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
