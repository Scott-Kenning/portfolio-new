"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Nav = () => {
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    const handleScroll = () => {
      if (!isMobile) return;

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <header
      className={`w-screen absolute lg:fixed h-16 top-0 left-0 bg-black flex items-center border-b border-white/10 z-50 p-4 lg:p-0 transition-transform duration-300 ${
        isMobile && !visible ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="h-100 w-full mx-auto max-w-5xl flex justify-between items-center">
        <Link
          href="/#hero"
          className="font-mono text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500"
        >
          &lt;sk/&gt;
        </Link>
        <div className="flex gap-x-4 font-semibold">
          <Link className="text-neutral-300" href="/#experience">
            Experience
          </Link>
          <Link className="text-neutral-300" href="/#projects">
            Projects
          </Link>
          <Link className="text-neutral-300" href="/#contact">
            Contact
          </Link>
          {/* Commenting this out until I have more writing */}
          {/* <Link className="text-neutral-300" href="/blog">Blog</Link> */}
        </div>
      </div>
    </header>
  );
};

export default Nav;
