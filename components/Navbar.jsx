import Link from "next/Link";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useRef } from "react";

const Navbar = () => {
  const router = useRouter();
  const Sideref = useRef();
  const toggleCart = () => {
    if (Sideref.current.classList.contains("translate-x-full")) {
      Sideref.current.classList.remove("translate-x-full");
      Sideref.current.classList.add("translate-x-0");
    } else if (!Sideref.current.classList.contains("translate-x-full")) {
      Sideref.current.classList.remove("translate-x-0");
      Sideref.current.classList.add("translate-x-full");
    }
  };
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
            <Link href={"/tshirts"}>
              <a
                className={`${
                  router.pathname === "/tshirts" && "border-b-2 border-gray-900"
                }  mx-5 hover:text-gray-900 active:`}
              >
                T Shirts{" "}
              </a>
            </Link>
            <Link href={"/contact"}>
              <a
                className={`${
                  router.pathname === "/contact" && "border-b-2 border-gray-900"
                }  mx-5 hover:text-gray-900 active:`}
              >
                Contact{" "}
              </a>
            </Link>
          </nav>
          <button
            className="border-0 py-1 px-3rounded mt-4 md:mt-0 text-black text-2xl absolute top-4 right-4 "
            onClick={toggleCart}
          >
            <BsFillCartFill />
          </button>
        </div>
      </header>
      <div className="xl:h-16 h-36"></div>
      <div
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
      </div>
    </>
  );
};

export default Navbar;
