"use client";
import { useState, useRef, useEffect } from "react";
const Filter = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Toggle dropdown function
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
    return (
        <>
              {/* Dropdown Button */}
              <div className="relative inline-block text-right w-1/12">
                <button ref={buttonRef} onClick={toggleDropdown}>
                  <svg
                    width="35"
                    height="47"
                    viewBox="0 0 35 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.0616 43.9868C24.1491 44.7652 23.9304 45.5955 23.4273 46.1404C23.225 46.3809 22.9846 46.5718 22.72 46.702C22.4554 46.8322 22.1718 46.8992 21.8853 46.8992C21.5989 46.8992 21.3152 46.8322 21.0506 46.702C20.786 46.5718 20.5457 46.3809 20.3434 46.1404L11.5727 35.7357C11.3343 35.4589 11.153 35.1206 11.043 34.747C10.9329 34.3734 10.8972 33.9748 10.9384 33.5821V20.2973L0.461734 4.39187C0.106551 3.85096 -0.0537144 3.16525 0.0159568 2.48459C0.0856281 1.80393 0.379572 1.18366 0.833558 0.759308C1.24913 0.396052 1.70844 0.188477 2.18962 0.188477H32.8104C33.2916 0.188477 33.7509 0.396052 34.1664 0.759308C34.6204 1.18366 34.9144 1.80393 34.984 2.48459C35.0537 3.16525 34.8934 3.85096 34.5383 4.39187L24.0616 20.2973V43.9868ZM6.6515 5.37785L15.3128 18.507V32.8296L19.6872 38.019V18.481L28.3485 5.37785H6.6515Z"
                      fill="#BFBFBF"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div
                  ref={dropdownRef}
                  className={`origin-top-right absolute left-0 mt-2 min-w-max rounded-md shadow-lg bg-[#212121]  ring-black ring-opacity-5 ${
                    isDropdownOpen ? "" : "hidden"
                  }`}
                >
                  <div
                    className="py-2 p-2"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    <a
                      className="flex block rounded-md px-2 py-2 text-sm text-white hover:bg-gray-800 active:bg-blue-100 cursor-pointer"
                      role="menuitem"
                    >

                      Ordem A - Z
                    </a>
                    <a
                      className="flex block rounded-md px-2 py-2 text-sm text-white hover:bg-gray-800 active:bg-blue-100 cursor-pointer"
                      role="menuitem"
                    >

                      Ordem Z - A
                    </a>
                    <a
                      className="flex block rounded-md px-2 py-2 text-sm text-white hover:bg-gray-800 active:bg-blue-100 cursor-pointer"
                      role="menuitem"
                    >
                      Ano
                    </a>
                  </div>
                </div>
              </div>
        </>
    );
}

export default Filter;