import Link from "next/Link";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const router = useRouter();
  const Sideref = useRef();
  const [loggedIn, setLoggedIn] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const toggleCart = () => {
    if (Sideref.current.classList.contains("translate-x-full")) {
      Sideref.current.classList.remove("translate-x-full");
      Sideref.current.classList.add("translate-x-0");
    } else if (!Sideref.current.classList.contains("translate-x-full")) {
      Sideref.current.classList.remove("translate-x-0");
      Sideref.current.classList.add("translate-x-full");
    }
  };
  useEffect(() => {
    let token = localStorage.getItem("jwt");
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <header className="text-gray-600 body-font bg-slate-100  supports-backdrop-blur:bg-white/90 opacity-80  fixed  w-full shadow-md mb-3 z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-black ">
          <Link href={"/"}>
            <a className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0 text-2xl">
              Coders Stop
            </a>
          </Link>
          <nav className="md:mr-auto flex flex-wrap items-center text-base justify-center font-semibold mr-10">
            <Link href={"/"}>
              <a
                className={`${
                  router.pathname === "/" && "border-b-2 border-gray-900"
                } lg:ml-20 mx-5 hover:text-gray-900 active:`}
              >
                Home
              </a>
            </Link>
            <Link href={"/about"}>
              <a
                className={`${
                  router.pathname === "/about" && "border-b-2 border-gray-900"
                }  mx-5 hover:text-gray-900 active:`}
              >
                About
              </a>
            </Link>

            <Link href={"/contact"}>
              <a
                className={`${
                  router.pathname === "/contact" && "border-b-2 border-gray-900"
                }  mx-5 hover:text-gray-900 active:`}
              >
                Contact
              </a>
            </Link>
          </nav>
          {loggedIn ? (
            <>
              <div className="relative inline-block text-left lg:mr-10">
                <div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setOpenMenu(openMenu ? false : true);
                    }}
                  ></form>
                </div>
              </div>
              <button
                className="border-0 py-1 px-3 rounded mt-4 md:mt-0 text-black text-2xl absolute top-4 right-4 "
                // onClick={toggleCart}
              >
                <div className="inline-flex absolute -top-2 -right-1 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-blue-500 rounded-full ">
                  23
                </div>
                <BsFillCartFill />
              </button>
              <Menu as="div" className="relative inline-block text-left">
                <div className="mr-20">
                  <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none  ">
                    Account
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            My Profile
                          </a>
                        )}
                      </Menu.Item>

                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                              onClick={() => {
                                try {
                                  localStorage.setItem("jwt", "");
                                  router.push("/login");
                                  router.reload();
                                } catch (error) {
                                  console.log("error", error);
                                } finally {
                                  // window.location.reload(false);
                                }
                              }}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <button
                className="border-0 py-1 px-3 rounded mt-4 md:mt-0 text-black text-2xl absolute top-4 right-4 "
                // onClick={toggleCart}
              >
                <div className="inline-flex absolute -top-2 -right-1 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-blue-500 rounded-full ">
                  23
                </div>
                <BsFillCartFill />
              </button>
            </>
          ) : (
            <div>
              <Link href={"/login"}>
                <a
                  className={`${
                    router.pathname === "/login" && "border-b-2 border-gray-900"
                  }  mx-2 hover:text-gray-900 active:`}
                >
                  Login
                </a>
              </Link>
              <Link href={"/signup"}>
                <a
                  className={`${
                    router.pathname === "/signup" &&
                    "border-b-2 border-gray-900"
                  }  mx-5 hover:text-gray-900 active:`}
                >
                  Register
                </a>
              </Link>
            </div>
          )}
        </div>
      </header>
      <div className="xl:h-16 h-36"></div>
      {/* <div
        className="sidebar absolute top-0 right-0 z-50 bg-blue-100 p-10 transform transition-transform   translate-x-full w-72 h-full"
        ref={Sideref}
      >
        <h2 className="mb-4 border-b-2 border-black text-center">
          <b className="text-xl">Shopping cart</b>
        </h2>
        <span
          className="absolute top-5 right-5 cursor-pointer"
          onClick={toggleCart}
        >
          <AiFillCloseCircle size={"1.5em"} className="text-blue-900" />
        </span>
        <ol className="list-decimal">
          <li>
            <div className="flex justify-between items-center pb-4">
              <div className="w-2/3 font-semibold">T Shirt - round neck</div>
              <div className="w-1/3 flex justify-center items-center text-blue-900">
                <AiFillPlusCircle />
                <span className="mx-3">1</span>
                <AiFillMinusCircle />
              </div>
            </div>
          </li>

          <li>
            <div className="flex justify-between items-center pb-4">
              <div className="w-2/3 font-semibold">T Shirt - round neck</div>
              <div className="w-1/3 flex justify-center items-center text-blue-900">
                <AiFillPlusCircle />
                <span className="mx-3">1</span>
                <AiFillMinusCircle />
              </div>
            </div>
          </li>

          <li>
            <div className="flex justify-between items-center pb-4">
              <div className="w-2/3 font-semibold">T Shirt - round neck</div>
              <div className="w-1/3 flex justify-center items-center text-blue-900">
                <AiFillPlusCircle />
                <span className="mx-3">1</span>
                <AiFillMinusCircle />
              </div>
            </div>
          </li>
        </ol>
        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-1 my-5  px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Checkout
        </button>
      </div> */}
    </>
  );
};

export default Navbar;
