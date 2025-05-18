"use client";

import contactPage from "@/data/pages/contact.json";
import { useState } from "react";

const ContactForm = () => {
  const { contactForm } = contactPage.frontmatter;
  const { email, mailSubject, successMessage, errorMessage } = contactForm;

  // Handler Form Submit
  const [submitted, setSubmitted] = useState("");
  const [loading, setLoading] = useState(false);
  const formsubmitURL = `https://formsubmit.co/ajax/${email}`;

  const formHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(formsubmitURL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        _subject: mailSubject,
        name: full_name.value,
        email: email.value,
        message: message.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setSubmitted("success");
        e.target.reset();
      })
      .catch((error) => {
        setLoading(false);
        setSubmitted("error");
      });
  };

  return (
    <form
      method="POST"
      onSubmit={formHandler}
      className="lg:pl-32 flex flex-col gap-y-10"
    >
      <input
        className="hidden"
        type="hidden"
        id="_subject"
        name="_subject"
        value={mailSubject}
      />
      <div>
        <label htmlFor="name" className="flex items-center gap-x-2">
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
          <span>Full Name</span>
        </label>
        <input
          type="text"
          id="full_name"
          name="full_name"
          className="w-full mt-4 bg-transparent border-b-2 border-[#c7c6bb] pb-4 focus:outline-none focus:border-primary autofill-light placeholder:text-[#817E61]"
          placeholder="John Doe"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="flex items-center gap-x-2">
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
          <span>Email Address</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full mt-4 bg-transparent border-b-2 border-[#c7c6bb] pb-4 focus:outline-none focus:border-primary autofill-light placeholder:text-[#817E61]"
          placeholder="example@email.com"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="flex items-center gap-x-2">
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M13 8H7" /><path d="M17 12H7" /></svg>
          <span>Message</span>
        </label>
        <textarea
          rows="4"
          id="message"
          name="message"
          className="w-full mt-4 bg-transparent border-b-2 border-[#c7c6bb] pb-4 focus:outline-none focus:border-primary resize-none autofill-light placeholder:text-[#817E61]"
          placeholder="Tell more about your idea"
        ></textarea>
      </div>
      <div>
        {submitted === "success" && (
          <div className="-mt-6 mb-6 text-green-700">{successMessage}</div>
        )}
        {submitted === "error" && (
          <div className="-mt-6 mb-6 text-red-600">{errorMessage}</div>
        )}

        <button
          type="submit"
          className="button button-lg group animate-top-right"
        >
          <span className="relative overflow-hidden transition-none [&>span]:block">
            <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
              <i className="not-italic">
                {!loading ? "Send Message" : "Sending.."}
              </i>
            </span>
            <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
              <i className="not-italic">
                {!loading ? "Send Message" : "Sending.."}
              </i>
            </span>
          </span>
          <span className="overflow-hidden leading-none -translate-y-[2px]">
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block animate-icon"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
