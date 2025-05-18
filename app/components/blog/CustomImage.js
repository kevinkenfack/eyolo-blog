"use client";

import Lightense from "lightense-images";
import Image from "next/image";
import { useEffect, useRef } from "react";

const CustomImage = ({ src, alt, width, height, className, caption }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      Lightense(imageRef.current, {
        time: 300,
        padding: 40,
        offset: 40,
        keyboard: true,
        cubicBezier: "cubic-bezier(.2, 0, .1, 1)",
        background: "rgba(0, 0, 0, .8)",
        zIndex: 1000000,
      });
    }
  }, []);

  return (
    <div className="relative">
      <Image
        ref={imageRef}
        className={`rounded-md m-0 bg-dark/10 h-100% h-full w-full object-cover ${className}`}
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ "maxHeight": `${height}px` }}
      />
      {caption && (
        <p className="text-sm text-dark/50 mt-3 mb-0 text-center">{caption}</p>
      )}
    </div>
  );
};

export default CustomImage;
