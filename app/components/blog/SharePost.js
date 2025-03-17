"use client";

import config from "@/config/site.config";
import { useEffect, useState } from "react";

const SharePost = ({ title, slug }) => {
  const postURL = config.siteURL + "/" + slug;

  // copy url
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(postURL);
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }, [isCopied]);

  return (
    <div className="mt-8 relative">
      <hr className="w-10 mb-7 mx-auto border-t border-dark/10" />
      <p className="mb-3 text-xs opacity-65 uppercase text-center">
        Share this post
      </p>
      <ul className="flex items-center justify-center gap-3">
        <li>
          <button
            className="h-10 w-10 flex items-center justify-center border border-dark/10 rounded-lg hover:bg-dark hover:text-white transition duration-300"
            onClick={copyToClipboard}
          >
            {isCopied ? (
              <>
                {/* prettier-ignore */}
                <svg xmlns="http://www.w3.org/2000/svg" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 15 2 2 4-4"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              </>
            ) : (
              <>
                {/* prettier-ignore */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" height="0.9em"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
              </>
            )}
          </button>
        </li>
        <li>
          <a
            href={`https://twitter.com/intent/tweet?text=${title}&url=${postURL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 flex items-center justify-center border border-dark/10 rounded-lg hover:bg-dark hover:text-white transition duration-300"
          >
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" height="1em"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
          </a>
        </li>
        <li>
          <a
            href={`https://www.facebook.com/sharer.php?u=${postURL}&quote=${title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 flex items-center justify-center border border-dark/10 rounded-lg hover:bg-dark hover:text-white transition duration-300"
          >
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="currentColor"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-10 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
          </a>
        </li>
        <li>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${postURL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 flex items-center justify-center border border-dark/10 rounded-lg hover:bg-dark hover:text-white transition duration-300"
          >
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="currentColor"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
          </a>
        </li>
      </ul>

      <div
        className={`lg:text-center text-xs mt-3 transition-all duration-300 absolute w-full ${
          isCopied ? "opacity-50" : "opacity-0 invisible translate-y-3"
        }`}
      >
        URL Copied to clipboard
      </div>
    </div>
  );
};

export default SharePost;
