"use client";

import config from "@/config/site.config.json";
import styles from "@/styles/modules/Style.module.scss";
import { ValidationError, useForm } from "@formspree/react";

const Newsletter = ({ newsletterOpen, toggleNewsletter }) => {
  const [state, handleSubmit, reset] = useForm(config.subscriptionFormspreeID);

  if (state.succeeded) {
    document.querySelector('[aria-label="subscribe-form"]').reset();
    setTimeout(() => {
      reset();
    }, 4000);
  }

  return (
    <div
      className={`fixed bg-dark/75 backdrop-blur-lg inset-0 z-[99] min-h-screen overflow-y-auto lg:flex items-center transition-all duration-300 no-scrollbar ${
        newsletterOpen
          ? "opacity-100 visible [&>div]:translate-y-0"
          : "opacity-0 invisible [&>div]:translate-y-2"
      }`}
    >
      <button
        type="button"
        className={`absolute top-6 sm:top-12 right-2 sm:right-12 bg-primary z-[999] h-12 w-12 grid place-items-center text-white cursor-pointer focus:outline-none rounded-full hover:bg-primary/80 hover:scale-105 has-transition scale-90 sm:scale-100 ${
          newsletterOpen ? "translate-y-0" : "-translate-y-2"
        }`}
        onClick={toggleNewsletter}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      <div className="fixed inset-0" onClick={toggleNewsletter}></div>

      <div className="px-4 sm:px-10 py-10 [&>div]:rounded-lg [&>div]:md:rounded-xl w-full max-w-7xl mx-auto [&>div]:py-10 [&>div]:lg:py-24 has-transition pointer-events-none [&>div]:pointer-events-auto z-50">
        <div className={`py-24 ${styles.waveBg}`}>
          <div className="container">
            <div className="row gy-4 items-center">
              <div className="md:col-10 lg:col-6 text-center text-white mx-auto lg:mx-0">
                {/* prettier-ignore */}
                <svg className="w-12 h-12 mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-balance !leading-tight text-white mb-6 max-w-sm mx-auto text-center">
                  Subscribe to get the New e-book
                </h2>
                <p className="font-extralight leading-relaxed sm:mb-6">
                  Subscribe for the news, articles, resources.
                </p>
              </div>

              <div className="lg:col-5">
                <div className={styles.newsletterBlock}>
                  <form
                    onSubmit={handleSubmit}
                    method="POST"
                    aria-label="subscribe-form"
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <label htmlFor="name" className="font-light mb-2 block">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="modal-sub-name"
                        className="rounded-full px-6 h-14 w-full border border-[#758A7D] focus:border-primary focus-visible:outline-none bg-transparent focus-visible:shadow-none autofill-light"
                      />
                      <ValidationError
                        prefix="Name"
                        field="modal-sub-name"
                        errors={state.errors}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="font-light mb-2 block">
                        Your Unique Email{" "}
                        <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="modal-sub-email"
                        className="rounded-full px-6 h-14 w-full sm:w-[calc(100%_-_60px)] border border-[#758A7D] focus:border-primary focus-visible:outline-none bg-transparent focus-visible:shadow-none autofill-light"
                      />
                      <ValidationError
                        prefix="Email"
                        field="modal-sub-email"
                        errors={state.errors}
                      />
                    </div>
                    <div className="flex items-center gap-2 max-w-[80%] sm:max-w-none pr-[70px] sm:pr-[50px] text-balance">
                      {/* prettier-ignore */}
                      <svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 10.3333L8.4615 13L14 7M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#415649" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span className="text-sm text-[#464536] font-light">
                        I Will appreciate receiving future promotional mails.
                      </span>
                    </div>

                    {/* prettier-ignore */}
                    <svg className="text-border absolute right-[50px] bottom-[50px]" width="20" height="20" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z" fill="currentColor"></path></svg>

                    {/* Button */}
                    <button
                      type="submit"
                      className="bg-primary hover:bg-dark rounded-full h-14 w-14 button border-0 text-white group animate-top-right absolute bottom-0 right-0 disabled:grayscale disabled:cursor-not-allowed focus:outline-none"
                      disabled={state.submitting}
                    >
                      <span className="overflow-hidden leading-none">
                        {/* prettier-ignore */}
                        <svg className="inline-block animate-icon -mt-1" width="16" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </button>
                  </form>
                  <div className="text-sm text-start px-6">
                    {state.succeeded && (
                      <p className="text-dark-400 mt-2">Thanks for joining!</p>
                    )}
                    {state.submitting && (
                      <p className="text-dark-400 mt-2">Submitting...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
