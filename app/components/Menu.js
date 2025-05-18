"use client";

import SocialLinks from "@/app/components/essential/SocialLinks";
import mainMenu from "@/config/main-menu.json";
import { slugify } from "@/libs/utils/slugify";
import styles from "@/styles/modules/Menu.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = ({ menuOpen, className, menuDark }) => {
  const pathname = usePathname();

  return (
    <div
      className={`absolute right-0 left-0 origin-top backdrop-blur-lg z-[9909] ${
        menuDark ? "bg-secondary/85" : "bg-light/85"
      } text-center z-50 ${className} ${styles.menu} ${
        menuOpen ? styles.isOpen : styles.isClose
      }`}
    >
      <nav>
        <ul
          className={
            menuDark ? "[&>li>span]:text-white [&>li>label]:text-white" : ""
          }
        >
          {mainMenu.map((menu, key) => {
            const isActive =
              pathname === menu.link ||
              (menu.submenu &&
                menu.submenu.some((submenu) => pathname === submenu.link));

            const menuNameSlug = slugify(menu.name);
            const activeClass = styles.active;

            return menu.submenu && menu.submenu.length > 0 ? (
              <li key={key}>
                <label
                  htmlFor={menuNameSlug}
                  className={`block ${isActive ? activeClass : ""}`}
                >
                  <input
                    id={menuNameSlug}
                    type="checkbox"
                    name="menu"
                    className="hidden"
                  />
                  <span className={styles.submenuname}>
                    {menu.name}
                    {/* prettier-ignore */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                  <div
                    className={styles.submenu}
                    style={{ "--maxHeight": menu.submenu.length * 2.9 + "rem" }}
                  >
                    {menu.submenu.map((submenu, subkey) => (
                      <Link
                        key={subkey}
                        href={submenu.link}
                        className={`block first:pt-5 ${
                          pathname === submenu.link ? activeClass : ""
                        }`}
                      >
                        {submenu.name}
                      </Link>
                    ))}
                  </div>
                </label>
              </li>
            ) : (
              <li key={key}>
                <span
                  className={`block ${
                    pathname === menu.link ? activeClass : ""
                  }`}
                >
                  <Link href={menu.link}>{menu.name}</Link>
                </span>
              </li>
            );
          })}
        </ul>

        <SocialLinks dark={menuDark} />
      </nav>
    </div>
  );
};

export default Menu;
