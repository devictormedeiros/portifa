"use client";
import { memo } from "react";
import SmartLink from "@/app/components/SmartLink";

const Nav = ({ data }) => {
  return (
    <nav className="main-menu">
      <ul className="flex justify-center space-x-4 w-full">
        {data?.map((item) => {
          return (
            <li key={item.id}>
              <SmartLink
                href={item.url}
                className="menu-section text-white-50 hover:text-white-100 hover:underline"
              >
                {item.title}
              </SmartLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(Nav);
