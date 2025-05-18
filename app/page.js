import Banner from "@/components/home-1/Banner";
import Layout from "@/components/home-1/Layout";
import PostThree from "@/components/posts/Post-3";
import PostBlack from "@/components/posts/PostBlack";
import homepageData from "@/data/pages/_index.json";
import allPosts from "@/data/posts.json";
import { popularCategories } from "@/functions/categories";
import { isPostInArray } from "@/libs/utils/isPostInArray";
import { slugify } from "@/libs/utils/slugify";
import styles from "@/styles/modules/Style.module.scss";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  // homepage data
  const {
    latestArticles,
    popularTopics,
    popularArticles,
    trendingArticles,
    postOfTheWeekSection,
  } = homepageData.frontmatter || {};

  // All Categories with image
  const categories = popularCategories(allPosts).slice(0, 8) || [];

  // First featured post
  const allFeaturedPost =
    allPosts.filter((post) => post.frontmatter.featured) || [];
  const featuredPost = allFeaturedPost[0];

  // Fisrt post of - post of the week
  const allPostOfTheWeek =
    allPosts.filter((post) => post.frontmatter.post_of_the_week) || [];
  const postOfTheWeek = allPostOfTheWeek[0];

  // Latest posts
  const latestPosts =
    allPosts
      .filter(
        (post) =>
          post.slug !== featuredPost.slug && post.slug !== postOfTheWeek.slug
      )
      .slice(0, 4) || [];

  // Trending posts
  const trendingPosts =
    allPosts
      .filter(
        (post) =>
          !isPostInArray(post, allFeaturedPost) &&
          !isPostInArray(post, allPostOfTheWeek) &&
          !isPostInArray(post, latestPosts) &&
          post.frontmatter.trending
      )
      .slice(0, 4) || [];

  // Popular posts
  const popularPosts =
    allPosts
      .filter(
        (post) =>
          !isPostInArray(post, latestPosts) &&
          post.slug !== featuredPost.slug &&
          post.slug !== postOfTheWeek.slug &&
          post.frontmatter.trending &&
          post.frontmatter.featured
      )
      .slice(0, 4) || [];

  return (
    <Layout>
      <Banner featuredPost={featuredPost} />

      {/* Popular Topics */}
      {popularTopics?.enable && (
        <section className="sm:pt-5 pb-16 sm:pb-24 overflow-hidden">
          <div className="container mt-12">
            <div className="mb-14">
              <h2 className="text-base uppercase font-secondary pl-4 relative after:absolute after:rounded-full -mt-1 after:content-[''] after:h-2 after:w-2 after:bg-primary after:left-0 after:top-2 w-fit mx-auto">
                {popularTopics.title}
              </h2>
            </div>

            <ul className="text-center flex flex-wrap justify-center gap-x-3 gap-y-4 sm:gap-6 lg:gap-8 [&>li]:text-2xl sm:[&>li]:text-3xl lg:[&>li]:text-4xl [&>li]:cursor-pointer font-primary text-black [&>li]:capitalize">
              {categories.map((category, key) => (
                <li
                  key={key}
                  className="relative group transition-all duration-300"
                >
                  <Link
                    href={`/category/${slugify(category.name)}`}
                    className="inline-block"
                  >
                    <span className="transition-all duration-100 relative z-30 group-hover:text-white group-hover:drop-shadow-lg">
                      {category.name}
                    </span>
                    <span className="absolute h-[80px] sm:h-[100px] lg:h-[130px] w-[140px] sm:w-[200px] lg:w-[250px] left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 opacity-0 invisible scale-90 -rotate-12 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:scale-100 overflow-hidden rounded-lg z-20 pointer-events-none mt-4 group-hover:mt-0">
                      <Image
                        height="130"
                        width="250"
                        className="object-cover h-full w-full scale-125 group-hover:scale-100 transition-all duration-300"
                        src={category.image}
                        alt={category.name}
                      />
                    </span>
                  </Link>
                  {key !== categories.length - 1 && (
                    <span className="ml-3 sm:ml-6 lg:ml-8 opacity-30">/</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {/* Popular Topics */}

      {/* Latest Articles */}
      {latestArticles?.enable && (
        <section className="pb-16 sm:pb-24">
          <div className="container">
            <div className="col-12">
              <hr className="border-[#DBD8BD]" />
            </div>

            <div className="row mt-16 sm:mt-24">
              <div className="lg:col-4 mb-14 lg:mb-0">
                <div className="sticky top-12 lg:pr-12 text-center lg:text-start">
                  <p className="text-base uppercase font-secondary pl-4 relative after:absolute after:rounded-full -mt-1 after:content-[''] after:h-2 after:w-2 after:bg-primary after:left-0 after:top-2 w-fit mb-8 mx-auto md:mx-0">
                    {latestArticles?.title}
                  </p>
                  <h2 className="text-3xl md:text-4xl !leading-normal mb-4">
                    {latestArticles?.heading}
                  </h2>

                  {/* Description */}
                  <p className="text-[#4E4C3D] lg:mb-8 leading-relaxed font-extralight uppercase text-balance text-sm sm:text-base">
                    {latestArticles?.description}
                  </p>

                  {/* Button */}
                  <div className="hidden lg:inline-block">
                    <Link
                      className="button button-lg group animate-top-right"
                      href={latestArticles?.button?.link}
                    >
                      <span className="relative overflow-hidden transition-none [&>span]:block">
                        <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                          {latestArticles?.button?.label}
                        </span>
                        <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                          {latestArticles?.button?.label}
                        </span>
                      </span>
                      <span className="overflow-hidden leading-none -translate-y-[2px]">
                        {/* prettier-ignore */}
                        <svg className="inline-block animate-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:col-8">
                <div className="row gy-6">
                  {latestPosts.map((post, key) => (
                    <div key={key} className="md:col-6">
                      <PostThree post={post} imageHeight={true} />
                    </div>
                  ))}

                  <div className="col-12 block lg:hidden">
                    {/* Button */}
                    <Link
                      className="button button-lg group animate-top-right w-fit mx-auto"
                      href={latestArticles?.button?.link}
                    >
                      <span className="relative overflow-hidden transition-none [&>span]:block">
                        <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                          {latestArticles?.button?.label}
                        </span>
                        <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                          {latestArticles?.button?.label}
                        </span>
                      </span>
                      <span className="overflow-hidden leading-none -translate-y-[2px]">
                        {/* prettier-ignore */}
                        <svg className="inline-block animate-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Latest Articles */}

      {/* Popular Articles */}
      {popularArticles?.enable && (
        <section className={`py-16 sm:py-24 ${styles.darkBg}`}>
          <div className="container">
            <div className="row">
              <div className="lg:col-5 mb-14 lg:mb-0">
                <div className="sticky top-12 lg:pr-12 text-center md:text-start">
                  <p className="text-white text-base uppercase font-secondary pl-4 relative after:absolute after:rounded-full -mt-1 after:content-[''] after:h-2 after:w-2 after:bg-primary after:left-0 after:top-2 w-fit mb-8 mx-auto md:mx-0">
                    {popularArticles?.title}
                  </p>
                  <h2 className="text-3xl md:text-4xl text-white !leading-normal mb-4">
                    {popularArticles?.heading}
                  </h2>

                  {/* Description */}
                  <p className="text-[#9C9C9C] md:mb-8 leading-relaxed uppercase font-extralight text-balance">
                    {popularArticles?.description}
                  </p>

                  {/* Button */}
                  <div className="hidden md:inline-block">
                    <Link
                      className="button button-lg button-light group animate-top-right"
                      href={popularArticles?.button?.link}
                    >
                      <span className="relative overflow-hidden transition-none [&>span]:block">
                        <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                          {popularArticles?.button?.label}
                        </span>
                        <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                          {popularArticles?.button?.label}
                        </span>
                      </span>
                      <span className="overflow-hidden leading-none -translate-y-[2px]">
                        {/* prettier-ignore */}
                        <svg className="inline-block animate-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:col-7">
                {popularPosts.map((post, index) => (
                  <div
                    key={index}
                    className={`${
                      index != popularPosts.length - 1 ? "mb-16" : ""
                    } ${index % 2 == 0 ? "md:mr-20" : "md:ml-20"}`}
                  >
                    <PostBlack post={post} style="centered" color="black" />
                  </div>
                ))}
              </div>
              <div className="col-12 block md:hidden mt-16">
                {/* Button */}
                <Link
                  className="button button-lg button-light group animate-top-right w-fit mx-auto"
                  href={popularArticles?.button?.link}
                >
                  <span className="relative overflow-hidden transition-none [&>span]:block">
                    <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                      {popularArticles?.button?.label}
                    </span>
                    <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                      {popularArticles?.button?.label}
                    </span>
                  </span>
                  <span className="overflow-hidden leading-none -translate-y-[2px]">
                    {/* prettier-ignore */}
                    <svg className="inline-block animate-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Popular Articles */}

      {/* Trending Articles */}
      {trendingArticles?.enable && (
        <section className="pt-16 sm:pt-24 pb-6 sm:pb-12 bg-light">
          <div className="container">
            <div className="row justify-center">
              <div className="lg:col-10">
                <div className="row">
                  <div className="lg:col-6">
                    <div className="mb-14 lg:mb-20 text-center lg:text-start">
                      <p className="text-base uppercase font-secondary pl-4 relative after:absolute after:rounded-full -mt-1 after:content-[''] after:h-2 after:w-2 after:bg-primary after:left-0 after:top-2 w-fit mb-8 mx-auto lg:mx-0">
                        {trendingArticles?.title}
                      </p>
                      <h2 className="text-3xl md:text-4xl !leading-normal mb-4 text-balance">
                        {trendingArticles?.heading}
                      </h2>

                      {/* Description */}
                      <p className="text-[#4E4C3D] lg:mb-8 leading-relaxed font-extralight uppercase text-balance text-sm sm:text-base">
                        {trendingArticles?.description}
                      </p>

                      {/* Button */}
                      <div className="hidden lg:inline-block">
                        <Link
                          className="button button-lg group animate-top-right"
                          href={trendingArticles?.button?.link}
                        >
                          <span className="relative overflow-hidden transition-none [&>span]:block">
                            <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                              {trendingArticles?.button?.label}
                            </span>
                            <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                              {trendingArticles?.button?.label}
                            </span>
                          </span>
                          <span className="overflow-hidden leading-none -translate-y-[2px]">
                            {/* prettier-ignore */}
                            <svg className="inline-block animate-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </span>
                        </Link>
                      </div>
                    </div>

                    <div className="row">
                      {trendingPosts.length >= 2 && (
                        <div className="lg:col-8 sm:col-6 mx-auto mb-12">
                          <PostThree post={trendingPosts[1]} />
                        </div>
                      )}

                      {trendingPosts.length >= 2 && (
                        <div className="lg:col-10 sm:col-6 ml-auto mb-12">
                          <PostThree post={trendingPosts[3]} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-6">
                    <div className="row">
                      {trendingPosts.length >= 1 && (
                        <div className="lg:col-10 sm:col-6 ml-auto mb-12">
                          <PostThree post={trendingPosts[0]} />
                        </div>
                      )}
                      {trendingPosts.length >= 3 && (
                        <div className="lg:col-8 sm:col-6 ml-auto mb-12">
                          <PostThree post={trendingPosts[2]} />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-12 block lg:hidden mb-10">
                    {/* Button */}
                    <Link
                      className="button button-lg group animate-top-right w-fit mx-auto"
                      href={trendingArticles?.button?.link}
                    >
                      <span className="relative overflow-hidden transition-none [&>span]:block">
                        <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                          {trendingArticles?.button?.label}
                        </span>
                        <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                          {trendingArticles?.button?.label}
                        </span>
                      </span>
                      <span className="overflow-hidden leading-none -translate-y-[2px]">
                        {/* prettier-ignore */}
                        <svg className="inline-block animate-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Trending Articles */}

      {/* Post of the Week */}
      {postOfTheWeekSection?.enable && (
        <section className={`py-16 sm:py-24 overflow-clip ${styles.waveBg}`}>
          <div className="container">
            <div className="border-t pt-8 border-[#627669]">
              <div className="sm:flex justify-between">
                <h2 className="text-base uppercase font-secondary pl-4 relative after:absolute after:rounded-full -mt-1 after:content-[''] after:h-2 after:w-2 after:bg-primary after:left-0 after:top-2 text-white w-fit mx-auto sm:mx-0 mb-10 sm:mb-0">
                  {postOfTheWeekSection?.title}
                </h2>

                <Link
                  className="button group animate-top-right button-light w-fit hidden sm:flex"
                  href={postOfTheWeekSection?.button?.link}
                >
                  <span className="relative overflow-hidden transition-none [&>span]:block">
                    <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                      {postOfTheWeekSection?.button?.label}
                    </span>
                    <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                      {postOfTheWeekSection?.button?.label}
                    </span>
                  </span>
                  <span className="overflow-hidden leading-none -translate-y-[2px]">
                    {/* prettier-ignore */}
                    <svg className="inline-block animate-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="container mt-8">
            <article className="row g-4 lg:g-6 items-center">
              <div className="md:col-6">
                <div className="post-card post-category-top group relative has-line-link-white">
                  <div className="relative">
                    <span className="post-category text-white bg-secondary z-10">
                      <Link
                        href={`/category/${slugify(
                          postOfTheWeek.frontmatter.category
                        )}`}
                        className="transition duration-300 bg-secondary text-white border-white/30 hover:bg-white hover:text-secondary"
                      >
                        {postOfTheWeek.frontmatter.category}
                      </Link>

                      <div className="text-secondary corner left">
                        {/* prettier-ignore */}
                        <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z" fill="currentColor"></path></svg>
                      </div>
                      <div className="text-secondary corner bottom">
                        {/* prettier-ignore */}
                        <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z" fill="currentColor"></path></svg>
                      </div>
                    </span>
                    <Image
                      className="rounded-xl md:rounded-2xl h-[360px] w-full object-cover bg-white/10"
                      src={postOfTheWeek.frontmatter.image}
                      width={720}
                      height={600}
                      alt={postOfTheWeek.frontmatter.title}
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-6 text-center md:text-start">
                <div className="post-card post-category-top group relative has-line-link-white text-white">
                  <span className="text-sm flex justify-center md:justify-start gap-2 items-center mb-3 uppercase">
                    {/* prettier-ignore */}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6663 2.66677H11.333V2.0001C11.333 1.82329 11.2628 1.65372 11.1377 1.5287C11.0127 1.40367 10.8432 1.33344 10.6663 1.33344C10.4895 1.33344 10.32 1.40367 10.1949 1.5287C10.0699 1.65372 9.99967 1.82329 9.99967 2.0001V2.66677H5.99967V2.0001C5.99967 1.82329 5.92944 1.65372 5.80441 1.5287C5.67939 1.40367 5.50982 1.33344 5.33301 1.33344C5.1562 1.33344 4.98663 1.40367 4.8616 1.5287C4.73658 1.65372 4.66634 1.82329 4.66634 2.0001V2.66677H3.33301C2.80257 2.66677 2.29387 2.87748 1.91879 3.25255C1.54372 3.62763 1.33301 4.13633 1.33301 4.66677V12.6668C1.33301 13.1972 1.54372 13.7059 1.91879 14.081C2.29387 14.4561 2.80257 14.6668 3.33301 14.6668H12.6663C13.1968 14.6668 13.7055 14.4561 14.0806 14.081C14.4556 13.7059 14.6663 13.1972 14.6663 12.6668V4.66677C14.6663 4.13633 14.4556 3.62763 14.0806 3.25255C13.7055 2.87748 13.1968 2.66677 12.6663 2.66677ZM13.333 12.6668C13.333 12.8436 13.2628 13.0131 13.1377 13.1382C13.0127 13.2632 12.8432 13.3334 12.6663 13.3334H3.33301C3.1562 13.3334 2.98663 13.2632 2.8616 13.1382C2.73658 13.0131 2.66634 12.8436 2.66634 12.6668V8.0001H13.333V12.6668ZM13.333 6.66677H2.66634V4.66677C2.66634 4.48996 2.73658 4.32039 2.8616 4.19536C2.98663 4.07034 3.1562 4.0001 3.33301 4.0001H4.66634V4.66677C4.66634 4.84358 4.73658 5.01315 4.8616 5.13817C4.98663 5.2632 5.1562 5.33343 5.33301 5.33343C5.50982 5.33343 5.67939 5.2632 5.80441 5.13817C5.92944 5.01315 5.99967 4.84358 5.99967 4.66677V4.0001H9.99967V4.66677C9.99967 4.84358 10.0699 5.01315 10.1949 5.13817C10.32 5.2632 10.4895 5.33343 10.6663 5.33343C10.8432 5.33343 11.0127 5.2632 11.1377 5.13817C11.2628 5.01315 11.333 4.84358 11.333 4.66677V4.0001H12.6663C12.8432 4.0001 13.0127 4.07034 13.1377 4.19536C13.2628 4.32039 13.333 4.48996 13.333 4.66677V6.66677Z" fill="currentColor"/></svg>
                    {formatDate(postOfTheWeek.frontmatter.date)}
                  </span>

                  <h3 className="text-2xl text-white leading-relaxed">
                    <Link
                      href={postOfTheWeek.slug}
                      className="link-stretched line-link-el"
                    >
                      {postOfTheWeek.frontmatter.title}
                    </Link>
                  </h3>

                  <ul className="flex justify-center md:justify-start flex-wrap items-center gap-3 gap-y-1 uppercase text-sm my-6 text-[#BBC5BE]">
                    <li className="flex items-center">
                      <Image
                        src={postOfTheWeek.frontmatter.authorImage}
                        alt={`Author of the post - ${postOfTheWeek.frontmatter.author}`}
                        height={24}
                        width={24}
                        className="h-6 w-6 border border-[#ABABAB] rounded-full mr-2 bg-white/10"
                      />
                      {postOfTheWeek.frontmatter.author}
                    </li>
                    <li>•</li>
                    <li>{postOfTheWeek.frontmatter.readingTime}</li>
                  </ul>

                  <Link
                    href={postOfTheWeek.slug}
                    className="inline-block text-[#90A096] group-hover:text-white group-hover:rotate-45 transition duration-300"
                    aria-label={`Read More about ${postOfTheWeek.frontmatter.title}`}
                  >
                    {/* prettier-ignore */}
                    <span className="h-12 w-12 flex items-center justify-center text-white bg-white/20 rounded-full has-transition">
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99902 18.0009L18 1.99991M18 1.99991H3.59912M18 1.99991V16.4008" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </Link>
                </div>
              </div>
            </article>

            <div className="block sm:hidden mt-12">
              <Link
                className="button button-lg group animate-top-right button-light w-fit mx-auto"
                href={postOfTheWeekSection?.button?.link}
              >
                <span className="relative overflow-hidden transition-none [&>span]:block">
                  <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                    {postOfTheWeekSection?.button?.label}
                  </span>
                  <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                    {postOfTheWeekSection?.button?.label}
                  </span>
                </span>
                <span className="overflow-hidden leading-none -translate-y-[2px]">
                  {/* prettier-ignore */}
                  <svg className="inline-block animate-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
      )}
      {/* Post of the Week */}
    </Layout>
  );
};

export default Home;
