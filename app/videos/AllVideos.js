"use client";

import Skeleton from "@/app/components/blog/Skeleton";
import allPosts from "@/data/video-posts.json";
import { formatDate } from "@/libs/utils/formatDate";
import styles from "@/styles/modules/Style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const AllVideos = ({ postsPerPage }) => {
  const posts = allPosts;
  const pageParam = useSearchParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  // Set the page params in URL
  const setPage = useCallback(
    (page = 1) => {
      const params = new URLSearchParams(pageParam);
      params.set("page", page);
      router.push(`?${params.toString()}`, undefined, { shallow: true });
      setLoading(false);
    },
    [pageParam, router]
  );

  // Pagination
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const scrollIntoPost = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - postsPerPage);
      setCurrentPage(currentPage - 1);
      scrollIntoPost();
      setPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentIndex + postsPerPage < posts.length) {
      setCurrentIndex(currentIndex + postsPerPage);
      setCurrentPage(currentPage + 1);
      scrollIntoPost();
      setPage(currentPage + 1);
    }
  };

  // get page number from URL and set current page
  useEffect(() => {
    const page = parseInt(pageParam.get("page")) || 1;
    if (!Number.isNaN(page)) {
      setCurrentPage(page);
      setCurrentIndex((page - 1) * postsPerPage);
      setLoading(false);
    }
  }, [pageParam, posts.length, postsPerPage]);

  return (
    <section className={`${styles.waveBg} overflow-clip`}>
      <div className="container py-20 md:py-28">
        <p className="flex items-center justify-center gap-x-2 mb-6 sm:mb-8 text-white">
          <span>Explorer All</span>
        </p>
        <h1 className="text-4xl md:text-5xl text-white font-normal text-balance leading-tight capitalize relative z-10 text-center -mb-2">
          <span className="inline-block bg-white w-6 md:w-10 h-px align-middle mr-4 md:mr-6"></span>
          Videos
          <span className="inline-block bg-white w-6 md:w-10 h-px align-middle ml-4 md:ml-6"></span>
        </h1>
      </div>

      <div className="container pb-16 md:pb-24 min-h-[500px]">
        <div className="row g-6">
          {loading ? (
            <>
              <div className="md:col-6">
                <Skeleton content="loading..." />
              </div>
              <div className="md:col-6">
                <Skeleton content="loading..." />
              </div>
            </>
          ) : currentIndex >= posts.length ? (
            <div className="md:col-6">
              <Skeleton content="No posts found in this page!" />
            </div>
          ) : (
            <>
              {posts
                .slice(currentIndex, currentIndex + postsPerPage)
                .map((post, index) => (
                  <div key={index} className="md:col-6">
                    <article className="group relative has-line-link-white">
                      <div className="relative">
                        <Image
                          className="rounded-xl md:rounded-2xl max-h-[360px] w-full object-cover bg-white/5"
                          src={post.frontmatter.image}
                          height={360}
                          width={360}
                          alt={post.frontmatter.title}
                        />
                        <span className="absolute top-5 left-5 bg-dark/80 group-hover:bg-primary transition-all duration-300 h-12 w-12 rounded-full grid place-content-center text-white">
                          {/* prettier-ignore */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
                        </span>
                      </div>

                      <div className="mt-6 text-white flex flex-col sm:flex-row sm:items-center gap-5">
                        <div className="mr-auto">
                          <span className="text-sm flex gap-2 items-center mb-3 uppercase">
                            {/* prettier-ignore */}
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6663 2.66677H11.333V2.0001C11.333 1.82329 11.2628 1.65372 11.1377 1.5287C11.0127 1.40367 10.8432 1.33344 10.6663 1.33344C10.4895 1.33344 10.32 1.40367 10.1949 1.5287C10.0699 1.65372 9.99967 1.82329 9.99967 2.0001V2.66677H5.99967V2.0001C5.99967 1.82329 5.92944 1.65372 5.80441 1.5287C5.67939 1.40367 5.50982 1.33344 5.33301 1.33344C5.1562 1.33344 4.98663 1.40367 4.8616 1.5287C4.73658 1.65372 4.66634 1.82329 4.66634 2.0001V2.66677H3.33301C2.80257 2.66677 2.29387 2.87748 1.91879 3.25255C1.54372 3.62763 1.33301 4.13633 1.33301 4.66677V12.6668C1.33301 13.1972 1.54372 13.7059 1.91879 14.081C2.29387 14.4561 2.80257 14.6668 3.33301 14.6668H12.6663C13.1968 14.6668 13.7055 14.4561 14.0806 14.081C14.4556 13.7059 14.6663 13.1972 14.6663 12.6668V4.66677C14.6663 4.13633 14.4556 3.62763 14.0806 3.25255C13.7055 2.87748 13.1968 2.66677 12.6663 2.66677ZM13.333 12.6668C13.333 12.8436 13.2628 13.0131 13.1377 13.1382C13.0127 13.2632 12.8432 13.3334 12.6663 13.3334H3.33301C3.1562 13.3334 2.98663 13.2632 2.8616 13.1382C2.73658 13.0131 2.66634 12.8436 2.66634 12.6668V8.0001H13.333V12.6668ZM13.333 6.66677H2.66634V4.66677C2.66634 4.48996 2.73658 4.32039 2.8616 4.19536C2.98663 4.07034 3.1562 4.0001 3.33301 4.0001H4.66634V4.66677C4.66634 4.84358 4.73658 5.01315 4.8616 5.13817C4.98663 5.2632 5.1562 5.33343 5.33301 5.33343C5.50982 5.33343 5.67939 5.2632 5.80441 5.13817C5.92944 5.01315 5.99967 4.84358 5.99967 4.66677V4.0001H9.99967V4.66677C9.99967 4.84358 10.0699 5.01315 10.1949 5.13817C10.32 5.2632 10.4895 5.33343 10.6663 5.33343C10.8432 5.33343 11.0127 5.2632 11.1377 5.13817C11.2628 5.01315 11.333 4.84358 11.333 4.66677V4.0001H12.6663C12.8432 4.0001 13.0127 4.07034 13.1377 4.19536C13.2628 4.32039 13.333 4.48996 13.333 4.66677V6.66677Z" fill="currentColor"/></svg>
                            {formatDate(post.frontmatter.date)}
                          </span>

                          <h3 className="text-2xl text-white leading-relaxed">
                            <Link
                              href={`/videos/${post.slug}`}
                              className="link-stretched line-link-el"
                            >
                              {post.frontmatter.title}
                            </Link>
                          </h3>
                          <p className="mt-3 opacity-75 font-light line-clamp-2">
                            {post.frontmatter.description}
                          </p>
                        </div>

                        <Link
                          href={`/videos/${post.slug}`}
                          className="w-12 inline-block text-[#90A096] group-hover:text-white group-hover:rotate-45 transition duration-300 flex-shrink-0"
                          aria-label={`Read More about ${post.frontmatter.title}`}
                        >
                          <span className="h-12 w-12 flex items-center justify-center text-[#90A096] group-hover:text-white bg-white/5 group-hover:bg-white/30 rounded-full has-transition">
                            {/* prettier-ignore */}
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99902 18.0009L18 1.99991M18 1.99991H3.59912M18 1.99991V16.4008" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </span>
                        </Link>
                      </div>
                    </article>
                  </div>
                ))}

              {/* Pagination */}
              <div className="col-12">
                <div className="border-t border-white/10 flex flex-col justify-center items-center gap-y-4 mt-2 sm:mt-6 pt-10 sm:pt-14">
                  <div className="flex gap-x-5 [&>*]:cursor-pointer [&>*]:flex [&>*]:items-center [&>*]:gap-x-2 [&>*]:px-5 [&>*]:py-3 [&>*]:rounded-md text-white">
                    <button
                      className={`group ${
                        currentPage === 1
                          ? "pointer-events-none opacity-25"
                          : ""
                      }`}
                      onClick={handlePrev}
                    >
                      {/* prettier-ignore */}
                      <svg className="-ml-2 transition duration-300 group-hover:-translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                      Previous
                    </button>
                    <button
                      className={`group ${
                        currentIndex + postsPerPage < posts.length
                          ? ""
                          : "pointer-events-none opacity-25"
                      }`}
                      onClick={handleNext}
                    >
                      Next
                      {/* prettier-ignore */}
                      <svg className="-mr-2 transition duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                  </div>
                  <p className="text-white">
                    Page {currentPage}{" "}
                    <span className="px-5 -translate-y-px inline-block opacity-20">
                      |
                    </span>{" "}
                    {postsPerPage * currentPage < posts.length
                      ? postsPerPage * currentPage
                      : posts.length}{" "}
                    of {posts.length} Posts
                  </p>
                </div>
              </div>
              {/* Pagination */}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllVideos;
