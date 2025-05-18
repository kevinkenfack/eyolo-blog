import MDXcomponents from "@/app/components/MDXcomponents";
import ScrollProgressBar from "@/app/components/blog/ScrollProgressBar";
import SharePost from "@/app/components/blog/SharePost";
import TableOfContents from "@/app/components/blog/TableOfContents";
import Layout from "@/components/Layout";
import allVideos from "@/data/video-posts.json";
import { formatDate } from "@/libs/utils/formatDate";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata(props) {
  const params = await props.params;
  const slug = params.slug;
  const currentPost = allVideos.find((post) => post.slug === slug);

  if (!currentPost) {
    return notFound();
  }

  const { title, desscription, image } = currentPost.frontmatter;

  return {
    title: title,
    description: desscription,
    openGraph: {
      images: [{ url: image }],
    },
  };
}

const VideoPost = async props => {
  const params = await props.params;
  const slug = params.slug;
  const currentPost = allVideos.find((post) => post.slug === slug);

  if (!currentPost) {
    return notFound();
  }

  const { title, description, image, date, adBanner } = currentPost.frontmatter;

  const content = await currentPost.content;

  return (
    <Layout>
      <ScrollProgressBar title={title} />

      <div className="py-16 md:py-24 overflow-clip">
        <div className="container">
          <div className="row g-6">
            <div className="lg:col-8 xl:col-9">
              <div id="post-header">
                <div className="relative">
                  <Image
                    className="rounded-xl w-full h-[400px] xl:h-[500px] object-cover bg-dark/10"
                    src={image}
                    height={500}
                    width={1320}
                    alt={title}
                  />

                  {/* prettier-ignore */}
                  <svg className="absolute top-0 right-[107px] sm:right-[83px] lg:right-[63px] z-20 rotate-[90deg] w-5 h-5 left text-light" width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z" fill="currentColor"></path></svg>
                  {/* prettier-ignore */}
                  <svg className="absolute hidden sm:block top-[63px] right-0 z-20 rotate-[90deg] w-5 h-5 left text-light" width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z" fill="currentColor"></path></svg>
                  {/* prettier-ignore */}
                  <svg className="absolute hidden sm:block lg:hidden top-[41.5px] right-px z-20 rotate-[185deg] scale-[118%] w-5 h-5 left text-light" width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M101 0H0V101H1C1 45.7715 45.7715 1 101 1V0Z" fill="currentColor"></path></svg>

                  <div className="bg-[#F6F5ED] border-8 border-light w-24 sm:w-[6.5rem] absolute -top-10 right-3 sm:-right-5 lg:-right-10 rounded-full p-3 text-[15px] font-bold">
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

              <h1 className="text-2xl sm:text-3xl leading-normal mt-12 lg:mt-16 mb-2">
                {title}
              </h1>
              <p className="text-balance mb-8 !leading-relaxed font-light">
                {description}
              </p>

              <div className="block lg:hidden mt-8">
                <TableOfContents />
              </div>

              <div id="post-content" className="prose content max-w-none mt-8">
                <MDXRemote source={content} components={MDXcomponents} />

                <p className="text-sm prose content mt-12 lg:mt-16">
                  Published: {formatDate(date)}
                </p>
              </div>
            </div>

            <div className="lg:col-4 xl:col-3">
              <hr className="border-border block lg:hidden mb-14" />
              <div className="sticky top-16">
                {adBanner.enable && (
                  <div className="relative rounded-xl overflow-clip mb-8">
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-[#00000000] to-[#000000] z-30 text-white px-5 py-6 flex flex-col justify-end">
                      <p className="text-2xl font-primary !leading-normal mb-3 underline underline-offset-4">
                        {adBanner.title}
                      </p>
                      {/* link */}
                      <Link
                        className="button button-lg group animate-top-right w-full mt-4 justify-center bg-primary text-white border-primary hover:bg-white hover:text-black hover:border-white"
                        href={adBanner.button.link}
                      >
                        <span className="relative overflow-hidden transition-none group-hover:[&>span]:transition-transform group-hover:[&>span]:duration-500 [&>span]:block">
                          <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                            {adBanner.button.label}
                          </span>
                          <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                            {adBanner.button.label}
                          </span>
                        </span>
                        <span className="overflow-hidden leading-none -translate-y-[2px]">
                          {/* prettier-ignore */}
                          <svg className="inline-block animate-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </span>
                      </Link>
                    </div>
                    <Image
                      src={adBanner.image}
                      alt={adBanner.title}
                      height={480}
                      width={414}
                      className="object-cover w-full max-h-96 lg:max-h-max"
                    />
                  </div>
                )}

                <div className="hidden lg:block">
                  <TableOfContents />
                </div>
                <SharePost title={title} slug={currentPost.slug} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoPost;
