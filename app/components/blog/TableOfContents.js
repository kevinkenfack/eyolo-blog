"use client";

import { useEffect, useState } from "react";

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const content = document.querySelector(".content");

    const headingElements = content.querySelectorAll("h2, h3");

    const headingArray = Array.from(headingElements);

    headingArray.forEach((heading) => {
      heading.setAttribute("data-id", heading.id);
    });

    setHeadings(headingArray);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentActive = null;
      headingArray.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element?.offsetTop <= scrollPosition + 200) {
          currentActive = heading.id;
        }
      });
      setActive(currentActive);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="border border-[#DBD8BD] rounded-xl lg:p-6">
      <h3
        className="font-secondary uppercase cursor-pointer lg:cursor-auto select-none flex lg:block justify-between items-center px-5 py-4 lg:p-0"
        onClick={handleExpand}
      >
        <span className="text-sm sm:text-base">Table of Contents</span>
        <span className="block lg:hidden">
          {/* prettier-ignore */}
          <svg className={expanded ? "rotate-45" : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" height="1em"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
        </span>
      </h3>

      {!headings.length && (
        <div className="mt-6 flex flex-col gap-y-4">
          <span className="h-4 w-[60%] block bg-dark/5 rounded"></span>
          <span className="h-4 w-3/4 block bg-dark/5 rounded"></span>
          <span className="h-4 w-[70%] block bg-dark/5 rounded"></span>
          <span className="h-4 w-[65%] block bg-dark/5 rounded"></span>
          <span className="h-4 w-[50%] block bg-dark/5 rounded"></span>
        </div>
      )}
      <ol
        className={`list-decimal pl-9 lg:pl-4 lg:mt-4 p-5 lg:p-0 !pt-0 ${
          expanded ? "block" : "hidden lg:block"
        }`}
      >
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`text-[#6c6c5f] mb-3 last:mb-0 text-[15px] group hover:text-secondary ${
              heading.id === active ? "text-secondary" : ""
            }`}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className="has-line-link has-line-link-secondary"
            >
              <span
                className={`line-link-el group-hover:text-secondary ${
                  heading.id === active ? "text-secondary" : ""
                }`}
                style={
                  heading.id === active
                    ? {
                        fontWeight: "bold",
                        backgroundSize: "100% 1px",
                      }
                    : null
                }
              >
                {heading.textContent}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TableOfContents;
