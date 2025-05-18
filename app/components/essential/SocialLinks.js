import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconRss,
} from "@tabler/icons-react";
import Link from "next/link";

const SocialLinks = ({ dark, isFooter, border }) => {
  return (
    <ul
      className={`flex flex-wrap gap-4 ${
        !isFooter
          ? `justify-center py-4 ${
              dark
                ? "border-[#627669] border-t-[1px]"
                : "border-dark/10 border-t-[1px]"
            }`
          : ""
      }`}
    >
      <li>
        <Link
          href="https://facebook.com"
          target="_blank"
          aria-label="Check out our Facebook"
          className={`inline-block rounded-full has-transition ${
            isFooter ? "p-[10px] md:p-3" : "p-3"
          } ${border ? "border border-border p-2" : ""} ${
            dark
              ? "text-white hover:bg-white hover:text-dark"
              : "hover:bg-dark hover:text-white"
          }`}
        >
          <IconBrandFacebook height="20" width="20" stroke={1.5} />
        </Link>
      </li>
      <li>
        <Link
          href="https://twitter.com"
          target="_blank"
          aria-label="Check out our Twitter"
          className={`inline-block rounded-full has-transition ${
            isFooter ? "p-[10px] md:p-3" : "p-3"
          } ${border ? "border border-border p-2" : ""} ${
            dark
              ? "text-white hover:bg-white hover:text-dark"
              : "hover:bg-dark hover:text-white"
          }`}
        >
          <IconBrandTwitter height="20" width="20" stroke={2} />
        </Link>
      </li>
      <li>
        <Link
          href="https://instagram.com"
          target="_blank"
          aria-label="Check out our Instagram"
          className={`inline-block rounded-full has-transition ${
            isFooter ? "p-[10px] md:p-3" : "p-3"
          } ${border ? "border border-border p-2" : ""} ${
            dark
              ? "text-white hover:bg-white hover:text-dark"
              : "hover:bg-dark hover:text-white"
          }`}
        >
          <IconBrandInstagram height="20" width="20" stroke={2} />
        </Link>
      </li>
      <li>
        <Link
          href="/rss.xml"
          prefetch={false}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read RSS Feed"
          className={`inline-block rounded-full has-transition ${
            isFooter ? "p-[10px] md:p-3" : "p-3"
          } ${border ? "border border-border p-2" : ""} ${
            dark
              ? "text-white hover:bg-white hover:text-dark"
              : "hover:bg-dark hover:text-white"
          }`}
        >
          <IconRss height="20" width="20" stroke={2} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
