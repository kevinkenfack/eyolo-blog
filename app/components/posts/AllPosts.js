"use client";

import Skeleton from "@/app/components/blog/Skeleton";
import PostTwo from "@/components/posts/Post-2";
import allPosts from "@/data/posts.json";
import { capitalizeText } from "@/utils/capitalizeText";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const AllPosts = ({ postsPerPage }) => {
  const filterParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [totalFilteredPosts, setTotalFilteredPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const postFilters = ["trending", "popular", "featured"];

  // Set the filter params in URL
  const setURLParams = useCallback(
    (filter, page = 1) => {
      const params = new URLSearchParams(filterParams);
      if (filter) {
        params.set("filter", filter);
      }
      params.set("page", page);
      router.push(`?${params.toString()}`, undefined, { shallow: false });
    },
    [filterParams, router]
  );

  // Set filtered posts with pagination
  const setFilteredPosts = useCallback(
    (filter, page = 1) => {
      let filteredPosts;
      if (filter === "trending") {
        setLoading(true);
        filteredPosts = allPosts.filter((post) => post.frontmatter.trending);
      } else if (filter === "popular") {
        setLoading(true);
        filteredPosts = allPosts.filter(
          (post) => post.frontmatter.trending && post.frontmatter.featured
        );
      } else if (filter === "featured") {
        setLoading(true);
        filteredPosts = allPosts.filter(
          (post) => post.frontmatter.post_of_the_week
        );
      } else {
        setLoading(true);
        filteredPosts = allPosts;
      }

      const start = (page - 1) * postsPerPage;
      const paginatedPosts = filteredPosts.slice(start, start + postsPerPage);

      setTotalFilteredPosts(filteredPosts.length);
      setPosts(paginatedPosts);
      setLoading(false);
    },
    [postsPerPage]
  );

  // Set default filter
  useEffect(() => {
    const filter = filterParams.get("filter") || "latest";
    const page = Number(filterParams.get("page") || 1);
    setFilteredPosts(filter, page);
  }, [filterParams, setFilteredPosts]);

  // Handle filter change
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setLoading(true);
    setCurrentPage(1);
    setURLParams(value, 1);
    setFilteredPosts(value, 1);
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setLoading(true);
    setCurrentPage(newPage);
    setURLParams(filterParams.get("filter") || "latest", newPage);
    setFilteredPosts(filterParams.get("filter") || "latest", newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="py-16 md:py-24 border-b border-border overflow-clip">
        <div className="container">
          <div className="row items-end gy-4">
            <div className="md:col-8">
              <p className="flex items-center justify-center md:justify-start gap-x-2 mb-6 sm:mb-8">
                {/* prettier-ignore */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2h18" /><rect width="18" height="12" x="3" y="6" rx="2" /><path d="M3 22h18" /></svg>
                <span>Explorer All</span>
              </p>
              <h1 className="text-4xl md:text-5xl text-white font-normal text-balance leading-tight capitalize relative z-10 mix-blend-difference text-center md:text-left">
                <span className="hidden md:inline-block bg-white w-6 md:w-10 h-px align-middle mr-4 md:mr-6"></span>
                {capitalizeText(
                  filterParams.get("filter") == null ||
                    filterParams.get("filter") === "" ||
                    !postFilters.includes(filterParams.get("filter"))
                    ? "Blogs from Eyolo"
                    : `${filterParams.get("filter")} Posts`
                )}
              </h1>
            </div>
            <div className="md:col-4 text-center md:text-end">
              <div className="inline-flex items-center gap-x-3">
                <p>Filter:</p>
                <select
                  className="bg-transparent border border-dark/20 rounded px-3 h-8 appearance-none outline-none w-28 bg-no-repeat bg-[size:13px] bg-[90%_50%] text-sm cursor-pointer"
                  style={{ backgroundImage: `url(${arrowBg})` }}
                  title="Filter Posts"
                  onChange={handleFilterChange}
                  value={filterParams.get("filter") || ""}
                >
                  <option value="latest">Latest</option>
                  <option value="trending">Trending</option>
                  <option value="popular">Popular</option>
                  <option value="featured">Featured</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 min-h-[500px]">
        <div className="container overflow-clip">
          <div className="row gx-5 gy-6">
            {loading ? (
              <>
                <div className="xl:col-3 lg:col-4 md:col-6 mb-3 sm:mb-8">
                  <Skeleton dark />
                </div>
                <div className="xl:col-3 lg:col-4 md:col-6 mb-3 sm:mb-8">
                  <Skeleton dark />
                </div>
                <div className="xl:col-3 lg:col-4 md:col-6 mb-3 sm:mb-8">
                  <Skeleton dark />
                </div>
                <div className="xl:col-3 lg:col-4 md:col-6 mb-3 sm:mb-8">
                  <Skeleton dark />
                </div>
              </>
            ) : posts.length === 0 ? (
              <div className="xl:col-3 lg:col-4 md:col-6">
                <Skeleton dark />
              </div>
            ) : (
              <>
                {posts.map((post, index) => (
                  <div
                    key={index}
                    className="xl:col-3 lg:col-4 md:col-6 mb-3 sm:mb-8"
                  >
                    <PostTwo post={post} />
                  </div>
                ))}

                <div className="col-12">
                  <hr className="border-border" />
                  <div className="flex flex-col justify-center items-center gap-y-4 mt-12">
                    <div className="flex gap-x-5 [&>*]:cursor-pointer [&>*]:flex [&>*]:items-center [&>*]:gap-x-2 [&>*]:px-5 [&>*]:py-3 [&>*]:rounded-md">
                      <button
                        className={`group ${
                          currentPage === 1
                            ? "pointer-events-none opacity-25"
                            : ""
                        }`}
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        {/* prettier-ignore */}
                        <svg className="-ml-2 transition duration-300 group-hover:-translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        Previous
                      </button>
                      <button
                        className={`group ${
                          currentPage ===
                          Math.ceil(totalFilteredPosts / postsPerPage)
                            ? "pointer-events-none opacity-25"
                            : ""
                        }`}
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        Next
                        {/* prettier-ignore */}
                        <svg className="-mr-2 transition duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                      </button>
                    </div>
                    <p>
                      Page {currentPage}{" "}
                      <span className="px-5 -translate-y-px inline-block opacity-20">
                        |
                      </span>{" "}
                      {postsPerPage * currentPage < totalFilteredPosts
                        ? postsPerPage * currentPage
                        : totalFilteredPosts}{" "}
                      of {totalFilteredPosts} Posts
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllPosts;

const arrowBg =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNic+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjMzQzYTQwJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMicgZD0nTTIgNWw2IDYgNi02Jy8+PC9zdmc+";
