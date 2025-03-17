import MDXcomponents from "@/components/MDXcomponents";
import SectionHeader from "@/components/essential/SectionHeader";
import Header from "@/components/home-3/Header";
import LayoutThree from "@/components/home-3/Layout";
import allAuthors from "@/data/author.json";
import aboutData from "@/data/pages/about.json";
import styles from "@/styles/modules/Style.module.scss";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: aboutData.frontmatter.title,
  description: aboutData.frontmatter.description,
};

const About = () => {
  const { title, banner, about_info, authors } = aboutData.frontmatter;

  return (
    <LayoutThree>
      <Header cateory={false} />

      <div
        className={`${styles.waveBg} px-3 md:px-10 xl:px-1 py-24 text-center text-white`}
      >
        <div className="container relative">
          <div className="relative w-full max-w-4xl mx-auto z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-normal text-balance !leading-snug capitalize relative z-10 mix-blend-difference">
              {banner.title.first_half}
              {banner.title.divider && (
                <span className="inline-block bg-white w-12 md:w-24 h-px mx-4 md:mx-8 align-middle"></span>
              )}
              {banner.title.second_half}
            </h1>

            {banner.image_01 && (
              <Image
                src={banner.image_01}
                alt="about image"
                height={112}
                width={112}
                className="aspect-square w-16 md:w-28 rounded-md absolute -top-12 left-0 sm:left-16 -z-10 bg-dark/5"
              />
            )}

            {banner.image_02 && (
              <Image
                src={banner.image_02}
                alt="about image"
                height={105}
                width={177}
                className="aspect-video rounded-md w-20 md:w-32 absolute -bottom-6 md:-bottom-10 right-8 -z-10 opacity-30 bg-dark/5"
              />
            )}
          </div>
          <p className="mt-8 font-light w-full max-w-lg mx-auto">
            {banner.description}
          </p>

          <div className="bg-[#F6F5ED] border-8 border-secondary w-28 rounded-full p-3 text-[15px] font-bold absolute -bottom-32 lg:-bottom-4 left-0 scale-75 md:scale-100">
            {/* prettier-ignore */}
            <svg className="uppercase" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path id="circlePath" d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0" fill="none" />
              <text>
                <textPath href="#circlePath" className="font-light tracking-[0.07em] text-sm">
                  — scroll down — read more
                </textPath>
              </text>
            </svg>

            {/* prettier-ignore */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1C9 0.447715 8.55228 -2.41412e-08 8 0C7.44772 2.41412e-08 7 0.447715 7 1L9 1ZM7.29289 17.7071C7.68342 18.0976 8.31658 18.0976 8.70711 17.7071L15.0711 11.3431C15.4616 10.9526 15.4616 10.3195 15.0711 9.92893C14.6805 9.53841 14.0474 9.53841 13.6569 9.92893L8 15.5858L2.34315 9.92893C1.95262 9.53841 1.31946 9.53841 0.928933 9.92893C0.538408 10.3195 0.538408 10.9526 0.928933 11.3431L7.29289 17.7071ZM7 1L7 17L9 17L9 1L7 1Z" fill="currentColor"/></svg>
          </div>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-8">
              <h2 className="text-3xl sm:text-4xl mb-8 !leading-snug">
                {about_info.title}
              </h2>
            </div>
          </div>
          <div className="row gy-4 justify-center">
            <div className="lg:col-3">
              <Image
                src={about_info.image}
                alt="about image"
                height={290}
                width={245}
                className="rounded-md relative -z-10 -mt-14 bg-dark/10"
              />
            </div>
            <div className="lg:col-7">
              <div className="prose content max-w-none">
                <MDXRemote
                  source={aboutData.content}
                  components={MDXcomponents}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {authors.enable && (
        <section className="pb-16 sm:pb-24 bg-light">
          <SectionHeader
            title={authors.title}
            buttonLabel={authors.button.label}
            buttonLink={authors.button.link}
            dark={false}
          />
          <div className="container">
            <div className="row gy-5 mt-14">
              {allAuthors.map((author, index) => (
                <div key={index} className="sm:col-6 lg:col-3">
                  <Link
                    href={`/author/${author.slug}`}
                    className="text-center group"
                  >
                    <Image
                      src={author.frontmatter.image}
                      alt={author.frontmatter.title}
                      height={200}
                      width={200}
                      className="rounded-full h-32 w-32 mx-auto bg-dark/10"
                    />

                    <div className="relative">
                      <h4 className="text-2xl font-secondary mt-5 mb-2 has-transition group-hover:-translate-y-3 group-hover:opacity-10">
                        {author.frontmatter.title}
                      </h4>
                      <p className="font-light text-[#777777] has-transition group-hover:-translate-y-3 group-hover:opacity-10">
                        {author.frontmatter.subtitle}
                      </p>
                      <span className="inline-flex items-center gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 has-transition mt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-10">
                        View Posts
                        {/* prettier-ignore */}
                        <svg className="relative top-[2px]" width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33008 17.4023L17.3301 1.40234M17.3301 1.40234H2.93008M17.3301 1.40234V15.8023" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
              {authors.join_team.enable && (
                <div className="sm:col-6 lg:col-3">
                  <Link
                    href={authors.join_team.join_url}
                    className="text-center group"
                  >
                    <Image
                      src={authors.join_team.image}
                      alt="join team"
                      height={200}
                      width={200}
                      className="rounded-full sm:h-32 h-20 sm:w-32 w-20 mx-auto bg-dark/10"
                    />

                    <div className="relative">
                      <h4 className="text-2xl font-secondary mt-5 mb-2 has-transition group-hover:-translate-y-3 group-hover:opacity-10">
                        {authors.join_team.title}
                      </h4>
                      <p className="font-light text-[#777777] has-transition group-hover:-translate-y-3 group-hover:opacity-10">
                        {authors.join_team.subtitle}
                      </p>
                      <span className="inline-flex items-center gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 has-transition mt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-10">
                        Join Now
                        {/* prettier-ignore */}
                        <svg className="relative top-[2px]" width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33008 17.4023L17.3301 1.40234M17.3301 1.40234H2.93008M17.3301 1.40234V15.8023" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </LayoutThree>
  );
};

export default About;
