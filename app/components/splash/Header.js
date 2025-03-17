import config from "@/config/site.config";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const logo = config.logoWhite;
  const logoText = config.logoText;

  return (
    <header className="border-b-[1px] border-border/15 relative py-5 sm:py-4">
      <div className="container px-5 sm:px-3">
        <div className="row items-center gy-2">
          {/* logo */}
          <div className="col-12 sm:col-5">
            <Link href="/">
              {logo ? (
                <Image
                  src={logo}
                  alt={logoText}
                  width={143}
                  height={30}
                  className="w-[125px] md:w-[143px] mx-auto sm:mx-0"
                />
              ) : (
                <span className="text-3xl text-black">{logoText}</span>
              )}
            </Link>
          </div>
          <div className="col-12 sm:col-7">
            <ul className="flex flex-wrap gap-3 md:gap-6 items-center justify-center sm:justify-end uppercase text-sm tracking-wide font-normal leading-none font-secondary [&>li>a]:text-white [&>li]:text-[#434343] ">
              <li>
                <Link
                  href="#features"
                  className="hover:text-primary transition-all duration-300"
                >
                  features
                </Link>
              </li>
              <li>\</li>
              <li>
                <Link
                  href="#demos"
                  className="hover:text-primary transition-all duration-300"
                >
                  demos
                </Link>
              </li>
              <li>\</li>
              <li>
                <Link
                  className="button button-lg button-light bg-primary border-primary group animate-top-right"
                  href="https://1.envato.market/Y9QNNK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative overflow-hidden transition-none [&>span]:block">
                    <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12 text-sm">
                      Buy <i className="not-italic hidden sm:inline">Now</i>
                    </span>
                    <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0 text-sm">
                      Buy <i className="not-italic hidden sm:inline">Now</i>
                    </span>
                  </span>
                  <span className="overflow-hidden leading-none -translate-y-[2px]">
                    {/* prettier-ignore */}
                    <svg className="inline-block animate-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
