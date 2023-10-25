import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/Services",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
  {
    name: "About",
    path: "/About",
  },
];

const Header = () => {
  const isActive = usePathname();
  console.log("blog", isActive);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  container mx-auto py-20 sticky">
      <div className="justify-center">
        <ul>
          <li>
            <a href="/">
              <img src="./image/logo.png" className=" h-20 w-30 " />
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden  md:flex gap-12 items-center justify-self-end lg:justify-center ">
        {navigations.map((navigation, i) => (
          <Link
            className={`flex text-gray-500 font-medium text-xl ${
              isActive === navigation.path
                ? "text-[#D03737]"
                : "hover:text-[#D03737] "
            }`}
            key={i}
            href={navigation.path}
          >
            {navigation.name}
          </Link>
        ))}
      </div>
      <div className=" hidden md:flex gap-12 items-center justify-self-end lg:justify-center ">
        <ul className="text-white px-2 font-medium bg-[#D03737] rounded border">
          <li>
            <a href="/LogIn">Log in</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
