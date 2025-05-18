import Image from "next/image";

const PickFeatures = () => {
  return (
    <section id="features" className="py-16 md:py-20">
      <div className="container">
        <div className="border-t pt-8 border-[#DBD8BD]">
          <div className="flex justify-between items-center sm:items-start mb-8 sm:mb-16">
            <h2 className="text-base uppercase font-secondary pl-4 relative after:absolute after:rounded-full -mt-1 after:content-[''] after:h-2 after:w-2 after:bg-primary after:left-0 after:top-2">
              Top pick’s features
            </h2>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <div className="bg-[#0a0a0a] row-span-3 rounded-2xl border-2 border-[#2F2F2F] p-6 md:p-6 lg:p-8 flex flex-col justify-center">
            <div className="mb-7">
              <span className="text-[#BBC5BE] text-sm !leading-[1.42] font-secondary font-normal uppercase">
                EXPERIENCE THE OPTIMUM SPEED
              </span>
              <h3 className="text-white text-2xl font-secondary font-medium mt-2">
                100 score on Google PageSpeed Insights and GTmetrix
              </h3>
            </div>
            <div className="mx-auto relative h-fit w-full bg-[url('/images/splash/features-icon/feature4.svg')] bg-[length:95%_100%] bg-no-repeat">
              <div className="w-fit relative shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">
                <Image
                  className="md:max-w-[200px] 2xl:max-w-fit"
                  src="/images/splash/page-speed1.svg"
                  width="252"
                  height="252"
                  alt="Shape"
                />
                <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[64%] text-[#27BA5C] text-[32px] leading-none font-bold">
                  100
                </span>
              </div>
              <div className="w-fit ml-auto relative xl:-mt-12">
                <Image
                  className="md:max-w-[200px] 2xl:max-w-fit"
                  src="/images/splash/page-speed2.svg"
                  width="236"
                  height="239"
                  alt="Shape"
                />
                <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[64%] text-[#27BA5C] text-[36px] leading-none font-bold">
                  100
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white/50 row-span-2 rounded-2xl border-2 border-[#DCDBD0] p-6 md:p-6 lg:p-8 flex flex-col justify-center">
            <div className="mr-3">
              <span className="text-[#949494] text-sm !leading-[1.42] font-secondary font-normal uppercase">
                Support for Headless CMS
              </span>
              <h3 className="text-dark text-2xl font-secondary font-medium mt-2">
                Seamless Integration
              </h3>
            </div>
            <Image
              className="ml-auto"
              src="/images/splash/features-icon/feature2.svg"
              width="412"
              height="265"
              alt="Icon"
            />
            <p className="text-[10px] text-dark/20 mt-7 text-balance">
              *CMS not Provided, you can easily setup them by their
              documentation. Need help from us? contact us
            </p>
          </div>

          <div className="bg-[#415649] row-span-2 rounded-2xl border-2 border-[#627669] p-6 md:p-6 lg:p-8 flex flex-col justify-center">
            <div className="mb-8">
              <span className="text-[#BBC5BE] text-sm !leading-[1.42] font-secondary font-normal uppercase">
                Flexible Content
              </span>
              <h3 className="text-white text-2xl font-secondary font-medium mt-2">
                Built-in support for Markdown and MDX
              </h3>
            </div>
            <Image
              className="mx-auto"
              src="/images/splash/features-icon/feature3.svg"
              width="320"
              height="233"
              alt="Icon"
            />
          </div>

          <div className="bg-white/50 row-span-2 rounded-2xl border-2 border-[#DCDBD0] p-6 md:p-6 lg:p-8">
            <div className="mr-3">
              <span className="text-[#949494] text-sm !leading-[1.42] font-secondary font-normal uppercase">
                Enhancing search
              </span>
              <h3 className="text-dark text-2xl font-secondary font-medium mt-2">
                Custom Search (Instant)
              </h3>
            </div>
            <Image
              className="mx-auto mt-6"
              src="/images/splash/features-icon/feature5.svg"
              width="466"
              height="285"
              alt="Icon"
            />
          </div>

          <div className="bg-white/50 row-span-1 rounded-2xl border-2 border-[#DCDBD0] p-6 lg:p-6 xl:py-3 xl:px-6 2xl:p-8 flex justify-between items-center flex-row">
            <div className="mr-3">
              <span className="text-[#949494] text-sm !leading-[1.42] font-secondary font-normal uppercase">
                SEO Friendly
              </span>
              <h3 className="text-dark text-2xl font-secondary font-medium mt-2">
                SEO Optimized
              </h3>
            </div>
            <Image
              className="ml-auto"
              src="/images/splash/features-icon/feature1.svg"
              height="120"
              width="120"
              alt="Icon"
            />
          </div>

          <div className="bg-white/50 row-span-1 rounded-2xl border-2 border-[#DCDBD0] p-6 lg:p-6 xl:py-3 xl:px-6 2xl:p-8 flex justify-between items-center flex-row">
            <div className="mr-3">
              <span className="text-[#949494] text-sm !leading-[1.42] font-secondary font-normal uppercase">
                easy for you
              </span>
              <h3 className="text-dark text-2xl font-secondary font-medium mt-2">
                Working AJAX contact form
              </h3>
            </div>
            <Image
              className="ml-auto -translate-x-3"
              src="/images/splash/features-icon/feature8.svg"
              width="80"
              height="80"
              alt="Icon"
            />
          </div>

          <div className="bg-[#0a0a0a] row-span-1 rounded-2xl border-2 border-[#2F2F2F] p-6 lg:p-6 xl:py-3 xl:px-6 2xl:p-8 flex justify-between items-center flex-row">
            <div className="mr-3">
              <span className="text-[#BBC5BE] text-sm !leading-[1.42] font-secondary font-normal uppercase">
                Quick And easy
              </span>
              <h3 className="text-white text-2xl font-secondary font-medium mt-2">
                RSS Feed Added
              </h3>
            </div>
            <Image
              className="ml-auto"
              src="/images/splash/features-icon/feature7.svg"
              width="125"
              height="125"
              alt="Icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickFeatures;
