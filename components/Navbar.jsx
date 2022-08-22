import Link from "next/Link";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-slate-100 shadow-md mb-3">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={"/"}>
          <a className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0 text-xl">
            Coders Stop
          </a>
        </Link>
        <nav className="md:mr-auto flex flex-wrap items-center text-base justify-center font-semibold mr-10">
          <Link href={"/"}>
            <a className=" ml-20 mx-5 hover:text-gray-900">Home </a>
          </Link>
          <Link href={"/about"}>
            <a className="mx-5 hover:text-gray-900">About </a>
          </Link>
          <Link href={"/tshirts"}>
            <a className="mx-5 hover:text-gray-900">T Shirts </a>
          </Link>
          <Link href={"/contact"}>
            <a className="mx-5 hover:text-gray-900">Contact </a>
          </Link>
        </nav>
        <Link href={"/cart"}>
          <button className="border-0 py-1 px-3rounded mt-4 md:mt-0 text-black text-2xl absolute top-4 right-4 ">
            <BsFillCartFill />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
