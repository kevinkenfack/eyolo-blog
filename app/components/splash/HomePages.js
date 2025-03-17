import styles from "@/styles/modules/Style.module.scss";
import Image from "next/image";
import Link from "next/link";

const HomePages = () => {
  return (
    <section
      id="demos"
      className={`${styles.darkBg} bg-cover bg-left-top py-16 md:py-20`}
    >
      <div className="container">
        <div className="border-t pt-8 border-[#2F2F2F]">
          <div className="flex justify-between items-center sm:items-start mb-8 sm:mb-16">
            <h2 className="text-base uppercase font-secondary pl-4 relative after:absolute after:rounded-full -mt-1 after:content-[''] after:h-2 after:w-2 after:bg-primary after:left-0 after:top-2 text-white">
              State of the earth demos
            </h2>
          </div>
        </div>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {/* start single demo */}
          <Link
            href={"/"}
            className="rounded-xl p-6 border border-[#2F2F2F] bg-white/5 group"
          >
            <div className="flex gap-[6px] items-center">
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
            </div>
            <div className="mt-5 mb-6 relative overflow-hidden rounded-xl">
              <Image
                className="w-full h-full rounded-lg"
                height={394}
                width={576}
                src={"/images/splash/demos/home-1.jpg"}
                alt="Inner page image"
              />
            </div>
            <div className="flex justify-between items-center">
              <h6 className="text-xl lg:text-2xl text-white font-secondary">
                Creative Home 01
              </h6>
              <span className="flex justify-center items-center h-11 w-11 rounded-full bg-white/10 relative overflow-hidden">
                {/* prettier-ignore */}
                <svg className="w-4 md:w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-top-2 group-hover:left-14 duration-200" width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99976 17.9999L17.9998 1.99994M17.9998 1.99994H3.59976M17.9998 1.99994V16.3999" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {/* prettier-ignore */}
                <svg className="w-4 md:w-auto absolute top-14 -left-6 group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 duration-200" width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99976 17.9999L17.9998 1.99994M17.9998 1.99994H3.59976M17.9998 1.99994V16.3999" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
          </Link>
          {/* end single demo */}

          {/* start single demo */}
          <Link
            href={"/home-2"}
            className="rounded-xl p-6 border border-[#2F2F2F] bg-white/5 group"
          >
            <div className="flex gap-[6px] items-center">
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
            </div>
            <div className="mt-5 mb-6 relative overflow-hidden rounded-xl">
              <Image
                className="w-full h-full rounded-lg"
                height={394}
                width={576}
                src={"/images/splash/demos/home-2.jpg"}
                alt="Inner page image"
              />
            </div>
            <div className="flex justify-between items-center">
              <h6 className="text-xl lg:text-2xl text-white font-secondary">
                Creative Home 02
              </h6>
              <span className="flex justify-center items-center h-11 w-11 rounded-full bg-white/10 relative overflow-hidden">
                {/* prettier-ignore */}
                <svg className="w-4 md:w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-top-2 group-hover:left-14 duration-200" width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99976 17.9999L17.9998 1.99994M17.9998 1.99994H3.59976M17.9998 1.99994V16.3999" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {/* prettier-ignore */}
                <svg className="w-4 md:w-auto absolute top-14 -left-6 group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 duration-200" width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99976 17.9999L17.9998 1.99994M17.9998 1.99994H3.59976M17.9998 1.99994V16.3999" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
          </Link>
          {/* end single demo */}

          {/* start single demo */}
          <Link
            href={"/home-3"}
            className="rounded-xl p-6 border border-[#2F2F2F] bg-white/5 group"
          >
            <div className="flex gap-[6px] items-center">
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
            </div>
            <div className="mt-5 mb-6 relative overflow-hidden rounded-xl">
              <Image
                className="w-full h-full rounded-lg"
                height={394}
                width={576}
                src={"/images/splash/demos/home-3.jpg"}
                alt="Inner page image"
              />
            </div>
            <div className="flex justify-between items-center">
              <h6 className="text-xl lg:text-2xl text-white font-secondary">
                Creative Home 03
              </h6>
              <span className="flex justify-center items-center h-11 w-11 rounded-full bg-white/10 relative overflow-hidden">
                {/* prettier-ignore */}
                <svg className="w-4 md:w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-top-2 group-hover:left-14 duration-200" width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99976 17.9999L17.9998 1.99994M17.9998 1.99994H3.59976M17.9998 1.99994V16.3999" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {/* prettier-ignore */}
                <svg className="w-4 md:w-auto absolute top-14 -left-6 group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 duration-200" width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99976 17.9999L17.9998 1.99994M17.9998 1.99994H3.59976M17.9998 1.99994V16.3999" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
          </Link>
          {/* end single demo */}

          {/* start single demo */}
          <Link
            href={"#"}
            className="rounded-xl p-6 border border-[#2F2F2F] bg-white/5 group"
          >
            <div className="flex gap-[6px] items-center">
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
            </div>
            <div className="mt-5 mb-6 relative overflow-hidden rounded-xl">
              <Image
                className="w-full h-full rounded-lg"
                height={394}
                width={576}
                src={"/images/splash/demos/home-4.jpg"}
                alt="Inner page image"
              />
              <span className="py-2 pl-3 pr-4 rounded-full bg-primary text-white uppercase flex gap-1 justify-center items-center w-fit absolute top-6 right-6 text-xs tracking-wide">
                <Image
                  height={18}
                  width={18}
                  src={"/images/splash/icons/hand-emoji.svg"}
                  alt="Icon"
                />
                coming soon
              </span>
            </div>
            <div className="flex justify-between items-center">
              <h6 className="text-xl lg:text-2xl text-white font-secondary">
                Creative Home 04
              </h6>
              <span className="flex justify-center items-center h-11 w-11 rounded-full bg-white/10 relative overflow-hidden">
                {/* prettier-ignore */}
                <svg className="w-4 md:w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-top-2 group-hover:left-14 duration-200" width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99976 17.9999L17.9998 1.99994M17.9998 1.99994H3.59976M17.9998 1.99994V16.3999" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {/* prettier-ignore */}
                <svg className="w-4 md:w-auto absolute top-14 -left-6 group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 duration-200" width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99976 17.9999L17.9998 1.99994M17.9998 1.99994H3.59976M17.9998 1.99994V16.3999" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
          </Link>
          {/* end single demo */}
        </div>
      </div>
    </section>
  );
};

export default HomePages;
