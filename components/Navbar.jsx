import Link from "next/Link";
import { useCart } from "react-use-cart";
import { BsFillCartFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const router = useRouter();
  const { items } = useCart();
  const [loggedIn, setLoggedIn] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

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
              <div className="border-0 py-1 px-3 rounded mt-4 md:mt-0 text-black text-2xl absolute top-4 right-4 ">
                <div className="inline-flex absolute -top-2 -right-1 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-blue-500 rounded-full ">
                  23
                </div>
                <BsFillCartFill />
              </div>
              <Menu as="div" className="relative inline-block text-left">
                <div className="mr-20">
                  <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none  ">
                    Hi, {localStorage.getItem("user")}
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
              <div
                className="border-0 py-1 px-3 rounded mt-4 md:mt-0 text-black text-2xl absolute top-4 right-4 "
                // onClick={toggleCart}
              >
                <div className="inline-flex absolute -top-2 -right-1 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-blue-500 rounded-full ">
                  {items.length}
                </div>
                <Link href={"/cart"}>
                  <a>
                    <BsFillCartFill className="pointer" />
                  </a>
                </Link>
              </div>
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
    </>
  );
};

export default Navbar;
