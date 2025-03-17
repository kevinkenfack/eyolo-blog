import Layout from "@/components/Layout";
import allPosts from "@/data/posts.json";
import { popularCategories } from "@/functions/categories";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "All Blog Category",
  description: "All of Eyolo's Blog Category",
};

const AllCategory = () => {
  const categories = popularCategories(allPosts);

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
                Category
                <span className="inline-block bg-white w-6 md:w-10 h-px align-middle ml-4 md:ml-6"></span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light overflow-clip py-16 md:py-24">
        <div className="container">
          <div className="row justify-center g-1 sm:g-3 row-cols-2 sm:row-cols-3 md:row-cols-4 lg:row-cols-5 xl:row-cols-6">
            {categories.map((category, key) => (
              <div key={key} className="col">
                <Link
                  href={`/category/${category.name}`}
                  className="text-center group block h-full relative z-10 after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:rounded-md after:z-[5] after:bg-gradient-to-t after:from-black/75 hover:after:from-dark"
                >
                  <div className="relative overflow-clip rounded-md">
                    <Image
                      src={category.image}
                      alt={category.name}
                      height={200}
                      width={200}
                      className="rounded-md w-full h-44 sm:h-56 mx-auto bg-white/10 has-transition group-hover:brightness-50 object-cover group-hover:scale-110"
                    />

                    <span className="absolute z-30 top-[45%] left-[47%] rotate-[36deg] group-hover:left-1/2 group-hover:rotate-45 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible text-white">
                      {/* prettier-ignore */}
                      <svg className="relative top-[2px] h-3 sm:h-4 w-3 sm:w-4" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33008 17.4023L17.3301 1.40234M17.3301 1.40234H2.93008M17.3301 1.40234V15.8023" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </div>

                  <h4 className="sm:text-lg capitalize absolute bottom-4 sm:bottom-5 w-full text-white z-20 tracking-wide px-2">
                    {category.name}
                  </h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AllCategory;
