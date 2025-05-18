/* eslint-disable react/no-unescaped-entities */
"use client";

import { popularCategories } from "@/functions/categories";
import { formatDate } from "@/libs/utils/formatDate";
import { slugify } from "@/libs/utils/slugify";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Search = ({ searchOpen, toggleSearch }) => {
  // get current url params
  const [pagePathname, setPagePathname] = useState("");
  useEffect(() => {
    setPagePathname(window.location.pathname);
  }, [setPagePathname]);

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/posts", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      if (response.ok) {
        const posts = await response.json();
        setLoading(false);
        return posts;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts().then((posts) => setPosts(posts));
  }, []);

  // search input focus
  searchOpen
    ? setTimeout(() => {
        document.querySelector('[aria-label="search-query"]').focus();
      }, 250)
    : null;

  // search results
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = posts.filter((searchResult) => {
    let { title, description, author, category } = searchResult.frontmatter;

    if (searchTerm === "") {
      return "";
    } else if (
      title?.toLowerCase().includes(searchTerm) ||
      description?.toLowerCase().includes(searchTerm) ||
      author?.toLowerCase().includes(searchTerm) ||
      category?.toLowerCase().includes(searchTerm)
    ) {
      return searchResult;
    }
  });

  // reset search
  const resetSearch = () => {
    setSearchTerm("");
    toggleSearch(false);
    document.querySelector('[aria-label="search-query"]').value = "";
  };

  // categories
  const categories = popularCategories(posts);

  return (
    <div
      className={`fixed bg-light inset-0 z-[99] min-h-screen overflow-y-auto transition-all duration-300 no-scrollbar ${
        searchOpen
          ? "opacity-100 visible [&>div]:translate-y-0"
          : "opacity-0 invisible pointer-events-none [&>div]:translate-y-2"
      }`}
    >
      <div className="[&>div]:px-3 sm:[&>div]:px-8 [&>div]:py-5 sm:[&>div]:py-12 [&>div]:rounded-lg [&>div]:md:rounded-xl w-full max-w-7xl mx-auto has-transition pointer-events-none [&>div]:pointer-events-auto z-50">
        <div>
          <label htmlFor="search" className="relative">
            {/* prettier-ignore */}
            <svg className="absolute -top-[2px] sm:-top-2 left-0 h-5 sm:h-7 w-5 sm:w-7" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3241 18.7231L14.5858 12.9807C15.7171 11.624 16.3975 9.89022 16.3975 7.99659C16.3975 3.67647 12.852 0.163818 8.49092 0.163818C4.12981 0.163818 0.576172 3.68057 0.576172 8.00069C0.576172 12.3208 4.12162 15.8335 8.48272 15.8335C10.3354 15.8335 12.0405 15.1981 13.3931 14.1366L19.1518 19.8953C19.4879 20.2314 19.988 20.2314 20.3241 19.8953C20.6602 19.5592 20.6602 19.0592 20.3241 18.7231ZM2.25667 8.00069C2.25667 4.6069 5.05204 1.84842 8.48272 1.84842C11.9134 1.84842 14.7088 4.6069 14.7088 8.00069C14.7088 11.3945 11.9134 14.153 8.48272 14.153C5.05204 14.153 2.25667 11.3904 2.25667 8.00069Z" fill="#817E61"/></svg>
            <input
              onChange={(e) => {
                setSearchTerm(e.target.value.toLowerCase());
              }}
              type="text"
              placeholder="Search entire blog..."
              aria-label="search-query"
              className="bg-transparent border-b border-borderLight focus:ring-0 focus:outline-none w-full text-dark py-3 sm:py-4 text-xl sm:text-3xl font-primary placeholder:text-[#817E61] px-9 sm:px-12 focus:border-primary transition-all duration-500 outline-none shadow-none"
            />
          </label>

          <button
            type="button"
            className={`absolute top-6 sm:top-14 right-3 sm:right-7 xl:right-8 border border-primary text-primary z-[999] h-9 sm:h-11 w-9 sm:w-11 grid place-items-center cursor-pointer rounded-full hover:bg-primary hover:text-white hover:scale-105 has-transition focus:outline-none ${
              searchOpen
                ? "opacity-100 delay-100 scale-100"
                : "opacity-0 scale-75"
            }`}
            onClick={resetSearch}
          >
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="border-t pt-8 border-[#DBD8BD] mb-10">
              <div className="mb-8">
                <h2 className="text-base font-secondary pl-4 relative after:absolute after:rounded-full -mt-1 after:content-[''] after:h-2 after:w-2 after:bg-primary after:left-0 after:top-2 [&>span]:text-primary [&>span]:font-bold [&>span]:lowercase">
                  {searchTerm ? (
                    searchResults.length > 0 ? (
                      <>
                        Found{" "}
                        <span>
                          {searchResults.length.toString().padStart(2, 0)}
                        </span>{" "}
                        Results for <span>{searchTerm}</span>
                      </>
                    ) : (
                      <p>
                        We couldn't find a match for "
                        <span className="text-primary">{searchTerm}</span>
                        " <br />
                        Please try something else..
                      </p>
                    )
                  ) : (
                    <i className="uppercase not-italic">Recent Posts</i>
                  )}
                </h2>
              </div>

              <div className="row gy-2">
                {searchResults.length > 0 &&
                  searchResults.map((post, key) => (
                    <div className="lg:col-4" key={key}>
                      <div className="border-b border-border group relative has-line-link pb-3 h-full">
                        <div className="flex gap-3">
                          <div className="relative shrink-0">
                            <Image
                              src={post.frontmatter.image}
                              alt={post.frontmatter.title}
                              height={200}
                              width={200}
                              className="h-[100px] sm:h-[110px] w-20 sm:w-24 rounded-lg object-cover"
                            />
                          </div>
                          <div className="self-center">
                            <span className="text-sm flex gap-2 items-center mb-2 sm:mb-3 uppercase text-[#464536]">
                              {/* prettier-ignore */}
                              <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.6663 2.66677H11.333V2.0001C11.333 1.82329 11.2628 1.65372 11.1377 1.5287C11.0127 1.40367 10.8432 1.33344 10.6663 1.33344C10.4895 1.33344 10.32 1.40367 10.1949 1.5287C10.0699 1.65372 9.99967 1.82329 9.99967 2.0001V2.66677H5.99967V2.0001C5.99967 1.82329 5.92944 1.65372 5.80441 1.5287C5.67939 1.40367 5.50982 1.33344 5.33301 1.33344C5.1562 1.33344 4.98663 1.40367 4.8616 1.5287C4.73658 1.65372 4.66634 1.82329 4.66634 2.0001V2.66677H3.33301C2.80257 2.66677 2.29387 2.87748 1.91879 3.25255C1.54372 3.62763 1.33301 4.13633 1.33301 4.66677V12.6668C1.33301 13.1972 1.54372 13.7059 1.91879 14.081C2.29387 14.4561 2.80257 14.6668 3.33301 14.6668H12.6663C13.1968 14.6668 13.7055 14.4561 14.0806 14.081C14.4556 13.7059 14.6663 13.1972 14.6663 12.6668V4.66677C14.6663 4.13633 14.4556 3.62763 14.0806 3.25255C13.7055 2.87748 13.1968 2.66677 12.6663 2.66677ZM13.333 12.6668C13.333 12.8436 13.2628 13.0131 13.1377 13.1382C13.0127 13.2632 12.8432 13.3334 12.6663 13.3334H3.33301C3.1562 13.3334 2.98663 13.2632 2.8616 13.1382C2.73658 13.0131 2.66634 12.8436 2.66634 12.6668V8.0001H13.333V12.6668ZM13.333 6.66677H2.66634V4.66677C2.66634 4.48996 2.73658 4.32039 2.8616 4.19536C2.98663 4.07034 3.1562 4.0001 3.33301 4.0001H4.66634V4.66677C4.66634 4.84358 4.73658 5.01315 4.8616 5.13817C4.98663 5.2632 5.1562 5.33343 5.33301 5.33343C5.50982 5.33343 5.67939 5.2632 5.80441 5.13817C5.92944 5.01315 5.99967 4.84358 5.99967 4.66677V4.0001H9.99967V4.66677C9.99967 4.84358 10.0699 5.01315 10.1949 5.13817C10.32 5.2632 10.4895 5.33343 10.6663 5.33343C10.8432 5.33343 11.0127 5.2632 11.1377 5.13817C11.2628 5.01315 11.333 4.84358 11.333 4.66677V4.0001H12.6663C12.8432 4.0001 13.0127 4.07034 13.1377 4.19536C13.2628 4.32039 13.333 4.48996 13.333 4.66677V6.66677Z" fill="currentColor"/></svg>
                              {formatDate(post.frontmatter.date)}
                            </span>

                            <h3 className="sm:text-lg text-dark leading-relaxed line-link line-clamp-3">
                              <Link
                                href={`/${post.slug}`}
                                className={`link-stretched line-link-el ${
                                  pagePathname === `/${post.slug}`
                                    ? "line-link-el-active pointer-events-none"
                                    : ""
                                }`}
                              >
                                {post.frontmatter.title}
                              </Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                {!searchTerm &&
                  posts.slice(0, 3).map((post, key) => (
                    <div className="lg:col-4" key={key}>
                      <div className="border-b border-border group relative has-line-link pb-3 h-full">
                        <div className="flex gap-3">
                          <div className="relative shrink-0">
                            <Image
                              src={post.frontmatter.image}
                              alt={post.frontmatter.title}
                              height={200}
                              width={200}
                              className="h-[100px] sm:h-[110px] w-20 sm:w-24 rounded-lg object-cover"
                            />
                          </div>
                          <div className="self-center">
                            <span className="text-sm flex gap-2 items-center mb-2 sm:mb-3 uppercase text-[#464536]">
                              {/* prettier-ignore */}
                              <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.6663 2.66677H11.333V2.0001C11.333 1.82329 11.2628 1.65372 11.1377 1.5287C11.0127 1.40367 10.8432 1.33344 10.6663 1.33344C10.4895 1.33344 10.32 1.40367 10.1949 1.5287C10.0699 1.65372 9.99967 1.82329 9.99967 2.0001V2.66677H5.99967V2.0001C5.99967 1.82329 5.92944 1.65372 5.80441 1.5287C5.67939 1.40367 5.50982 1.33344 5.33301 1.33344C5.1562 1.33344 4.98663 1.40367 4.8616 1.5287C4.73658 1.65372 4.66634 1.82329 4.66634 2.0001V2.66677H3.33301C2.80257 2.66677 2.29387 2.87748 1.91879 3.25255C1.54372 3.62763 1.33301 4.13633 1.33301 4.66677V12.6668C1.33301 13.1972 1.54372 13.7059 1.91879 14.081C2.29387 14.4561 2.80257 14.6668 3.33301 14.6668H12.6663C13.1968 14.6668 13.7055 14.4561 14.0806 14.081C14.4556 13.7059 14.6663 13.1972 14.6663 12.6668V4.66677C14.6663 4.13633 14.4556 3.62763 14.0806 3.25255C13.7055 2.87748 13.1968 2.66677 12.6663 2.66677ZM13.333 12.6668C13.333 12.8436 13.2628 13.0131 13.1377 13.1382C13.0127 13.2632 12.8432 13.3334 12.6663 13.3334H3.33301C3.1562 13.3334 2.98663 13.2632 2.8616 13.1382C2.73658 13.0131 2.66634 12.8436 2.66634 12.6668V8.0001H13.333V12.6668ZM13.333 6.66677H2.66634V4.66677C2.66634 4.48996 2.73658 4.32039 2.8616 4.19536C2.98663 4.07034 3.1562 4.0001 3.33301 4.0001H4.66634V4.66677C4.66634 4.84358 4.73658 5.01315 4.8616 5.13817C4.98663 5.2632 5.1562 5.33343 5.33301 5.33343C5.50982 5.33343 5.67939 5.2632 5.80441 5.13817C5.92944 5.01315 5.99967 4.84358 5.99967 4.66677V4.0001H9.99967V4.66677C9.99967 4.84358 10.0699 5.01315 10.1949 5.13817C10.32 5.2632 10.4895 5.33343 10.6663 5.33343C10.8432 5.33343 11.0127 5.2632 11.1377 5.13817C11.2628 5.01315 11.333 4.84358 11.333 4.66677V4.0001H12.6663C12.8432 4.0001 13.0127 4.07034 13.1377 4.19536C13.2628 4.32039 13.333 4.48996 13.333 4.66677V6.66677Z" fill="currentColor"/></svg>
                              {formatDate(post.frontmatter.date)}
                            </span>

                            <h3 className="sm:text-lg text-dark leading-relaxed line-link line-clamp-3">
                              <Link
                                href={`/${post.slug}`}
                                className={`link-stretched line-link-el ${
                                  pagePathname === `/${post.slug}`
                                    ? "line-link-el-active pointer-events-none"
                                    : ""
                                }`}
                              >
                                {post.frontmatter.title}
                              </Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-14">
                <div className="mb-8">
                  <h2 className="text-base uppercase font-secondary pl-4 relative after:absolute after:rounded-full -mt-1 after:content-[''] after:h-2 after:w-2 after:bg-primary after:left-0 after:top-2">
                    Browse posts by Topics
                  </h2>
                </div>

                <div className="post-card">
                  <div className="post-category !static !flex flex-wrap gap-2 sm:gap-3 sm:justify-start justify-between">
                    {categories.slice(0, 8).map((category, key) => (
                      <Link
                        className={`min-h-[40px] py-2 px-3 border-border transition duration-300 hover:bg-dark hover:text-white hover:border-dark !flex items-center gap-x-1 sm:w-auto w-[calc(50%-0.5rem)] justify-center text-center ${
                          pagePathname === `/category/${slugify(category.name)}`
                            ? "bg-dark text-white border-dark"
                            : ""
                        }`}
                        href={`/category/${slugify(category.name)}`}
                        key={key}
                      >
                        {category.name}
                        {category.count > 1 && (
                          <span className="bg-primary text-white h-5 w-5 leading-5 rounded-full inline-block text-center text-xs ml-1">
                            {category.count}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
