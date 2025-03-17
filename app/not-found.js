import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h1 className="md:text-5xl text-3xl text-white font-normal text-balance leading-tight capitalize relative z-10 mix-blend-difference mb-0 md:mb-8">
            <span className="inline-block bg-white w-6 md:w-16 h-px align-middle"></span>{" "}
            Page not found
          </h1>

          <div className="text-[120px] sm:text-[200px] flex gap-x-7 items-center justify-center scale-75 md:scale-100">
            <span>4</span>
            <div className="relative w-[120px] sm:w-[188px] -mb-8">
              <Image
                className="rounded-lg max-w-24 sm:max-w-32 absolute z-30 -top-6 left-6 sm:-top-[60px] sm:left-[60px]"
                src="/images/404/01.jpg"
                height={128}
                width={162}
                alt="post image"
              />
              <Image
                className="rounded-lg max-w-24 sm:max-w-32 absolute z-20 -top-4 left-4 sm:-top-10 sm:left-10"
                src="/images/404/02.jpg"
                height={128}
                width={162}
                alt="post image"
              />
              <Image
                className="rounded-lg max-w-24 sm:max-w-32 absolute z-10 -top-2 left-2 sm:-top-5 sm:left-5"
                src="/images/404/03.jpg"
                height={128}
                width={162}
                alt="post image"
              />
              <Image
                className="rounded-lg max-w-24 sm:max-w-32 relative z-0"
                src="/images/404/04.jpg"
                height={128}
                width={162}
                alt="post image"
              />
            </div>
            <span>4</span>
          </div>

          <p className="text-balance text-[#4F4C2F]">
            {/* eslint-disable react/no-unescaped-entities */}
            Sorry, that page can't be found. Maybe the page have moved.
          </p>

          <Link
            href="/"
            className="inline-flex flex-col items-center justify-center bg-dark hover:bg-primary transition-all rounded-full h-20 w-20 text-white mt-10 relative group"
          >
            <span className="has-transition top-2/3 -translate-y-1/2 absolute scale-75 opacity-0 group-hover:top-1/2 group-hover:opacity-100 group-hover:scale-100 text-sm">
              Home
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="has-transition group-hover:opacity-0 group-hover:-translate-y-6 group-hover:translate-x-6 group-hover:scale-75"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
