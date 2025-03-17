import Layout from "@/components/Layout";
import AllPosts from "@/data/posts.json";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog Posts - Archive",
  description: "All of Eyolo's blog posts by year",
};

const Archive = () => {
  const filterPostsByYear = (posts) => {
    const postsByYear = posts.reduce((acc, post) => {
      const year = new Date(post.frontmatter.date).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(post);
      return acc;
    }, {});

    return Object.keys(postsByYear)
      .sort((a, b) => b - a)
      .map((year) => ({
        year: parseInt(year),
        posts: postsByYear[year],
      }));
  };
  const postsByYear = filterPostsByYear(AllPosts);

  return (
    <Layout>
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container">
          <p className="flex items-center justify-center gap-x-2 mb-6 sm:mb-8">
            {/* prettier-ignore */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2h18" /><rect width="18" height="12" x="3" y="6" rx="2" /><path d="M3 22h18" /></svg>
            <span>Blog posts</span>
          </p>
          <h1 className="text-4xl md:text-5x text-white font-normal text-balance leading-tight capitalize relative z-10 mix-blend-difference text-center">
            <span className="inline-block bg-white w-6 md:w-10 h-px align-middle mr-4 md:mr-6"></span>
            Archive
            <span className="inline-block bg-white w-6 md:w-10 h-px align-middle ml-4 md:ml-6"></span>
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          {postsByYear.map(({ year, posts }) => (
            <div key={year} className="mb-16 sm:mb-24 last:mb-0">
              <h2 className="text-2xl sm:text-3xl mb-10">Post’s From {year}</h2>
              <div className="row gy-4 sm:gy-5 gx-6">
                {posts.map((post, index) => (
                  <div className="lg:col-6" key={index}>
                    <div className="border-b border-border pb-3 sm:pb-4 group relative has-line-link h-full hover:bg-gradient-to-t from-white/20 to-transparent">
                      <span className="text-sm flex gap-2 items-center mb-3 uppercase text-[#464536]">
                        {/* prettier-ignore */}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6663 2.66677H11.333V2.0001C11.333 1.82329 11.2628 1.65372 11.1377 1.5287C11.0127 1.40367 10.8432 1.33344 10.6663 1.33344C10.4895 1.33344 10.32 1.40367 10.1949 1.5287C10.0699 1.65372 9.99967 1.82329 9.99967 2.0001V2.66677H5.99967V2.0001C5.99967 1.82329 5.92944 1.65372 5.80441 1.5287C5.67939 1.40367 5.50982 1.33344 5.33301 1.33344C5.1562 1.33344 4.98663 1.40367 4.8616 1.5287C4.73658 1.65372 4.66634 1.82329 4.66634 2.0001V2.66677H3.33301C2.80257 2.66677 2.29387 2.87748 1.91879 3.25255C1.54372 3.62763 1.33301 4.13633 1.33301 4.66677V12.6668C1.33301 13.1972 1.54372 13.7059 1.91879 14.081C2.29387 14.4561 2.80257 14.6668 3.33301 14.6668H12.6663C13.1968 14.6668 13.7055 14.4561 14.0806 14.081C14.4556 13.7059 14.6663 13.1972 14.6663 12.6668V4.66677C14.6663 4.13633 14.4556 3.62763 14.0806 3.25255C13.7055 2.87748 13.1968 2.66677 12.6663 2.66677ZM13.333 12.6668C13.333 12.8436 13.2628 13.0131 13.1377 13.1382C13.0127 13.2632 12.8432 13.3334 12.6663 13.3334H3.33301C3.1562 13.3334 2.98663 13.2632 2.8616 13.1382C2.73658 13.0131 2.66634 12.8436 2.66634 12.6668V8.0001H13.333V12.6668ZM13.333 6.66677H2.66634V4.66677C2.66634 4.48996 2.73658 4.32039 2.8616 4.19536C2.98663 4.07034 3.1562 4.0001 3.33301 4.0001H4.66634V4.66677C4.66634 4.84358 4.73658 5.01315 4.8616 5.13817C4.98663 5.2632 5.1562 5.33343 5.33301 5.33343C5.50982 5.33343 5.67939 5.2632 5.80441 5.13817C5.92944 5.01315 5.99967 4.84358 5.99967 4.66677V4.0001H9.99967V4.66677C9.99967 4.84358 10.0699 5.01315 10.1949 5.13817C10.32 5.2632 10.4895 5.33343 10.6663 5.33343C10.8432 5.33343 11.0127 5.2632 11.1377 5.13817C11.2628 5.01315 11.333 4.84358 11.333 4.66677V4.0001H12.6663C12.8432 4.0001 13.0127 4.07034 13.1377 4.19536C13.2628 4.32039 13.333 4.48996 13.333 4.66677V6.66677Z" fill="currentColor" /></svg>
                        {formatDate(post.frontmatter.date)}
                      </span>

                      <h3 className="text-xl text-dark leading-relaxed mb-4 line-link">
                        <Link
                          href={`/${post.slug}`}
                          className="link-stretched line-link-el"
                        >
                          {post.frontmatter.title}
                        </Link>
                      </h3>

                      <ul className="flex flex-wrap items-center gap-3 gap-y-1 mb-6 uppercase text-sm text-[#464536]">
                        <li className="flex items-center">
                          <Image
                            src={post.frontmatter.authorImage}
                            alt={`Author of the post - ${post.frontmatter.author}`}
                            height={24}
                            width={24}
                            className="h-6 w-6 border border-[#ABABAB] rounded-full mr-2"
                          />
                          {post.frontmatter.author}
                        </li>
                        <li>•</li>
                        <li>{post.frontmatter.readingTime}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Archive;
