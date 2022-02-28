import { useState, useEffect, FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  className: string;
  target: string;
  route: string;
}> = ({ active, setActive, name, className, target, route }) => {
  return (
    <span>
      {name === "Order Samples" ? (
        <Link href={route}>
          <a target={target}>
            <span
              className="mx-2 cursor-pointer border border-blue-500 
              rounded py-1 px-3 bg-blue-500 text-white
              hover:bg-blue-300"
              onClick={() => setActive("Home")}
            >
              {name}
            </span>
          </a>
        </Link>
      ) : active !== name ? (
        <Link href={route}>
          <a>
            <span
              className="mx-2 cursor-pointer hover:border-b-4 hover:border-sky-500"
              onClick={() => setActive(name)}
            >
              {name}
            </span>
          </a>
        </Link>
      ) : (
        <Link href={route}>
          <a className={className}>
            <span
              className="mx-2 cursor-pointer hover:border-b-4 hover:border-sky-500"
              onClick={() => setActive(name)}
            >
              {name}
            </span>
          </a>
        </Link>
      )}
    </span>
  );
};

const Nav = () => {
  const { pathname } = useRouter();
  const [active, setActive] = useState("");
  const logo = require("../public/logonew2.jpg");
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    console.log(icon);
    console.log(theme);
    setTheme(theme === "light" ? "dark" : "light");
  };
  const icon =
    theme === "light" ? (
      <BsMoonFill className="w-3 h-3 md:w-5 md:h-5 hover:text-gray-400" />
    ) : (
      <BsFillSunFill className="w-3 h-3 md:w-5 md:h-5 hover:text-gray-400" />
    );
  useEffect(() => {
    if (pathname === "/") setActive("Home");
    else if (pathname === "/food") setActive("Food Products");
    else if (pathname === "/medical") setActive("Medical Products");
    else if (pathname === "/aboutus") setActive("About Kuzey");
    else if (pathname === "/faq") setActive("FAQ");
    else if (pathname === "/contact") setActive("Contact");
    else setActive("Home");
  }, [pathname]);
  return (
    <div className="flex items-center justify-between my-3">
      <div className="text-xl font-bold  md:text-2xl ">
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
            <span className="text-base md:text-xl pt-1 font-bold align-top pl-2">
              Kuzey ind &copy;
            </span>
          </a>
        </Link>
      </div>
      <div className="text-base font-normal md:text-xl">
        <NavItem active={active} setActive={setActive} name="Home" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Food Products"
          className="border-b-4 border-sky-500"
          route="/food"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Medical Products"
          className="border-b-4 border-sky-500"
          route="/medical"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="About Kuzey"
          className="border-b-4 border-sky-500"
          route="/aboutus"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="FAQ"
          className="border-b-4 border-sky-500"
          route="/faq"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Contact"
          className="border-b-4 border-sky-500"
          route="/contact"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Order Samples"
          target="_blank"
          route="https://kuzeyind-sample-order.vercel.app/"
        />
        <button onClick={changeTheme} aria-label="theme change">
          {icon}
        </button>
      </div>
    </div>
  );
};

export default Nav;
