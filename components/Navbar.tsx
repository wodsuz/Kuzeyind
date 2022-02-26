import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const Nav = () => {
  const logo = require("../public/logonew2.jpg");
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    console.log(icon);
    console.log(theme);
    setTheme(theme === "light" ? "dark" : "light");
  };
  const icon =
    theme === "light" ? (
      <BsMoonFill className="w-7 h-7 md:w-10 md:h-10" />
    ) : (
      <BsFillSunFill className="w-7 h-7 md:w-10 md:h-10" />
    );
  return (
    <div>
      <header className="border-b sticky top-0 z-20 dark:border-0 dark:bg-dark-100 dark:text-primary ">
        <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <Image
                src={logo}
                alt={"topicon"}
                layout="fixed"
                objectFit="cover"
                className="rounded-full"
                height={30}
                width={30}
              />
              <span className="text-md md:text-lg pt-1 font-bold align-top pl-2">
                Kuzey ind &copy; Order{" "}
              </span>
            </a>
          </Link>
          <div>
            <button onClick={changeTheme} aria-label="theme change">
              {icon}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Nav;
