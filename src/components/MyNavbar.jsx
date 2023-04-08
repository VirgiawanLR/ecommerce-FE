import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import { useNavigate } from "react-router-dom";
import { resetUser } from "../features/users/userSlice";

function MyNavbar() {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [profilClicked, setProfilClicked] = useState(false);
  const selector = useSelector((state) => state.user.loginUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hamButton = () => {
    setHamburgerClicked(!hamburgerClicked);
    setProfilClicked(false);
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
      className=" bg-transparent fixed w-full flex
      items-center z-10 transition duration-300"
    >
      <div className="w-full">
        <div className="flex items-center justify-between relative secondary-font">
          <div className="px-8 flex items-center justify-center">
            <span
              onClick={() => navigate("/")}
              className="no-underline hover:cursor-pointer font-extrabold text-secondary main-font
               text-base block py-6 lg:text-2xl"
            >
              My
              <span
                className="text-xl font-extrabold text-primary
              lg:text-3xl"
              >
                Emmerce
              </span>
            </span>
          </div>
          <div className="flex items-center gap-10 md:gap-0">
            {/* check if login succesed or not, if successed render an icon user, if not
            dont do anything */}
            {selector.isSuccess ? (
              <div
                className="flex items-center gap-1 group"
                onClick={() => {
                  setProfilClicked(!profilClicked);
                  setHamburgerClicked(false);
                }}
              >
                <i className="uil uil-user-circle text-primary text-3xl hover:cursor-pointer"></i>
                <span
                  className=" text-base text-dark font-bold group-hover:text-primary
              group-hover:cursor-pointer"
                >
                  {selector.username}
                </span>
                {profilClicked && (
                  <div className="modal-container relative z-40">
                    <div
                      className="absolute py-5 bg-white shadow-lg max-w-[200px]
                      w-3/4 rounded-lg top-20 right-2 md:right-52 z-50"
                    >
                      <ul className="block text-dark mx-4">
                        <li className="group">
                          <button
                            className="no-underline text-sm py-2 mx-4 hover:text-primary
                            lg:ml-3 flex items-center"
                            onClick={() => {
                              navigate("/product");
                            }}
                          >
                            My-Products
                            <i className="uil uil-luggage-cart text-2xl pl-1"></i>
                          </button>
                        </li>
                        <li className="group">
                          <button
                            className="no-underline text-sm py-2 mx-4 hover:text-primary
                            lg:ml-3 flex items-center"
                          >
                            History
                            <i className="uil uil-history text-2xl pl-1"></i>
                          </button>
                        </li>
                        <li className="group">
                          <button
                            className="no-underline text-sm py-2 mx-4 hover:text-primary
                  lg:ml-3 flex items-center"
                            onClick={() => {
                              //hapus local storage untuk token login
                              localStorage.removeItem("token_shutter");
                              //hapus global state userlogin
                              dispatch(resetUser());
                              // setelah logout redirect to login page
                              navigate("/login");
                              // setelah klik button, hamburger hilang
                              setHamburgerClicked(false);
                            }}
                          >
                            Logout
                            <i className="uil uil-signout text-2xl pl-1"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
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
              <ul className="block text-dark md:flex lg:mr-4">
                {selector.isAdmin ? (
                  <li className="group">
                    <button
                      className="no-underline text-sm py-2 mx-4 group-hover:text-primary
                  lg:ml-3 flex items-center"
                    >
                      Admin
                      <i className="uil uil-key-skeleton text-2xl pl-1"></i>
                    </button>
                  </li>
                ) : null}
                {selector.isSuccess ? (
                  <>
                    <li className="group">
                      <button
                        className="no-underline text-sm py-2 mx-4 group-hover:text-primary
                  lg:ml-3 flex items-center"
                      >
                        {hamburgerClicked && "Cart"}
                        <i className="uil uil-shopping-cart text-2xl pl-1 hover:cursor-pointer"></i>
                      </button>
                    </li>
                    <li className="group">
                      <button
                        className="no-underline text-sm py-2 mx-4 group-hover:text-primary
                   flex items-center"
                      >
                        {hamburgerClicked && "Notification"}
                        <i className="uil uil-bell text-2xl pl-1 hover:cursor-pointer"></i>
                      </button>
                    </li>
                    <li className="group">
                      <button
                        className="no-underline text-sm py-2 mx-4 group-hover:text-primary
                   flex items-center"
                      >
                        {hamburgerClicked && "Chat"}
                        <i className="uil uil-comment text-2xl pl-1 hover:cursor-pointer"></i>
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="group">
                      <button
                        onClick={() => {
                          navigate("/login");
                          setHamburgerClicked(false);
                        }}
                        className="no-underline text-sm py-2 mx-4 group-hover:text-primary
                  lg:ml-3"
                      >
                        Login
                      </button>
                    </li>
                    <li className="group">
                      <button
                        onClick={() => {
                          navigate("/register");
                          setHamburgerClicked(false);
                        }}
                        className="no-underline text-sm py-2 mx-4 group-hover:text-primary
                  lg:ml-3"
                      >
                        Sign-Up
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MyNavbar;
