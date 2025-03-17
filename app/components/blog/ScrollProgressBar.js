"use client";

import { useEffect, useState } from "react";

const ScrollProgressBar = ({ title }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scrollProgressBlock = document.getElementById(
      "scroll-progress-block"
    );
    const blogHeader = document.getElementById("post-header");
    const blogHeaderHeight = blogHeader?.offsetHeight;
    const startScrollOffset = blogHeaderHeight - 200;

    const handleScroll = () => {
      const blogContent = document.getElementById("post-content");
      if (blogContent) {
        const scrollPosition = window.scrollY;
        const contentHeight = blogContent?.offsetHeight;
        const endScrollOffset =
          contentHeight + blogHeaderHeight * 2 - window.innerHeight;
        const totalScrollableDistance = endScrollOffset - startScrollOffset;

        if (scrollPosition > startScrollOffset) {
          const adjustedScrollPosition = scrollPosition - startScrollOffset;
          const progress =
            (adjustedScrollPosition / totalScrollableDistance) * 100;
          setProgress(progress > 110 ? 110 : progress);

          scrollProgressBlock.style.transform = `translateY(0)`;
        } else {
          setProgress(0);
          scrollProgressBlock.style.transform = `translateY(-100%)`;
        }
        if (progress >= 110) {
          scrollProgressBlock.style.transform = `translateY(-100%)`;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [progress]);

  useEffect(() => {
    const progressBar = document.getElementById("scroll-progress-bar");
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
  }, [progress]);

  return (
    <div
      id="scroll-progress-block"
      className="bg-light fixed top-0 z-[50] overflow-clip w-full -translate-y-full has-transition"
    >
      <div className="px-3 h-8 sm:h-10 bg-white/30 relative grid place-content-center">
        <div
          id="scroll-progress-bar"
          className="absolute top-0 left-0 h-full bg-white/60"
        ></div>
        <p className="text-xs sm:text-sm line-clamp-1 relative z-50">{title}</p>
      </div>
    </div>
  );
};

export default ScrollProgressBar;
