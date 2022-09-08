import Link from "next/Link";
import Image from "next/image";
import ProductCard from "../components/ProductCard";

const Tshirts = () => {
  return (
    <div>
      <section className="text-gray-600 body-font flex  lg:mx-20  sm:mx-0">
        <div className="container px-5 py-5">
          <div className="flex flex-wrap justify-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tshirts;
