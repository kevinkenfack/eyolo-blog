import Layout from "@/components/Layout";
import MDXcomponents from "@/components/MDXcomponents";
import termsData from "@/data/pages/terms.json";
import { MDXRemote } from "next-mdx-remote/rsc";

export const metadata = {
  title: termsData.frontmatter.title,
  description: termsData.frontmatter.description,
};

const Privacy = () => {
  const { title, subtitle } = termsData.frontmatter;

  return (
    <Layout>
      <section className="py-16 md:py-24 border-b border-border overflow-clip">
        <div className="container">
          <div className="row items-end gy-4">
            <div className="md:col-12">
              <p className="flex items-center justify-center gap-x-2 mb-6 sm:mb-8">
                <span>{subtitle}</span>
              </p>
              <h1 className="text-4xl md:text-5x text-white font-normal text-balance leading-tight capitalize relative z-10 mix-blend-difference text-center">
                <span className="inline-block bg-white w-6 md:w-10 h-px align-middle mr-4 md:mr-6"></span>
                {title}
                <span className="inline-block bg-white w-6 md:w-10 h-px align-middle ml-4 md:ml-6"></span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-clip py-16 sm:py-20">
        <div className="container">
          <div className="row">
            <div className="lg:col-10 mx-auto">
              <div className="prose content max-w-none [&_a:first-child_.heading]:mt-0">
                <MDXRemote
                  source={termsData.content}
                  components={MDXcomponents}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
