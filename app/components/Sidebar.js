"use client";

import instagramPosts from "@/config/instagram-posts.json";
import config from "@/config/site.config.json";
import { ValidationError, useForm } from "@formspree/react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ sidebar }) => {
  const { adBanner, instagram, subscriptionForm } = sidebar || {};

  const [state, handleSubmit, reset] = useForm(config.subscriptionFormspreeID);

  if (state.succeeded) {
    document.querySelector('[aria-label="subscribe-form"]').reset();
    setTimeout(() => {
      reset();
    }, 4000);
  }

  return (
    <div className="sticky top-10 flex flex-col gap-y-9">
      {adBanner?.enable && (
        <div className="relative rounded-xl overflow-clip">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-[#00000000] to-[#000000] z-30 text-white px-6 sm:px-8 py-8 sm:py-10 flex flex-col justify-end">
            <p className="text-2xl xl:text-3xl font-primary !leading-normal mb-3 underline underline-offset-4">
              {adBanner.title}
            </p>
            {/* link */}
            <Link
              className="button button-lg group animate-top-right w-full mt-4 justify-center bg-primary text-white border-primary hover:bg-white hover:text-black hover:border-white"
              href={adBanner.button.link}
            >
              <span className="relative overflow-hidden transition-none group-hover:[&>span]:transition-transform group-hover:[&>span]:duration-500 [&>span]:block">
                <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                  {adBanner.button.label}
                </span>
                <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                  {adBanner.button.label}
                </span>
              </span>
              <span className="overflow-hidden leading-none -translate-y-[2px]">
                {/* prettier-ignore */}
                <svg className="inline-block animate-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </Link>
          </div>
          <Image
            src={adBanner.image}
            alt={adBanner.title}
            height={480}
            width={414}
            className="object-cover w-full max-h-96 md:max-h-max"
          />
        </div>
      )}

      {instagram?.enable && (
        <div className="border border-[#DBD8BD] rounded-xl px-4 sm:px-8 py-8 sm:py-10">
          <p className="uppercase text-center mb-6">{instagram.title}</p>

          <div className="row row-cols-3 sm:row-cols-4 md:row-cols-3 justify-center gx-2 gy-2">
            {instagramPosts.posts.slice(0, 6).map((post, key) => (
              <div className="col" key={key}>
                <Link
                  href={instagramPosts.URL}
                  className="relative group"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={200}
                    height={200}
                    className={`rounded aspect-square object-cover ${
                      key > 3 ? "sm:hidden md:block" : ""
                    }`}
                  />
                  <div className="bg-black/50 rounded absolute inset-0 grid place-content-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100">
                    {/* prettier-ignore */}
                    <svg className="transition-all duration-300 scale-75 group-hover:scale-100 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="currentColor"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/><path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01"/></g></svg>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <p>View on Instagram</p>
            <Link
              href={instagramPosts.URL}
              className="has-line-link text-dark hover:text-dark inline-flex items-center gap-2 transition-all"
              target="_blank"
            >
              {/* prettier-ignore */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12L12 4M12 4H4.8M12 4V11.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="line-link-el">{instagramPosts.username}</span>
            </Link>
          </div>
        </div>
      )}

      {subscriptionForm?.enable && (
        <div className="border border-[#DBD8BD] rounded-xl px-4 sm:px-8 py-8 sm:py-10">
          <p className="uppercase text-center mb-6">{subscriptionForm.title}</p>

          <form
            onSubmit={handleSubmit}
            method="POST"
            aria-label="subscribe-form"
          >
            <input
              id="name"
              type="email"
              name="sidebar-sub-email"
              className="rounded-full px-6 h-14 w-full border border-[#758A7D] focus:border-primary focus-visible:outline-none bg-transparent focus-visible:shadow-none autofill-light text-center text-[15px] placeholder:text-[#817E61]"
              placeholder="Your Email Address"
            />
            <div className="text-sm text-start px-6">
              <ValidationError
                prefix="Email"
                field="footer-sub-email"
                errors={state.errors}
              />
              {state.succeeded && (
                <p className="text-dark-400 mt-2">Thanks for joining!</p>
              )}
              {state.submitting && (
                <p className="text-dark-400 mt-2">Submitting...</p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="button button-lg group animate-top-right w-full mt-4 justify-center bg-primary text-white border-primary hover:text-white hover:border-primary disabled:grayscale disabled:cursor-not-allowed"
              disabled={state.submitting}
            >
              <span className="relative overflow-hidden transition-none group-hover:[&>span]:transition-transform group-hover:[&>span]:duration-500 [&>span]:block">
                <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                  {subscriptionForm.buttonLabel}
                </span>
                <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                  {subscriptionForm.buttonLabel}
                </span>
              </span>
              <span className="overflow-hidden leading-none -translate-y-[2px]">
                {/* prettier-ignore */}
                <svg className="inline-block animate-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
