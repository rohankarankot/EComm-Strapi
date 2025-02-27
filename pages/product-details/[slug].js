import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GET_PRODUCT_DETAILS } from "../../gql/queries";
import { useQuery } from "@apollo/client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useCart } from "react-use-cart";
const Slug = () => {
  const { addItem } = useCart();
  const [pin, setPin] = useState();
  const [service, setService] = useState("");
  const [productDetails, setProductDetails] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS, {
    variables: { productId: slug },
  });
  useEffect(() => {
    if (slug) {
      if (data) {
        console.log("data", data);
        setProductDetails(data);
      }
      console.log("productDetails", productDetails?.product?.data?.attributes);
    }
  }, [data, productDetails, slug]);

  const checkServicability = async () => {
    let pincodes = await fetch("http://localhost:3000/api/pincode");
    let res = await pincodes.json();
    if (res.includes(parseInt(pin))) {
      setService("Yep can deliver");
    } else {
      setService("Sorry, can't Deliver");
    }
  };
  const addToCart = () => {
    addItem({
      id: slug,
      name: data.product.data.attributes.name,
      price: data.product.data.attributes.price,
      image: data.product.data.attributes.images.data[0].attributes.url,
    });
    alert("added to cart");
  };
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className=" px-2 py-12 mx-auto">
          <div className=" mx-auto flex flex-wrap">
            {/* <Image
              width={400}
              height={500}
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-40 object-cover object-center rounded"
              src="https://wpkoi.com/demos6/ashram/wp-content/uploads/sites/9/2019/01/tshirt-2.jpg"
            /> */}
            <Carousel
              className=" w-2/4  justify-center align-center"
              autoPlay
              infiniteLoop
              swipeable
              showThumbs={false}
              thumbWidth
            >
              {productDetails?.product?.data?.attributes?.images.data.map(
                (product, index) => {
                  return (
                    <div key={index}>
                      <Image
                        width={900}
                        className="w-full h-40 object-cover object-top rounded bg-slate-50"
                        height={800}
                        alt="ecommerce"
                        src={`http://localhost:1337${product?.attributes?.url}`}
                      />
                    </div>
                  );
                }
              )}
            </Carousel>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {productDetails?.product?.data?.attributes.brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {productDetails?.product?.data?.attributes.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed line-clamp-4">
                {productDetails?.product?.data?.attributes.description}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{" "}
                  {productDetails?.product?.data?.attributes.price
                    .toFixed(1)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                  /-
                </span>
                {productDetails?.product?.data?.attributes.AvailableQty > 0 ? (
                  <div className="flex flex-wrap">
                    <button
                      className="flex ml-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                      onClick={addToCart}
                    >
                      Add to cart
                    </button>
                    <button className="flex ml-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                      Buy now
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-wrap">
                      <button
                        disabled
                        className="  flex ml-4 text-white bg-indigo-200 border-0 py-2 px-6 focus:outline-none rounded"
                      >
                        Add to cart
                      </button>
                      <button
                        disabled
                        className="  flex ml-4 text-white bg-indigo-200 border-0 py-2 px-6 focus:outline-none rounded"
                      >
                        Buy now
                      </button>
                    </div>
                    <p className="text-center text-red-600">Out of Stock!!!</p>
                  </div>
                )}
              </div>
              <hr className="my-3" />
              <div className=" py-2 w-3/4 mr-2 flex gap-2">
                <input
                  type="text"
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    setService("");
                  }}
                  placeholder="Enter pincode"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button
                  className=" text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  onClick={checkServicability}
                >
                  check
                </button>
              </div>
              {service}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slug;
