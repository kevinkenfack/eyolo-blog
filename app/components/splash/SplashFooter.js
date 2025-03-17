// import Installation from "@/components/splash/Installation";
import config from "@/config/site.config";
import styles from "@/styles/modules/Style.module.scss";
import Image from "next/image";
import Link from "next/link";

const SplashFooter = () => {
  const logo = config.logoWhite;
  const logoText = config.logoText;

  return (
    <section className={`${styles.darkBg}`}>
      {/* <div className="container py-16 md:py-20 border-b border-[#202020]">
        <div className="row gap-y-6 items-center justify-center">
          <div className="col-12 md:col-6 lg:col-4">
            <h2 className="text-white font-primary text-3xl md:text-4xl mb-3 !leading-normal text-balance">
              An easy guide to install eyolo-nextjs
            </h2>
            <p className="font-light text-[#AFAFAF] font-secondary text-balance">
              A short video tutorial to rapidly set up the theme and import the
              demo
            </p>
          </div>
          <div className="col-12 md:col-6">
            <Installation />
          </div>
        </div>
      </div> */}

      <div className="container py-16 md:py-20 border-b border-[#202020]">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center bg-white/5 rounded-2xl border border-[#2F2F2F] p-6 md:p-8 lg:p-10">
            <span>
              {/* prettier-ignore */}
              <svg width="53" height="50" viewBox="0 0 53 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_660_382)"><path fillRule="evenodd" clipRule="evenodd" d="M44.5501 18.905C43.8526 11.75 39.6226 0.5 26.5501 0.5C13.4776 0.5 9.24761 11.75 8.55011 18.905C6.10326 19.8336 4.48928 22.1829 4.50005 24.8V27.95C4.50005 31.4294 7.32071 34.25 10.8001 34.25C14.2795 34.25 17.1001 31.4294 17.1001 27.95V24.8C17.0888 22.2394 15.5341 19.9384 13.1626 18.9725C13.6126 14.8325 15.8176 5 26.5501 5C37.2826 5 39.4651 14.8325 39.9151 18.9725C37.5484 19.9405 36.0016 22.243 36.0001 24.8V27.95C36.0099 30.3687 37.3987 32.5699 39.5776 33.62C38.6326 35.3975 36.2251 37.805 30.3076 38.525C29.1247 36.7288 26.8362 36.0207 24.8456 36.835C22.855 37.6493 21.7189 39.7583 22.134 41.8686C22.5491 43.9788 24.3994 45.5 26.5501 45.5C28.2496 45.4906 29.7988 44.5245 30.5551 43.0025C40.2076 41.9 43.2901 36.9275 44.2576 34.0025C46.8751 33.1546 48.6354 30.7011 48.6001 27.95V24.8C48.6109 22.1829 46.997 19.8336 44.5501 18.905ZM12.6001 27.95C12.6001 28.9441 11.7942 29.75 10.8001 29.75C9.806 29.75 9.00011 28.9441 9.00011 27.95V24.8C9.00011 24.1569 9.34319 23.5627 9.90011 23.2412C10.457 22.9196 11.1432 22.9196 11.7001 23.2412C12.257 23.5627 12.6001 24.1569 12.6001 24.8V27.95ZM40.5001 24.8C40.5001 23.8059 41.306 23 42.3001 23C43.2942 23 44.1001 23.8059 44.1001 24.8V27.95C44.1001 28.9441 43.2942 29.75 42.3001 29.75C41.306 29.75 40.5001 28.9441 40.5001 27.95V24.8Z" fill="white" /></g><defs><filter id="filter0_d_660_382" x="0.5" y="0.5" width="52.1006" height="53" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dy="4" /><feGaussianBlur stdDeviation="2" /><feComposite in2="hardAlpha" operator="out" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_660_382" /><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_660_382" result="shape" /></filter></defs></svg>
            </span>
            <h3 className="font-primary text-3xl text-white font-normal mt-6 mb-5 text-center">
              Customer Support
            </h3>
            <p className="text-white/75 font-normal font-secondary text-center text-balance mb-8">
              Please contact us if you have any questions. via the themforest
              profile contact form
            </p>
            <Link
              className="button button-lg button-light group animate-top-right"
              href="https://themeforest.net/user/platol"
            >
              <span className="relative overflow-hidden transition-none [&>span]:block">
                <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                  Contact us
                </span>
                <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                  Contact us
                </span>
              </span>
              <span className="overflow-hidden leading-none -translate-y-[2px]">
                {/* prettier-ignore */}
                <svg className="inline-block animate-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </Link>
          </div>

          <Link
            href="https://1.envato.market/Y9QNNK"
            className="uppercase bg-primary text-white rounded-xl py-4 px-4 flex items-center justify-center gap-2 group w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* prettier-ignore */}
            <svg className="transition-none group-hover:has-transition group-hover:rotate-180" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1C9 5.41828 12.5817 9 17 9C12.5817 9 9 12.5817 9 17C9 12.5817 5.41828 9 1 9C5.41828 9 9 5.41828 9 1Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="relative overflow-hidden transition-none group-hover:[&>span]:has-transition [&>span]:block ">
              <span className="group-hover:-translate-y-[170%] group-hover:scale-y-[2] group-hover:rotate-12">
                Purchase Now
              </span>
              <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[170%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                Purchase Now
              </span>
            </span>
          </Link>
        </div>
      </div>

      <div className="container py-12">
        {/* logo */}
        <div className="flex flex-col items-center">
          <Link href="/">
            <Image
              src={logo}
              alt={logoText}
              width={143}
              height={30}
              className="w-[125px] md:w-[143px] mx-auto sm:mx-0"
            />
          </Link>
          <div className="text-[#AFAFAF] text-lg font-normal font-secondary mt-4">
            Copyright 2024 By{" "}
            <Link
              href="https://themeforest.net/user/platol"
              className="text-white font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Platol
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplashFooter;
