import Link from "next/link";

const SectionHeader = ({ title, buttonLabel, buttonLink, dark }) => {
  return (
    <div className="container">
      <div
        className={`border-t pt-8 ${
          dark ? "border-[#2F2F2F]" : "border-[#DBD8BD]"
        }`}
      >
        <div className="flex justify-between items-center sm:items-start">
          <h2
            className={`text-base uppercase font-secondary pl-4 relative after:absolute after:rounded-full -mt-1 after:content-[''] after:h-2 after:w-2 after:bg-primary after:left-0 after:top-2 ${
              dark ? "text-white" : ""
            }`}
          >
            {title}
          </h2>

          <Link
            className={`button group animate-top-right ${
              dark ? "button-light" : ""
            }`}
            href={buttonLink}
          >
            <span className="relative overflow-hidden transition-none [&>span]:block">
              <span className="group-hover:-translate-y-[200%] group-hover:scale-y-[2] group-hover:rotate-12">
                <i className="hidden sm:inline not-italic">{buttonLabel}</i>
                <i className="inline sm:hidden not-italic">All</i>
              </span>
              <span className="absolute left-0 top-0 scale-y-[2] rotate-12 translate-y-[200%] group-hover:translate-y-0 group-hover:scale-y-100 group-hover:rotate-0">
                <i className="hidden sm:inline not-italic">{buttonLabel}</i>
                <i className="inline sm:hidden not-italic">All</i>
              </span>
            </span>
            <span className="overflow-hidden leading-none -translate-y-[2px]">
              {/* prettier-ignore */}
              <svg className="inline-block animate-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.00005L9 1.00005M9 1.00005H1.8M9 1.00005V8.20005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
