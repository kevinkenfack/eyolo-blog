"use client";
import Newsletter from "@/app/components/essential/Newsletter";
import Search from "@/app/components/essential/Search";
import Menu from "@/components/Menu";
import config from "@/config/site.config";
import styles from "@/styles/modules/Style.module.scss";
import { formatDate } from "@/utils/formatDate";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Banner = ({ featuredPost }) => {
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

  const { title, image, date, category, author, authorImage, readingTime } =
    featuredPost.frontmatter;

  return (
    <>
      <div className="container">
        <div className="row my-6 sm:my-10">
          <div className="lg:col-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                {/* logo */}
                <Link href="/">
                  {logo ? (
                    <Image
                      src={logo}
                      alt={logoText}
                      width={143}
                      height={30}
                      priority={true}
                    />
                  ) : (
                    <span className="text-3xl text-black">{logoText}</span>
                  )}
                </Link>

                <button
                  onClick={toggleNewsletter}
                  className="uppercase bg-[#F7EFC2] rounded-full py-2 px-4 text-sm hidden sm:flex items-center gap-2 group"
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

              {/* nav actions */}
              <div className="flex items-center gap-x-3 sm:gap-x-6 divide-x">
                {/* search */}
                <button
                  role="button"
                  className="flex items-center uppercase text-sm p-3 sm:px-0 sm:py-1"
                  aria-label="Toggle Search"
                  onClick={toggleSearch}
                >
                  {/* prettier-ignore */}
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3241 18.7231L14.5858 12.9807C15.7171 11.624 16.3975 9.89022 16.3975 7.99659C16.3975 3.67647 12.852 0.163818 8.49092 0.163818C4.12981 0.163818 0.576172 3.68057 0.576172 8.00069C0.576172 12.3208 4.12162 15.8335 8.48272 15.8335C10.3354 15.8335 12.0405 15.1981 13.3931 14.1366L19.1518 19.8953C19.4879 20.2314 19.988 20.2314 20.3241 19.8953C20.6602 19.5592 20.6602 19.0592 20.3241 18.7231ZM2.25667 8.00069C2.25667 4.6069 5.05204 1.84842 8.48272 1.84842C11.9134 1.84842 14.7088 4.6069 14.7088 8.00069C14.7088 11.3945 11.9134 14.153 8.48272 14.153C5.05204 14.153 2.25667 11.3904 2.25667 8.00069Z" fill="#060C14"/></svg>
                  <span className="ml-2 hidden sm:inline">Search</span>
                </button>

                {/* menu toggle */}
                <button
                  className={`flex lg:hidden items-center gap-3 uppercase text-white bg-black rounded-full py-[14px] sm:py-[9px] lg:py-[14px] px-4 sm:px-5 cursor-pointer hover:bg-white hover:text-black group has-transition border-none outline-none font-medium ${
                    menuOpen ? "bg-white !text-black" : ""
                  }`}
                  type="button"
                  onClick={toggleMenu}
                  aria-label="Toggle Navigation Menu"
                >
                  <span
                    className={`w-5 cursor-pointer [&>span]:h-[2px] [&>span]:block [&>span]:bg-white group-hover:[&>span]:bg-black [&>span]:rounded [&>span]:has-transition ${
                      menuOpen ? "[&>span]:!bg-black" : ""
                    }`}
                  >
                    <span
                      className={`w-1/2 mb-1 ${
                        menuOpen
                          ? "-rotate-45 translate-x-[2px] translate-y-[9px]"
                          : ""
                      }`}
                    ></span>
                    <span
                      className={`w-full mb-1 ${
                        menuOpen ? "rotate-45 scale-x-[0.95]" : ""
                      }`}
                    ></span>
                    <span
                      className={`w-1/2 ml-auto ${
                        menuOpen
                          ? "-rotate-45 translate-x-[-2px] translate-y-[-9px]"
                          : ""
                      }`}
                    ></span>
                  </span>
                  <i className="not-italic hidden sm:inline">MENU</i>
                </button>
              </div>
            </div>

            {/* start:: post-content */}
            <article
              className={`${styles.postBg} transition-all duration-500 ${
                menuOpen ? "opacity-20" : "opacity-100"
              } post-card group relative has-line-link-white rounded-2xl rounded-tr-none text-center px-4 sm:px-8 md:px-12 py-10 sm:py-16 mt-[52px] sm:mt-16`}
            >
              <div className="absolute -top-[31px] right-0 flex">
                {/* prettier-ignore */}
                <svg className="text-secondary relative -right-px" width="86" height="32" viewBox="0 0 86 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M85.3511 32H0C8.17473 32 15.7118 28.9386 19.7164 23.9923L32.6592 8.00769C36.6639 3.06146 44.2025 0 52.3758 0H85.3511V32Z" fill="currentColor"/></svg>
                <div className="h-8 bg-secondary w-32 sm:w-52 rounded-tr-2xl"></div>
              </div>

              <h2 className="text-sm uppercase font-secondary pl-7 pr-3 py-1 after:absolute after:rounded-full after:content-[''] after:h-2 after:w-2 after:bg-primary after:left-3 after:top-[10px] text-white absolute bg-white/15 -top-4 right-4 rounded-full">
                Featured Post
              </h2>

              <div className="mt-6 text-white">
                <span className="text-sm flex gap-2 items-center justify-center mb-3 uppercase">
                  {/* prettier-ignore */}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6663 2.66677H11.333V2.0001C11.333 1.82329 11.2628 1.65372 11.1377 1.5287C11.0127 1.40367 10.8432 1.33344 10.6663 1.33344C10.4895 1.33344 10.32 1.40367 10.1949 1.5287C10.0699 1.65372 9.99967 1.82329 9.99967 2.0001V2.66677H5.99967V2.0001C5.99967 1.82329 5.92944 1.65372 5.80441 1.5287C5.67939 1.40367 5.50982 1.33344 5.33301 1.33344C5.1562 1.33344 4.98663 1.40367 4.8616 1.5287C4.73658 1.65372 4.66634 1.82329 4.66634 2.0001V2.66677H3.33301C2.80257 2.66677 2.29387 2.87748 1.91879 3.25255C1.54372 3.62763 1.33301 4.13633 1.33301 4.66677V12.6668C1.33301 13.1972 1.54372 13.7059 1.91879 14.081C2.29387 14.4561 2.80257 14.6668 3.33301 14.6668H12.6663C13.1968 14.6668 13.7055 14.4561 14.0806 14.081C14.4556 13.7059 14.6663 13.1972 14.6663 12.6668V4.66677C14.6663 4.13633 14.4556 3.62763 14.0806 3.25255C13.7055 2.87748 13.1968 2.66677 12.6663 2.66677ZM13.333 12.6668C13.333 12.8436 13.2628 13.0131 13.1377 13.1382C13.0127 13.2632 12.8432 13.3334 12.6663 13.3334H3.33301C3.1562 13.3334 2.98663 13.2632 2.8616 13.1382C2.73658 13.0131 2.66634 12.8436 2.66634 12.6668V8.0001H13.333V12.6668ZM13.333 6.66677H2.66634V4.66677C2.66634 4.48996 2.73658 4.32039 2.8616 4.19536C2.98663 4.07034 3.1562 4.0001 3.33301 4.0001H4.66634V4.66677C4.66634 4.84358 4.73658 5.01315 4.8616 5.13817C4.98663 5.2632 5.1562 5.33343 5.33301 5.33343C5.50982 5.33343 5.67939 5.2632 5.80441 5.13817C5.92944 5.01315 5.99967 4.84358 5.99967 4.66677V4.0001H9.99967V4.66677C9.99967 4.84358 10.0699 5.01315 10.1949 5.13817C10.32 5.2632 10.4895 5.33343 10.6663 5.33343C10.8432 5.33343 11.0127 5.2632 11.1377 5.13817C11.2628 5.01315 11.333 4.84358 11.333 4.66677V4.0001H12.6663C12.8432 4.0001 13.0127 4.07034 13.1377 4.19536C13.2628 4.32039 13.333 4.48996 13.333 4.66677V6.66677Z" fill="currentColor"/></svg>
                  {formatDate(date)}
                </span>

                <h3 className="text-3xl sm:text-4xl text-white !leading-normal line-clamp-3">
                  <Link
                    href={featuredPost.slug}
                    className="link-stretched line-link-el"
                    aria-label={title}
                  >
                    {title}
                  </Link>
                </h3>

                <ul className="flex flex-wrap items-center justify-center gap-3 gap-y-1 uppercase text-sm mt-6 mb-4">
                  <li className="flex items-center">
                    <Image
                      src={authorImage}
                      alt={`Author of the post - ${author}`}
                      height={24}
                      width={24}
                      className="h-6 w-6 border border-[#ABABAB] rounded-full mr-2"
                    />
                    {author}
                  </li>
                  <li>•</li>
                  <li>{readingTime}</li>
                </ul>

                <span className="h-12 sm:h-14 w-12 sm:w-14 m-auto flex items-center justify-center text-white sm:text-[#90A096] group-hover:text-white group-hover:bg-white/10 bg-white/30 sm:bg-transparent rounded-full transition-all duration-300 p-[17px] sm:p-0 group-hover:rotate-45">
                  {/* prettier-ignore */}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99902 18.0009L18 1.99991M18 1.99991H3.59912M18 1.99991V16.4008" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
            </article>
            {/* end:: post-content */}
          </div>

          <div className="lg:col-5 relative hidden lg:block">
            <div className="post-card post-category-top relative">
              <div className="post-category bg-light z-10">
                <div className="flex items-center justify-end relative z-20">
                  {/* menu toggle */}
                  <button
                    className={`flex items-center gap-3 uppercase text-white bg-black rounded-full py-[14px] px-5 cursor-pointer focus:outline-none hover:bg-white hover:text-black group has-transition border-none font-medium ${
                      menuOpen ? "bg-white !text-black" : ""
                    }`}
                    type="button"
                    onClick={toggleMenu}
                    aria-label="Toggle Navigation Menu"
                  >
                    <span
                      className={`w-5 cursor-pointer [&>span]:h-[2px] [&>span]:block [&>span]:bg-white group-hover:[&>span]:bg-black [&>span]:rounded [&>span]:has-transition ${
                        menuOpen ? "[&>span]:!bg-black" : ""
                      }`}
                    >
                      <span
                        className={`w-1/2 mb-1 ${
                          menuOpen
                            ? "-rotate-45 translate-x-[2px] translate-y-[9px]"
                            : ""
                        }`}
                      ></span>
                      <span
                        className={`w-full mb-1 ${
                          menuOpen ? "rotate-45 scale-x-[0.95]" : ""
                        }`}
                      ></span>
                      <span
                        className={`w-1/2 ml-auto ${
                          menuOpen
                            ? "-rotate-45 translate-x-[-2px] translate-y-[-9px]"
                            : ""
                        }`}
                      ></span>
                    </span>
                    Menu
                  </button>
                </div>

                <div className="text-light corner left">
                  {/* prettier-ignore */}
                  <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z" fill="currentColor"></path></svg>
                </div>
                <div className="text-light corner bottom">
                  {/* prettier-ignore */}
                  <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z" fill="currentColor"></path></svg>
                </div>
              </div>
            </div>

            {/* start:: post image */}
            <div
              className={`post-card post-category-bottom relative h-full transition-all duration-500 ${
                menuOpen ? "opacity-20" : "opacity-100"
              }`}
            >
              <div className="absolute w-full h-full">
                <span className="post-category text-dark bg-light z-10">
                  <Link
                    href={`/category/${slugify(category)}`}
                    className="border-border transition duration-300 hover:bg-dark hover:text-white hover:border-dark"
                  >
                    {category}
                  </Link>

                  <div className="text-light corner left">
                    {/* prettier-ignore */}
                    <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z" fill="currentColor"></path></svg>
                  </div>
                  <div className="text-light corner bottom">
                    {/* prettier-ignore */}
                    <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z" fill="currentColor"></path></svg>
                  </div>
                </span>
                <Image
                  className="rounded-xl md:rounded-2xl w-full max-h-full max-w-none object-cover h-full bg-white/40"
                  src={image}
                  height={700}
                  width={700}
                  alt={title}
                />
              </div>
              {/* end:: post image */}
            </div>
          </div>
        </div>
      </div>

      {/* menu */}
      <Menu menuOpen={menuOpen} className="top-[90px]" />

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
export default Banner;
