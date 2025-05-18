"use client";
import Image from "next/image";
import { useState } from "react";

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoURL = "/images/splash/installation.mp4";

  return (
    <>
      <div
        className="relative group cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          className="w-full max-h-96"
          src="/images/splash/video.png"
          alt="Tumbnail Image"
          width={648}
          height={380}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-all duration-300">
          {/* prettier-ignore */}
          <svg className="-translate-y-[6px] h-full lg:h-auto md:h-full" width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="group-hover:motion-safe:animate-[spin_10s_linear_infinite] origin-center text-primary" d="M40.2339 2.64801C41.7807 1.16725 44.2193 1.16724 45.7661 2.64801L52.263 8.86763C53.1436 9.71064 54.3606 10.1061 55.5686 9.94166L64.4805 8.72869C66.6022 8.43991 68.5751 9.87327 68.9561 11.9804L70.5564 20.831C70.7734 22.0306 71.5255 23.0659 72.5994 23.6429L80.5223 27.8998C82.4085 28.9134 83.1621 31.2326 82.2318 33.1613L78.3242 41.2622C77.7946 42.3602 77.7946 43.6398 78.3242 44.7378L82.2318 52.8387C83.1621 54.7674 82.4085 57.0866 80.5223 58.1002L72.5994 62.3571C71.5255 62.9341 70.7734 63.9694 70.5564 65.169L68.9561 74.0196C68.5751 76.1267 66.6022 77.5601 64.4805 77.2713L55.5686 76.0583C54.3606 75.8939 53.1436 76.2894 52.263 77.1324L45.7661 83.352C44.2193 84.8328 41.7807 84.8328 40.2339 83.352L33.737 77.1324C32.8564 76.2894 31.6394 75.8939 30.4314 76.0583L21.5195 77.2713C19.3978 77.5601 17.4249 76.1267 17.0439 74.0196L15.4435 65.169C15.2266 63.9694 14.4745 62.9341 13.4006 62.3571L5.47775 58.1002C3.59147 57.0866 2.8379 54.7674 3.76821 52.8387L7.67575 44.7378C8.20539 43.6398 8.20539 42.3602 7.67575 41.2622L3.76821 33.1613C2.8379 31.2326 3.59147 28.9134 5.47775 27.8998L13.4006 23.6429C14.4745 23.0659 15.2266 22.0306 15.4435 20.831L17.0439 11.9804C17.4249 9.87327 19.3978 8.43991 21.5195 8.72869L30.4314 9.94166C31.6394 10.1061 32.8564 9.71064 33.737 8.86763L40.2339 2.64801Z" fill="currentColor"></path><path className="text-white" d="M57 41.7677C58.3333 42.5375 58.3333 44.462 57 45.2318L38.25 56.0571C36.9167 56.8269 35.25 55.8647 35.25 54.3251L35.25 32.6744C35.25 31.1348 36.9167 30.1726 38.25 30.9424L57 41.7677Z" fill="currentColor"></path></svg>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed z-50 top-0 left-0 w-full h-full grid place-content-center bg-black/80 backdrop-blur-lg has-transition px-4`}
      >
        <button
          type="button"
          className="button button-light bg-primary border-primary hover:scale-110 absolute top-8 right-8 z-[60] px-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <span
          className="absolute top-0 left-0 w-full h-full z-50"
          onClick={() => setIsOpen(!isOpen)}
        ></span>

        <video
          src={isOpen ? videoURL : ""}
          className="w-[720px] max-w-full h-auto ratio-16/9 rounded-xl relative z-[100]"
          controls
        ></video>
      </div>
    </>
  );
};

export default VideoPopup;
