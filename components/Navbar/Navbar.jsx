"use client";

import { Cinzel_Decorative } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaRegChartBar } from "react-icons/fa6";

const cinzel_decorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setOpen(!open);
  };

  
  const isActive = (path) =>
    pathname === path
      ? "text-yellow-400 font-bold"
      : "text-white hover:text-yellow-300";

  
  const bgClasses =
    pathname === "/"
      ? "bg-black shadow-lg"
      : "bg-slate-900";

  return (
    <div className={`py-8 lg:py-4 fixed top-0 w-full z-50 transition-all duration-300 ${bgClasses}`}>
      <div className="max-w-6xl px-4 lg:px-0 w-full mx-auto">
        
   
        <div className="max-w-3xl lg:hidden w-full mx-auto relative lg:static">
          {open ? (
            <ul className="flex justify-between flex-col">
              <li>
                <Link
                  href="/"
                  className={`${cinzel_decorative.className} ${isActive(
                    "/"
                  )} transition-all duration-300 uppercase`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className={`${cinzel_decorative.className} ${isActive(
                    "/about"
                  )} transition-all duration-300 uppercase`}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/skill"
                  className={`${cinzel_decorative.className} ${isActive(
                    "/skill"
                  )} transition-all duration-300 uppercase`}
                >
                  Skill
                </Link>
              </li>

              <li>
                <Link
                  href="/project"
                  className={`${cinzel_decorative.className} ${isActive(
                    "/project"
                  )} transition-all duration-300 uppercase`}
                >
                  Project
                </Link>
              </li>

              <li>
                <Link
                  href="/social"
                  className={`${cinzel_decorative.className} ${isActive(
                    "/social"
                  )} transition-all duration-300 uppercase`}
                >
                  Social Work
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className={`${cinzel_decorative.className} ${isActive(
                    "/contact"
                  )} transition-all duration-300 uppercase`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          ) : null}
        </div>

        
        <FaRegChartBar
          className={`text-3xl lg:hidden fixed cursor-pointer top-2 right-4 transition-all duration-300 ${
            pathname === "/" ? "text-black" : "text-white"
          }`}
          onClick={handleClick}
        />

       
        <div className="max-w-3xl hidden lg:block w-full mx-auto relative lg:static">
          <ul className="flex justify-between flex-row">
            <li>
              <Link
                href="/"
                className={`${cinzel_decorative.className} ${isActive(
                  "/"
                )} transition-all duration-300 uppercase`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={`${cinzel_decorative.className} ${isActive(
                  "/about"
                )} transition-all duration-300 uppercase`}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/skill"
                className={`${cinzel_decorative.className} ${isActive(
                  "/skill"
                )} transition-all duration-300 uppercase`}
              >
                Skill
              </Link>
            </li>

            <li>
              <Link
                href="/project"
                className={`${cinzel_decorative.className} ${isActive(
                  "/project"
                )} transition-all duration-300 uppercase`}
              >
                Project
              </Link>
            </li>

            <li>
              <Link
                href="/social"
                className={`${cinzel_decorative.className} ${isActive(
                  "/social"
                )} transition-all duration-300 uppercase`}
              >
                Social Work
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`${cinzel_decorative.className} ${isActive(
                  "/contact"
                )} transition-all duration-300 uppercase`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
