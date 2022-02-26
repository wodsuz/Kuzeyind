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
  target: string;
  route: string;
}> = ({ active, setActive, name, target, route }) => {
  return (
    <span>
      {name === "Order Samples" ? (
        <Link href={route}>
          <a target={target}>
            <span
              className="mx-2 cursor-pointer border border-blue-500 
              rounded py-1 px-3 bg-blue-500 text-white
              hover:bg-blue-300"
              onClick={() => setActive(name)}
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
      ) : null}
    </span>
  );
};
/*
  active !== name ? (
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
  ) : null;
};
*/
const Nav = () => {
  const { pathname } = useRouter();
  const [active, setActive] = useState("");
  const logo = require("../public/logonew2.jpg");

  useEffect(() => {
    if (pathname === "/") setActive("Home");
    else if (pathname === "/food") setActive("Food Products");
    else if (pathname === "/medical") setActive("Medical Products");
    else if (pathname === "/aboutus") setActive("About Kuzey");
  }, [pathname]);
  return (
    <div className="flex items-center justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 md:text-2xl border-sky-500">
        {active}
      </span>
      <div className="text-base font-normal md:text-xl">
        <NavItem active={active} setActive={setActive} name="Home" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Food Products"
          route="/food"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Medical Products"
          route="/medical"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="About Kuzey"
          route="/aboutus"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="FAQ"
          route="/faq"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Contact"
          route="/contact"
        />
        <NavItem
          active="Home"
          setActive={setActive}
          name="Order Samples"
          target="_blank"
          route="https://kuzeyind-sample-order.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Nav;
