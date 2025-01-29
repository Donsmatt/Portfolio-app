import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="w-full bg-gray-100">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-16">
        <h2 className="text-center text-purple-800 uppercase text-2xl font-bold">
          Contact Me
        </h2>
        <form action="https://formspree.io/f/xqaekgvl" method="POST" className="space-y-4">
          <div className="grid gap-4 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-bold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-800 transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="...@example.com"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-800 transition duration-300"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your message"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-800 transition duration-300"
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="bg-purple-800 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                Submit Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
