import PostThree from "@/app/components/posts/Post-3";
import Layout from "@/components/Layout";
import MDXcomponents from "@/components/MDXcomponents";
import allAuthors from "@/data/author.json";
import allPosts from "@/data/posts.json";
import { slugify } from "@/libs/utils/slugify";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata(props) {
  const params = await props.params;
  const slug = params.slug;
  const currentAuthor = allAuthors.find((author) => author.slug === slug);

  if (!currentAuthor) {
    return notFound();
  }

  const { title, subtitle, image } = currentAuthor.frontmatter;

  return {
    title: `${title} | Author`,
    description: `${title} is a ${subtitle}`,
    openGraph: {
      images: [{ url: image }],
    },
  };
}

const AuthorSingle = async props => {
  const params = await props.params;
  const slug = params.slug;
  const currentAuthor = allAuthors.find((author) => author.slug === slug);

  if (!currentAuthor) {
    return notFound();
  }

  const { title, subtitle, image } = currentAuthor.frontmatter;

  return (
    <Layout>
      <section className="py-16 md:py-24 border-b border-border overflow-clip">
        <div className="container">
          <div className="row justify-center gy-4">
            <div className="col-12">
              <Image
                src={image}
                alt={title}
                height={128}
                width={128}
                className="rounded-lg sm:h-32 h-28 sm:w-32 w-28 mx-auto bg-white/10 mb-8 sm:mb-12"
              />
              <h1 className="text-4xl md:text-5xl text-white font-normal text-balance leading-tight capitalize relative z-10 mix-blend-difference text-center">
                <span className="inline-block bg-white w-6 md:w-10 h-px align-middle mr-4 md:mr-6"></span>
                {title}
                <span className="inline-block bg-white w-6 md:w-10 h-px align-middle ml-4 md:ml-6"></span>
              </h1>
              <p className="flex items-center justify-center gap-x-2 mt-5">
                <span>{subtitle}</span>
              </p>
            </div>

            <div className="md:col-7">
              <div className="prose content max-w-none text-center">
                <MDXRemote
                  source={currentAuthor.content}
                  components={MDXcomponents}
                />
              </div>
            </div>

            <div className="md:col-12">
              <hr className="h-px border-dark/10 my-4 md:my-8 max-w-[200px] mx-auto" />
            </div>

            <div className="md:col-12 -mb-4">
              <div className="row g-6">
                {allPosts
                  .filter((post) => slugify(post.frontmatter.author) === slug)
                  .map((post, key) => (
                    <div key={key} className="md:col-6 lg:col-4 mb-4">
                      <PostThree post={post} imageHeight={true} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AuthorSingle;
