"use client";

import Newsletter from "@/app/components/essential/Newsletter";
import Search from "@/app/components/essential/Search";
import Menu from "@/components/Menu";
import config from "@/config/site.config";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const logo = config.logo;
  const logoText = config.logoText;

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const [newsletterOpen, setNewsletterOpen] = useState(false);
  const toggleNewsletter = () => {
    setNewsletterOpen(!newsletterOpen);
  };

  return (
    <>
      <header className="border-b-[1px] border-border relative">
        <div className="container px-5 sm:px-3">
          <div className="row items-center flex-wrap">
            {/* menu toggle and subscribe */}
            <div className="col-2 md:col-4">
              <div className="flex items-center gap-x-8">
                <button
                  className="w-8 cursor-pointer [&>span]:has-transition [&>span]:h-[2.5px] [&>span]:block [&>span]:bg-dark [&>span]:rounded focus:outline-none"
                  role="button"
                  onClick={toggleMenu}
                  aria-label="Toggle Navigation Menu"
                >
                  <span
                    className={`w-1/2 mb-2 ${
                      menuOpen
                        ? "-rotate-45 translate-x-[3px] translate-y-[15.5px]"
                        : ""
                    }`}
                  ></span>
                  <span
                    className={`w-full mb-2 ${
                      menuOpen ? "rotate-45 scale-x-[0.95]" : ""
                    }`}
                  ></span>
                  <span
                    className={`w-1/2 ml-auto ${
                      menuOpen
                        ? "-rotate-45 translate-x-[-3px] translate-y-[-15.5px]"
                        : ""
                    }`}
                  ></span>
                </button>

                <button
                  className="uppercase bg-[#F7EFC2] rounded-full py-2 px-4 text-sm hidden lg:flex items-center gap-2 group focus:outline-none"
                  onClick={toggleNewsletter}
                >
                  {/* prettier-ignore */}
                  <svg className="text-primary transition-none group-hover:has-transition group-hover:rotate-180" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1C9 5.41828 12.5817 9 17 9C12.5817 9 9 12.5817 9 17C9 12.5817 5.41828 9 1 9C5.41828 9 9 5.41828 9 1Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="relative overflow-hidden transition-none [&>span]:block">
                    <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                      Newsletter
                    </span>
                    <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                      Newsletter
                    </span>
                  </span>
                </button>
              </div>
            </div>

            {/* logo */}
            <div className="col-8 md:col-4 text-center leading-[0]">
              <Link
                href="/"
                className="py-4 sm:py-5 px-10 border-x-[1px] border-border inline-block focus:outline-none"
              >
                {logo ? (
                  <Image
                    src={logo}
                    alt={logoText}
                    width={143}
                    height={30}
                    priority={true}
                    className="w-[120px] sm:w-[143px] h-auto"
                  />
                ) : (
                  <span className="text-3xl text-black">{logoText}</span>
                )}
              </Link>
            </div>

            {/* nav actions */}
            <div className="col-2 md:col-4">
              <div className="flex items-center justify-end gap-x-6">
                {/* search */}
                <button
                  role="button"
                  className="flex items-center uppercase text-sm py-2"
                  aria-label="Toggle Search"
                  onClick={toggleSearch}
                >
                  {/* prettier-ignore */}
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3241 18.7231L14.5858 12.9807C15.7171 11.624 16.3975 9.89022 16.3975 7.99659C16.3975 3.67647 12.852 0.163818 8.49092 0.163818C4.12981 0.163818 0.576172 3.68057 0.576172 8.00069C0.576172 12.3208 4.12162 15.8335 8.48272 15.8335C10.3354 15.8335 12.0405 15.1981 13.3931 14.1366L19.1518 19.8953C19.4879 20.2314 19.988 20.2314 20.3241 19.8953C20.6602 19.5592 20.6602 19.0592 20.3241 18.7231ZM2.25667 8.00069C2.25667 4.6069 5.05204 1.84842 8.48272 1.84842C11.9134 1.84842 14.7088 4.6069 14.7088 8.00069C14.7088 11.3945 11.9134 14.153 8.48272 14.153C5.05204 14.153 2.25667 11.3904 2.25667 8.00069Z" fill="#060C14"/></svg>
                  <span className="ml-2 hidden sm:inline">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* menu */}
        <Menu
          menuOpen={menuOpen}
          className="top-[60px] sm:top-[71px] [&>nav]:!border-secondary"
        />
      </header>

      {/* search */}
      <Search toggleSearch={toggleSearch} searchOpen={searchOpen} />

      {/* newsletter */}
      <Newsletter
        toggleNewsletter={toggleNewsletter}
        newsletterOpen={newsletterOpen}
      />
    </>
  );
};
export default Header;
