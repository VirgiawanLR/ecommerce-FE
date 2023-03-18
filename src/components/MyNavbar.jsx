import React, { useState } from "react";
//
import { Link } from "react-router-dom";

function MyNavbar() {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const hamButton = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    if (window.scrollY > fixedNav) {
      header.classList.add("fixed-nav");
    } else {
      header.classList.remove("fixed-nav");
    }
  };

  return (
    <header
      className=" bg-transparent absolute top-0 left-0 w-full
  items-center z-10 transition duration-300"
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-8">
            <a
              href="#"
              className="no-underline font-extrabold text-secondary main-font
               text-base block py-6 lg:text-2xl"
            >
              My
              <span
                className="text-xl font-extrabold text-primary
              lg:text-3xl"
              >
                Emerce
              </span>
            </a>
          </div>
          <div className="flex items-center gap-10 md:gap-0">
            <div className="flex items-center gap-1 group">
              <i class="uil uil-user-circle text-primary text-3xl hover:cursor-pointer"></i>
              <span
                className=" text-sm text-dark font-bold group-hover:text-primary
                group-hover:cursor-pointer"
              >
                Profil
              </span>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                onClick={hamButton}
                className={
                  hamburgerClicked
                    ? "block absolute right-4 hamburger-active md:hidden"
                    : "block absolute right-4 md:hidden"
                }
              >
                <span className="hamburger-line origin-top-left"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line origin-bottom-left"></span>
              </button>
            </div>
            <div
              id="nav-menu"
              className={
                hamburgerClicked
                  ? [
                      "absolute py-5 bg-white shadow-lg max-w-[250px]",
                      "w-full rounded-lg top-16 right-2 md:static",
                      "md:bg-transparent md:max-w-full",
                    ].join(" ")
                  : "hidden md:static md:block md:bg-transparent"
              }
            >
              <ul className="block text-dark md:flex">
                <li className="group">
                  <button
                    className="no-underline text-base py-2 mx-8 group-hover:text-primary
                  lg:mx-4"
                  >
                    Cart
                  </button>
                </li>
                <li className="group">
                  <button
                    className="no-underline text-base py-2 mx-8 group-hover:text-primary
                  lg:mx-4"
                  >
                    History
                  </button>
                </li>
                <li className="group">
                  <button
                    className="no-underline text-base py-2 mx-8 group-hover:text-primary
                  lg:mx-4"
                  >
                    Admin
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MyNavbar;
