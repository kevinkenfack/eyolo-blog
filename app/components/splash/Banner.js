import Header from "@/components/splash/Header";
import styles from "@/styles/modules/Style.module.scss";
import Image from "next/image";
import Link from "next/link";

const SplashBanner = () => {
  return (
    <section className={styles.darkBg}>
      <Header />

      <div className="text-white overflow-clip">
        <div className="container">
          <div className="row md:flex-nowrap items-center">
            <div className="md:col-7 lg:col-6 text-center md:text-center">
              <div className="py-16 md:py-20 relative z-50">
                <Image
                  src="/images/splash/next-v.svg"
                  alt="Nextjs Version"
                  width={300}
                  height={44}
                  className="w-[200px] md:w-[300px] max-w-full h-auto mb-5 md:mb-6 mx-auto md:ml-0"
                />

                <h1 className="text-white text-[32px] sm:text-4xl lg:text-[42px] !leading-snug text-balance md:text-start mb-10">
                  Comprehensive Solution for{" "}
                  <span className="underline">Versatile Blogging</span> Needs
                </h1>

                <div className="flex justify-center md:justify-start gap-y-5 gap-x-8 items-center flex-wrap">
                  <Link
                    href="#demos"
                    className="button button-light bg-white/15 border-white/15 group h-12"
                  >
                    <span className="relative overflow-hidden transition-none group-hover:[&>span]:has-transition [&>span]:block">
                      <span className="group-hover:-translate-y-[170%] group-hover:scale-y-[2] group-hover:rotate-12">
                        View All demos
                      </span>
                      <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[190%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                        View All demos
                      </span>
                    </span>
                    <span className="overflow-hidden leading-none">
                      {/* prettier-ignore */}
                      <svg className="inline-block" width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#FF4848" /><path d="M16 9.53463V22.4654M16 22.4654L21.8188 16.6465M16 22.4654L10.1811 16.6465" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </Link>
                  <Link
                    href="#features"
                    className="has-line-link has-line-link-white flex items-center gap-x-2"
                  >
                    <span className="line-link-el line-link-el-active hoverable">
                      Explore Features
                    </span>
                    {/* prettier-ignore */}
                    <svg className="translate-y-[2px]" width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#FF4848" /><path d="M16 9.53463V22.4654M16 22.4654L21.8188 16.6465M16 22.4654L10.1811 16.6465" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="sm:col-8 mx-auto md:col-8 md:-ml-32 lg:ml-0">
              <Image
                src="/images/splash/banner.png"
                alt="Banner"
                height={608}
                width={1068}
                className="md:mt-[120px] lg:mt-24 md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplashBanner;
