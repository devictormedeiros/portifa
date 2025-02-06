import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
const DrawerMenu = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const customStyles = {
    base: {
      backdrop: { backgroundColor: "var(--black-70)" },
    },
  };
  return (
    <>
      <Button
        onClick={handleOpen}
        variant="gradient"
        className="flex items-center gap-2 px-0"
      >
        <svg
          width="28"
          height="24"
          viewBox="0 0 33 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1.84615C0 0.826551 0.619913 0 1.38462 0H30.9231C31.6878 0 32.3077 0.826551 32.3077 1.84615C32.3077 2.86576 31.6878 3.69231 30.9231 3.69231H1.38462C0.619913 3.69231 0 2.86576 0 1.84615Z"
            fill="#EDEDED"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 12C0 10.9804 0.619913 10.1538 1.38462 10.1538H30.9231C31.6878 10.1538 32.3077 10.9804 32.3077 12C32.3077 13.0196 31.6878 13.8461 30.9231 13.8461H1.38462C0.619913 13.8461 0 13.0196 0 12Z"
            fill="#EDEDED"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 22.1539C0 21.1343 0.619913 20.3077 1.38462 20.3077H30.9231C31.6878 20.3077 32.3077 21.1343 32.3077 22.1539C32.3077 23.1735 31.6878 24 30.9231 24H1.38462C0.619913 24 0 23.1735 0 22.1539Z"
            fill="#EDEDED"
          />
        </svg>
      </Button>

      <Dialog
        open={open}
        size="xxl"
        handler={handleOpen}
        className="menu-hamburger w-full bg-black-70 backdrop-blur-[6px] items-center flex justify-center"
      >
        <DialogBody>
          <Button onClick={handleOpen} className="flex items-center gap-2 px-0">
            <svg
              width="27"
              height="28"
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.71259 25.9602C0.95768 25.2052 0.804686 24.1343 1.37087 23.5681L23.2411 1.69787C23.8073 1.13169 24.8782 1.28468 25.6331 2.0396C26.3881 2.79451 26.5411 3.86547 25.9749 4.43165L4.10465 26.3019C3.53846 26.8681 2.4675 26.7151 1.71259 25.9602Z"
                fill="#EDEDED"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M25.365 25.9602C26.12 25.2052 26.273 24.1343 25.7068 23.5681L3.83654 1.69787C3.27036 1.13169 2.1994 1.28468 1.44449 2.0396C0.689578 2.79451 0.536582 3.86547 1.10277 4.43165L22.973 26.3019C23.5392 26.8681 24.6101 26.7151 25.365 25.9602Z"
                fill="#EDEDED"
              />
            </svg>
          </Button>
          <nav>
            <ul className="w-full text-center">
              {data?.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      className="content-title-h2 text-gray-200 hover:text-white-100 hover:underline uppercase mb-10 block"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default DrawerMenu;
