import Layout from "@/components/Layout";
import SectionHeader from "@/components/essential/SectionHeader";
import Banner from "@/components/home-2/Banner";
import PostTwo from "@/components/posts/Post-2";
import PostBlack from "@/components/posts/PostBlack";
import homepageData from "@/data/pages/_index-2.json";
import allPosts from "@/data/posts.json";
import { popularCategories } from "@/functions/categories";
import { isPostInArray } from "@/libs/utils/isPostInArray";
import { slugify } from "@/libs/utils/slugify";
import styles from "@/styles/modules/Style.module.scss";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  // homepage data
  const { banner, popularTopics, latestArticles, popularArticles } =
    homepageData.frontmatter || {};

  // All Categories with image
  const categories = popularCategories(allPosts).slice(0, 7) || [];

  // Latest posts
  const latestPosts = allPosts.slice(0, 6) || [];
  const generatePattern = (length) => {
    const pattern = [];
    for (let i = 0; i < length; i++) {
      const section = Math.floor(i / 4);
      const position = i % 4;
      if (position === 0 || position === 1) {
        pattern.push(section * 4 + position * 3);
      }
    }
    return pattern;
  };
  const latestPostsPattern = generatePattern(latestPosts.length);

  // Trending posts
  const trendingPosts =
    allPosts.filter((post) => post.frontmatter.trending).slice(0, 4) || [];

  // Popular posts
  const popularPosts =
    allPosts
      .filter(
        (post) =>
          !isPostInArray(post, trendingPosts) &&
          post.frontmatter.trending &&
          post.frontmatter.featured
      )
      .slice(0, 4) || [];

  return (
    <Layout>
      <Banner trendingPosts={trendingPosts} banner={banner} />

      {/* Popular Topics */}
      {popularTopics?.enable && (
        <section className="py-16 sm:py-24">
          <SectionHeader
            title={popularTopics.title}
            buttonLabel={popularTopics.button.label}
            buttonLink={popularTopics.button.link}
            dark={false}
          />

          <div className="container mt-12">
            <ul className="text-center [&>li]:text-3xl md:[&>li]:text-[2.75rem] [&>li]:my-6 md:[&>li]:my-10 font-primary text-[#9A977A]">
              {categories.map((category, key) => (
                <li key={key} className="relative last:mb-0">
                  <Link
                    href={`/category/${slugify(category.name)}`}
                    className="inline-block group transition-all duration-300"
                  >
                    <span className="transition-all duration-100 relative z-30 group-hover:text-secondary group-hover:drop-shadow-lg capitalize flex items-center gap-x-4">
                      {category.name}
                      {/* prettier-ignore */}
                      <svg className="h-4 md:h-7 w-4 md:w-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 26.0001L26 2.00012M26 2.00012H4.4M26 2.00012V23.6001" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span
                      className={`absolute max-w-32 lg:max-w-52 top-1/2 opacity-0 invisible scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:scale-100 overflow-hidden rounded-lg z-20 pointer-events-none ${
                        key % 2 == 0 ? "left-[10%]" : "right-[10%]"
                      } ${
                        key == 0 || key == 1
                          ? "translate-y-0"
                          : "-translate-y-1/2"
                      } ${
                        key == categories.length || key == categories.length - 1
                          ? "-translate-y-full"
                          : "-translate-y-1/2"
                      }`}
                    >
                      <Image
                        height="130"
                        width="250"
                        className="object-cover h-full w-full scale-150 group-hover:scale-100 transition-all duration-300"
                        src={category.image}
                        alt={category.name}
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {/* Popular Topics */}

      {/* Latest Articles */}
      {latestArticles?.enable && (
        <section className={`py-16 sm:py-24 ${styles.darkBg}`}>
          <SectionHeader
            title={latestArticles.title}
            buttonLabel={latestArticles.button.label}
            buttonLink={latestArticles.button.link}
            dark={true}
          />

          <div className="container sm:mt-6 md:mt-8 overflow-clip">
            <div className="row g-6 justify-center mt-0">
              {latestPosts.map((post, index) => (
                <div
                  key={index}
                  className={`${
                    latestPostsPattern.includes(index) ? "lg:col-5" : "lg:col-7"
                  }`}
                >
                  <PostBlack post={post} color="black" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Latest Articles */}

      {/* Popular Articles */}
      {popularArticles?.enable && (
        <section className="py-16 sm:py-24">
          <SectionHeader
            title={popularArticles.title}
            buttonLabel={popularArticles.button.label}
            buttonLink={popularArticles.button.link}
            dark={false}
          />

          <div className="container sm:mt-6 md:mt-8 overflow-clip">
            <div className="row gx-5 gy-6 mt-0">
              {popularPosts.map((post, index) => (
                <div className="xl:col-3 lg:col-4 sm:col-6" key={index}>
                  <PostTwo post={post} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Popular Articles */}
    </Layout>
  );
};

export default Home;
