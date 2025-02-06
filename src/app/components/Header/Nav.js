"use client";
import { memo } from "react";
const Nav = ({ data }) => {


  return (
    <nav>
      <ul className="flex justify-center space-x-4 w-full">
        {data?.map((item) => {
          return (
            <li key={item.id}>
              <a
                href={item.url}
                className="menu-section text-white-50 hover:text-white-100 hover:underline"
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(Nav);
