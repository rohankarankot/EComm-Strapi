import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

import { AiFillPlusCircle } from "react-icons/ai";
import { FaMinusCircle } from "react-icons/fa";
import { useRouter } from "next/router";

const Cart = () => {
  const { items, removeItem, updateItemQuantity } = useCart();

  const { cartTotal } = useCart();
  const router = useRouter();
  const [cartItems, setcartItems] = useState();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      router.push("/login");
    }
    if (items) {
      setcartItems(items);
    }
  }, []);

  console.log("items", items);
  return (
    <div className=" px-2 py-14 w-2/4 ml-20">
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-black-400">
          <thead className="text-xs text-black-700 uppercase bg-gray-100  ">
            <tr>
              <th scope="col" className="py-3 px-6 rounded-l-lg">
                #
              </th>
              <th scope="col" className="py-3 px-6 rounded-l-lg">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Qty
              </th>
              <th scope="col" className="py-3 px-6 rounded-r-lg">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, key) => {
              return (
                <tr key={key} className="bg-white">
                  <td className="py-4 px-6">{key + 1}</td>
                  <th
                    scope="row"
                    className="py-4 px-6   font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {item.name}
                  </th>
                  <td className="py-4  flex align-center ">
                    <FaMinusCircle
                      className="mt-1 mx-2 cursor-pointer text-lg text-gray-600"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    />
                    {item.quantity}
                    <AiFillPlusCircle
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="mt-1 mx-2 cursor-pointer text-xl text-gray-600"
                    />
                  </td>
                  <td className="py-4 px-6">{`${item.quantity} x ${item.price} = ${item.itemTotal}`}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="border-t-2  border-b-2 ">
            <tr className="font-semibold text-gray-900 dark:text-black">
              <td></td>
              <th scope="row" className="py-3 px-6 text-base"></th>
              <td className="py-3 px-6">Total:</td>
              <td className="py-3 px-6">{cartTotal}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Cart;
