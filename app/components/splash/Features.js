import { slugify } from "@/libs/utils/slugify";
import Image from "next/image";
import features from "./features.json";

const Features = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="border-t pt-8 border-[#DBD8BD]">
          <div className="flex justify-between items-center sm:items-start mb-8 sm:mb-16">
            <h2 className="text-base uppercase font-secondary pl-4 relative after:absolute after:rounded-full -mt-1 after:content-[''] after:h-2 after:w-2 after:bg-primary after:left-0 after:top-2">
              Top pick’s features
            </h2>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={`${index}_${slugify(feature.title)}`}
              className="p-6 md:p-8 bg-[#ffffff81] rounded-2xl border-2 border-[#DCDBD0] flex flex-col justify-between"
            >
              <div className="flex justify-between">
                <span>
                  <Image
                    width={feature.image.includes("mdx") ? 90 : 50}
                    height={feature.image.includes("mdx") ? 90 : 50}
                    src={feature.image}
                    alt="icon"
                  />
                </span>
                {feature.hot && (
                  <span className="inline-block py-1 px-3 rounded bg-primary text-xs uppercase font-bold font-secondary text-white w-fit h-fit">
                    hot
                  </span>
                )}
              </div>
              <h6 className="text-xl font-secondary text-dark font-medium capitalize mt-3">
                {feature.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
