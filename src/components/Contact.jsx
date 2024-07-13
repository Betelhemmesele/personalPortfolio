
import React from "react";

export default function Contact() {

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("form",formData);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("/thank-you/"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="fixed bg-gray-900 bg-cover h-screen px-80 bg-grey-900">
      <div className="items-center px-40 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <input type="hidden" name="contact" value="contact" />
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed text-white mb-5">
          I'm always excited to connect with new people and explore potential opportunities.
          Whether you'd like to discuss a project, ask a question, or just say hello, 
          feel free to reach out using the methods below.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-300 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none
               text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
               //onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-300 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none
               text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
               //onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-300 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none
               text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              //onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-100 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
