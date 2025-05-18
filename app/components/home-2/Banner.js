import Post from "@/components/posts/Post";
import styles from "@/styles/modules/Style.module.scss";
import Link from "next/link";

const Banner = ({ trendingPosts, banner }) => {
  return (
    <>
      <section
        className={`py-20 sm:py-28 relative z-10 after:absolute after:h-3/4 after:w-full after:content-[''] after:left-0 after:bottom-0 after:bg-gradient-to-t after:from-light after:-z-10 after:pointer-events-none before:absolute before:h-1/4 before:w-full before:content-[''] before:left-0 before:top-0 before:bg-gradient-to-b before:from-light before:-z-10 before:pointer-events-none ${styles.dotBg}`}
      >
        <div className="container">
          <div className="row justify-center items-center">
            <div className="xl:col-8 lg:col-10">
              <h1 className="lg:text-6xl md:text-5xl text-[40px] text-black !leading-snug text-center text-balance -mt-2">
                <span>{banner.heading}</span>
              </h1>

              {(banner.rssButton.enable || banner.videoPostsButton.enable) && (
                <div className="flex items-center justify-center gap-4 mt-6">
                  {banner.rssButton.enable && (
                    <Link
                      href={banner.rssButton.link}
                      prefetch={false}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-full bg-[#f6a000] bg-cover bg-center group text-white h-12"
                    >
                      <span className="inline-block py-3 pl-4 pr-3 group-hover:scale-110 has-transition">
                        {/* prettier-ignore */}
                        <svg className="h-6 w-6" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.834 12.917C25.834 15.4717 25.0764 17.9691 23.6571 20.0933C22.2378 22.2175 20.2204 23.8731 17.8601 24.8507C15.4999 25.8284 12.9027 26.0842 10.397 25.5858C7.89137 25.0874 5.58978 23.8572 3.78331 22.0507C1.97683 20.2442 0.746608 17.9426 0.248202 15.437C-0.250203 12.9313 0.00559672 10.3342 0.983254 7.97388C1.96091 5.6136 3.61652 3.59624 5.74071 2.17691C7.86489 0.757569 10.3623 0 12.917 0C14.6133 0 16.293 0.334108 17.8601 0.983248C19.4273 1.63239 20.8512 2.58385 22.0507 3.7833C23.2502 4.98276 24.2016 6.40672 24.8508 7.97388C25.4999 9.54104 25.834 11.2207 25.834 12.917ZM9.19707 16.6092C8.95955 16.3716 8.65692 16.2098 8.32744 16.1442C7.99796 16.0787 7.65644 16.1123 7.34606 16.2408C7.03568 16.3694 6.7704 16.5871 6.58375 16.8664C6.3971 17.1457 6.29748 17.4741 6.29748 17.81C6.29748 18.146 6.3971 18.4744 6.58375 18.7537C6.7704 19.033 7.03568 19.2507 7.34606 19.3792C7.65644 19.5078 7.99796 19.5414 8.32744 19.4758C8.65692 19.4102 8.95955 19.2484 9.19707 19.0108C9.35493 18.8532 9.48017 18.6661 9.56561 18.46C9.65106 18.254 9.69505 18.0331 9.69505 17.81C9.69505 17.587 9.65106 17.3661 9.56561 17.16C9.48017 16.954 9.35493 16.7668 9.19707 16.6092ZM20.8415 18.2163C20.8427 16.4772 20.5012 14.7549 19.8362 13.148C19.1713 11.5411 18.1961 10.081 16.9664 8.85128C15.7367 7.62157 14.2766 6.64637 12.6697 5.98145C11.0627 5.31653 9.34048 4.97495 7.60141 4.97623C7.26686 4.98813 6.94998 5.12939 6.71751 5.37027C6.48504 5.61115 6.35513 5.93285 6.35513 6.26761C6.35513 6.60237 6.48504 6.92406 6.71751 7.16494C6.94998 7.40582 7.26686 7.54709 7.60141 7.55898C9.00164 7.55726 10.3885 7.83179 11.6824 8.36685C12.9764 8.9019 14.1521 9.68696 15.1422 10.6771C16.1324 11.6672 16.9174 12.8429 17.4525 14.1369C17.9875 15.4309 18.2621 16.8177 18.2603 18.2179C18.2604 18.3874 18.2939 18.5552 18.3589 18.7117C18.4238 18.8683 18.519 19.0105 18.6389 19.1302C18.7588 19.25 18.9012 19.345 19.0578 19.4097C19.2144 19.4745 19.3822 19.5078 19.5517 19.5077C19.7212 19.5075 19.889 19.4741 20.0455 19.4091C20.2021 19.3441 20.3443 19.249 20.464 19.1291C20.5838 19.0092 20.6788 18.8668 20.7435 18.7102C20.8083 18.5536 20.8416 18.3858 20.8415 18.2163ZM15.3464 18.2163C15.3464 16.1625 14.5306 14.1927 13.0785 12.7403C11.6264 11.2879 9.65685 10.4717 7.60304 10.4713C7.26849 10.4832 6.95161 10.6245 6.71914 10.8653C6.48667 11.1062 6.35676 11.4279 6.35676 11.7627C6.35676 12.0974 6.48667 12.4191 6.71914 12.66C6.95161 12.9009 7.26849 13.0422 7.60304 13.054C8.97192 13.0562 10.2841 13.6009 11.2521 14.5689C12.22 15.5368 12.7647 16.849 12.7669 18.2179C12.767 18.3874 12.8005 18.5552 12.8655 18.7117C12.9304 18.8683 13.0256 19.0105 13.1455 19.1302C13.2654 19.25 13.4077 19.345 13.5643 19.4097C13.721 19.4745 13.8888 19.5078 14.0583 19.5077C14.2278 19.5075 14.3956 19.4741 14.5521 19.4091C14.7086 19.3441 14.8508 19.249 14.9706 19.1291C15.0904 19.0092 15.1853 18.8668 15.2501 18.7102C15.3148 18.5536 15.3465 18.3858 15.3464 18.2163Z" fill="white" /></svg>
                      </span>
                      <span className="pr-6">{banner.rssButton.label}</span>
                    </Link>
                  )}

                  {banner.videoPostsButton.enable && (
                    <Link
                      href={banner.videoPostsButton.link}
                      className="flex items-center justify-center rounded-full bg-secondary bg-cover bg-center group text-white h-12"
                    >
                      <span className="inline-block py-3 pl-4 pr-2 group-hover:scale-110 has-transition">
                        {/* prettier-ignore */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>
                      </span>
                      <span className="pr-6">
                        {banner.videoPostsButton.label}
                      </span>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 overflow-clip relative z-50">
        {/* prettier-ignore */}
        <div className="absolute w-[1920px] h-[728px] left-1/2 -translate-x-1/2 bottom-0 pointer-events-none">
          <svg className="text-secondary w-full absolute bottom-0 pointer-events-none -z-10" width="1920" height="728" viewBox="0 0 1920 728" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0C953.5 380.5 1009 380.5 1920 0V803.5H0V0Z" fill="currentColor"/></svg>
          
          {/* fix svg background for large devices */}
          <div className="absolute w-full h-full z-10 after:content-[''] after:bg-secondary after:absolute after:h-full after:w-full after:left-full after:bottom-0 after:-z-10 before:content-[''] before:bg-secondary before:absolute before:h-full before:w-full before:-left-full before:bottom-0 before:-z-10"></div>
        </div>

        {/* start of posts */}
        <div className="container">
          <div className="row xl:row-cols-4 lg:row-cols-3 sm:row-cols-2 row-cols-1 g-6">
            {trendingPosts.map((post, index) => (
              <div
                className="col xl:last:block last:hidden [&:nth-child(3)]:hidden lg:[&:nth-child(3)]:block [&:nth-child(2)]:hidden sm:[&:nth-child(2)]:block"
                key={index}
              >
                <Post post={post} />
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex xl:hidden justify-center mt-10 sm:mt-12 relative z-50">
            <Link
              className="button button-light button-lg group animate-top-right"
              href="/blog"
            >
              <span className="relative overflow-hidden transition-none [&>span]:block">
                <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                  All Posts
                </span>
                <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                  All Posts
                </span>
              </span>
              <span className="overflow-hidden leading-none -translate-y-[2px]">
                {/* prettier-ignore */}
                <svg className="inline-block animate-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </Link>
          </div>
        </div>
        {/* end of posts */}
      </section>
    </>
  );
};

export default Banner;
