import Image from "next/image";
import Link from "next/Link";
import React from "react";
import TostAlert from "./TostAlert";
import { tostSuccess } from "./TostAlert";
import { useCart } from "react-use-cart";
import { Router, useRouter } from "next/router";

const ProductCard = ({ data }) => {
  const router = useRouter();
  console.log("data", data);
  const { addItem } = useCart();
  const callToast = () => {
    addItem({
      id: data.id,
      name: data.attributes.name,
      price: data.attributes.price,
      image: data.attributes.images.data[0].attributes.url,
    });
    tostSuccess("Item added to cart");
  };
  return (
    <div>
      <TostAlert />
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
            {data?.attributes?.AvailableQty === 0 ? (
              <p className=" text-yellow-200 bg-yellow-400 p-1 cursor-not-allowed mt-5">
                No Stock
              </p>
            ) : (
              <>
                <button
                  className="p-1  bg-green-500 text-white"
                  onClick={callToast}
                >
                  Add to cart
                </button>
                <br />
                <button
                  className=" p-1 cursor-pointer mt-1 bg-yellow-400 text-white"
                  onClick={() => router.push(`/product-details/${data?.id}`)}
                >
                  Buy now!!!
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
