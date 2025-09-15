"use client";
import { memo } from "react";
import Link from "next/link";
const Nav = ({ data }) => {
  return (
    <nav className="main-menu">
      <ul className="flex justify-center space-x-4 w-full">
        {data?.map((item) => {
          return (
            <li key={item.id}>
              <Link
                href={item.url}
                className="menu-section text-white-50 hover:text-white-100 hover:underline"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(Nav);
