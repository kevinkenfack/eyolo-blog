import Sidebar from "@/components/Sidebar";
import SectionHeader from "@/components/essential/SectionHeader";
import Banner from "@/components/home-3/Banner";
import Header from "@/components/home-3/Header";
import LayoutThree from "@/components/home-3/Layout";
import PostFour from "@/components/posts/Post-4";
import PostBlack from "@/components/posts/PostBlack";
import homepageData from "@/data/pages/_index-3.json";
import allPosts from "@/data/posts.json";
import { popularCategories } from "@/libs/functions/categories";
import { isPostInArray } from "@/utils/isPostInArray";
import { slugify } from "@/utils/slugify";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  // homepage data
  const {
    headerCategories,
    banner,
    popularArticles,
    sidebar,
    exploreTopics,
    latestArticles,
  } = homepageData.frontmatter || {};

  // All Categories
  const categories = popularCategories(allPosts) || [];

  // First featured post
  const [featuredPost] =
    allPosts.filter((post) => post.frontmatter.featured) || [];

  // Top posts
  const topPosts =
    allPosts
      .filter(
        (post) => post.frontmatter.trending && post.slug !== featuredPost.slug
      )
      .slice(0, 4) || [];

  // Latest posts
  const latestPosts = allPosts.slice(0, 9) || [];

  // Popular posts
  const popularPosts =
    allPosts
      .filter(
        (post) =>
          !isPostInArray(post, topPosts) &&
          post.slug !== featuredPost.slug &&
          post.frontmatter.trending &&
          post.frontmatter.featured
      )
      .slice(0, 6) || [];

  return (
    <LayoutThree>
      <Header hasCategory={headerCategories.enable} categories={categories} />
      <Banner banner={banner} featuredPost={featuredPost} topPosts={topPosts} />

      {/* Popular Articles with Sidebar */}
      {popularArticles?.enable && (
        <section className="py-16 sm:py-24">
          <div className="container overflow-clip">
            <div className="row gx-5">
              {/* Popular Articles */}
              <div className="md:col-7 lg:col-8 mb-16 lg:mb-0">
                <div className="border-t pt-8 border-[#DBD8BD] mb-10">
                  <div className="flex justify-between items-center sm:items-start">
                    <h2 className="text-base uppercase font-secondary pl-4 relative after:absolute after:rounded-full -mt-1 after:content-[''] after:h-2 after:w-2 after:bg-primary after:left-0 after:top-2">
                      {popularArticles.title}
                    </h2>

                    {/* button */}
                    <div className="hidden md:inline-block">
                      <Link
                        className="button group animate-top-right"
                        href="/blog?filter=popular"
                      >
                        <span className="relative overflow-hidden transition-none [&>span]:block">
                          <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                            All Posts
                          </span>
                          <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                            All Posts
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

                <div className="row gy-6">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="sm:col-6 md:col-12 lg:col-6">
                      <PostFour post={post} />
                    </div>
                  ))}

                  <div className="col-12 block md:hidden mt-10">
                    {/* Button */}
                    <Link
                      className="button button-lg group animate-top-right w-fit"
                      href="/blog?filter=popular"
                    >
                      <span className="relative overflow-hidden transition-none [&>span]:block">
                        <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                          All Posts
                        </span>
                        <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                          All Posts
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
              {/* Popular Articles */}

              {/* Sidebar */}
              <div className="md:col-5 lg:col-4">
                <Sidebar sidebar={sidebar} />
              </div>
              {/* Sidebar */}
            </div>
          </div>
        </section>
      )}
      {/* Popular Articles with Sidebar */}

      {/* Explore topics */}
      {exploreTopics?.enable && (
        <section className="pb-16 sm:pb-24 bg-light">
          <SectionHeader
            title={exploreTopics.title}
            buttonLabel={exploreTopics.button.label}
            buttonLink={exploreTopics.button.link}
            dark={false}
          />
          <div className="container mt-10 overflow-clip">
            <div className="row row-cols-3 sm:row-cols-4 lg:row-cols-6 justify-center gx-2 md:gx-4 gy-3 sm:gy-4">
              {categories.slice(0, 6).map((item, key) => (
                <div className="col" key={key}>
                  <Link
                    href={`/category/${slugify(item.name)}`}
                    className="group"
                  >
                    <div className="overflow-hidden rounded-md sm:rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={245}
                        className="rounded-md sm:rounded-lg bg-white/40 aspect-[5/6] object-cover transition duration-500 group-hover:brightness-75 group-hover:scale-110 group-hover:rotate-3"
                      />
                    </div>
                    <p className="font-primary text-center mt-4 text-sm sm:text-base md:text-xl overflow-hidden text-ellipsis capitalize transition duration-500 group-hover:opacity-50 tracking-wide">
                      {item.name}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Explore topics */}

      {/* Latest Articles */}
      {latestArticles?.enable && (
        <section className="py-16 sm:py-24 bg-secondary">
          <div className="container">
            <div className="border-t pt-8 border-[#627669]">
              <div className="flex justify-between items-center sm:items-start">
                <h2 className="text-base uppercase font-secondary pl-4 relative after:absolute after:rounded-full -mt-1 after:content-[''] after:h-2 after:w-2 after:bg-primary after:left-0 after:top-2 text-white">
                  {latestArticles.title}
                </h2>

                <Link
                  className="button group animate-top-right button-light"
                  href={latestArticles.button.link}
                >
                  <span className="relative overflow-hidden transition-none [&>span]:block">
                    <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                      <span className="hidden sm:inline">
                        {latestArticles.button.label}
                      </span>
                      <span className="inline sm:hidden">All</span>
                    </span>
                    <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                      <span className="hidden sm:inline">
                        {latestArticles.button.label}
                      </span>
                      <span className="inline sm:hidden">All</span>
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
          <div className="container mt-10">
            <div className="row gy-6">
              {latestPosts.map((post, index) => (
                <div key={index} className="md:col-6 lg:col-4">
                  <PostBlack post={post} color="secondary" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Latest Articles */}
    </LayoutThree>
  );
};

export default Home;
