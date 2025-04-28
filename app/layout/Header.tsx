// Add client directive
"use client";
import React from "react";
import Link from "next/link";
import { HeaderProps, NavItem } from "../../types/header.types";
import { defaultNavItems } from "../../data/headerData";

const HeaderPage: React.FC<HeaderProps> = ({
  logoText = "HOME",
  logoHref = "/#home",
  navItems = defaultNavItems,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-[15px] h-[50px] bg-black">
      <Link
        href={logoHref}
        className="text-[30px] font-bold bg-gradient-to-br from-purple-500 to-indigo-600 bg-clip-text text-transparent"
      >
        {logoText}
      </Link>
      <nav className="space-x-8 text-[30px]">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="bg-gradient-to-br from-purple-500 to-indigo-600 bg-clip-text text-transparent"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default HeaderPage;
