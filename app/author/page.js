import Layout from "@/components/Layout";
import allAuthors from "@/data/author.json";
import aboutData from "@/data/pages/about.json";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "All Authors",
  description: "All of Eyolo's Authors",
};

const Author = () => {
  const { authors } = aboutData.frontmatter;

  return (
    <Layout>
      <section className="py-16 md:py-24 border-b border-border overflow-clip">
        <div className="container">
          <div className="row items-end gy-4">
            <div className="md:col-12">
              <p className="flex items-center justify-center gap-x-2 mb-6 sm:mb-8">
                <span>Explorer All</span>
              </p>
              <h1 className="text-4xl md:text-5x text-white font-normal text-balance leading-tight capitalize relative z-10 mix-blend-difference text-center">
                <span className="inline-block bg-white w-6 md:w-10 h-px align-middle mr-4 md:mr-6"></span>
                Author
                <span className="inline-block bg-white w-6 md:w-10 h-px align-middle ml-4 md:ml-6"></span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light overflow-clip mb-16 sm:mb-24">
        <div className="container">
          <div className="row justify-center">
            {allAuthors.map((author, key) => (
              <div
                key={key}
                className="sm:col-6 md:col-4 lg:col-3 border-l border-border border-r border-b -ml-px"
              >
                <Link
                  href={`/author/${author.slug}`}
                  className="text-center group py-10 sm:py-16 block"
                >
                  <div className="relative">
                    <Image
                      src={author.frontmatter.image}
                      alt={author.frontmatter.title}
                      height={128}
                      width={128}
                      className="rounded-full sm:h-32 h-20 sm:w-32 w-20 mx-auto bg-white/10 transition-all group-hover:brightness-50 object-cover"
                    />

                    <span className="absolute top-1/2 left-[47%] rotate-[36deg] group-hover:left-1/2 group-hover:rotate-45 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible text-white">
                      {/* prettier-ignore */}
                      <svg className="relative top-[2px] h-3 sm:h-4 w-3 sm:w-4" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33008 17.4023L17.3301 1.40234M17.3301 1.40234H2.93008M17.3301 1.40234V15.8023" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-secondary mt-5 mb-2">
                    {author.frontmatter.title}
                  </h4>
                  <p className="text-sm sm:text-base font-light text-dark">
                    {author.frontmatter.subtitle}
                  </p>
                </Link>
              </div>
            ))}

            {authors.join_team.enable && (
              <div className="sm:col-6 md:col-4 lg:col-3 border-l border-border border-r border-b -ml-px">
                <Link
                  href={authors.join_team.join_url}
                  className="text-center group py-10 sm:py-16 block"
                >
                  <div className="relative">
                    <Image
                      src={authors.join_team.image}
                      alt="join team"
                      height={128}
                      width={128}
                      className="rounded-full sm:h-32 h-20 sm:w-32 w-20 mx-auto bg-white/10 transition-all group-hover:brightness-50 object-cover"
                    />

                    <span className="absolute top-1/2 left-[47%] rotate-[36deg] group-hover:left-1/2 group-hover:rotate-45 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible text-white">
                      {/* prettier-ignore */}
                      <svg className="relative top-[2px] h-3 sm:h-4 w-3 sm:w-4" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33008 17.4023L17.3301 1.40234M17.3301 1.40234H2.93008M17.3301 1.40234V15.8023" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-secondary mt-5 mb-2">
                    {authors.join_team.title}
                  </h4>
                  <p className="text-sm sm:text-base font-light text-dark">
                    {authors.join_team.subtitle}
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
        <hr className="h-px border-border -mt-px" />
      </section>
    </Layout>
  );
};

export default Author;
