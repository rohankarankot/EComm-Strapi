import Image from "next/image";
import Link from "next/Link";
import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div>
      <div className="m-2 p-4 w-full hover:shadow-lg ">
        <Link href={`/product-details/${data?.id}`}>
          <a className="block relative rounded overflow-hidden">
            <Image
              alt="ecommerce"
              width={600}
              height={600}
              layout="responsive"
              loading="lazy"
              className="object-scale-down w-full block  h-45"
              src={`http://localhost:1337${data?.attributes?.images?.data[0]?.attributes?.url}`}
            />
          </a>
        </Link>
        <div className="mt-4 flex gap-4 justify-between">
          <div>
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {data?.attributes?.category?.data?.attributes?.name}
            </h3>
            <p className="text-gray-900 text-md font-semibold truncate w-40">
              {data?.attributes?.name}
            </p>
            <b className="mt-1">
              ₹{" "}
              {data?.attributes?.price
                .toFixed(1)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </b>
          </div>
          <div className="flex-col justify-center content-center text-center">
            <button className="p-1  bg-green-500 text-white">
              Add to cart
            </button>
            <br />
            <button className=" p-1 cursor-pointer mt-1 bg-yellow-400 text-white">
              Buy now!!!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
