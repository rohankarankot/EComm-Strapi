import Link from "next/Link";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../gql/queries";
import ProductCard from "./ProductCard";
import Loading from "../utils/Loading";
import { useState, useEffect } from "react";
const HomeContent = () => {
  const [allProductData, setAllProductData] = useState();
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);
  useEffect(() => {
    if (data) {
      setAllProductData(data.products.data);
    }
  }, [data]);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            width={600}
            height={300}
            src="https://source.unsplash.com/random/920x600"
          />
          <div className="text-center lg:w-2/3 w-full" />
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-justify">
            A place for Geekers by Geekers to Geekers
          </h1>
          <hr />
          {/* <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-800 border-0 py-2 my-5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Explore Now!!!
            </button>
          </div> */}
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5">
          <div className="flex flex-wrap -m-4 justify-center">
            {loading ? (
              <Loading />
            ) : (
              <>
                {allProductData?.map((product, index) => {
                  console.log("allProductData", allProductData);
                  return (
                    <div key={index}>
                      <ProductCard data={product} />
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomeContent;
