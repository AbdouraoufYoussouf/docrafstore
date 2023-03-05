import Link from "next/link";
import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { FaPlusSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const CardProduct = ({ product }) => {
  const { addProductSee, addProductCart } = useContext(ProductContext);

  const name = product?.name;
  const path = name?.split(" ").join("_");

  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div className=" bg-gray-100 dark:bg-gray-800 text-gray-200 w-60 h-[310px] text-gray-800 dark:text-gray-200 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 dark:hover:text-white rounded-lg flex flex-col justify-between shadow-card max-lg:w-52">
      <div className=" bg-gray-300 dark:bg-gray-900 p-1 m-2 rounded-lg flex justify-center">
        <Link href={`/product/${path}`}>
          <img
            src={product?.images[0]}
            className="h-32 w-auto cursor-pointer"
            alt={product?.name} onClick={()=>addProductSee(product._id)}
          />
        </Link>
      </div>
      <div className="mx-2">
        <h3 className="font-bold  text-lg leading-6 max-md:leading-5 max-sm:leading-4 max-md:mb-1 max-md:text-box ">
          {product?.name}
        </h3>
      </div>
      <p className="text-xm mx-2 mt-1 leading-5 text-box max-xm:text-[15px] max-md:leading-none dark:text-gray-400">
        {" "}
        {product?.description}
      </p>
      <div className="flex m-2">
        <div className="text-2xl font-bold grow">{product?.price}€</div>
        <button onClick={() => addProductCart(product._id)}>
          {" "}
          <FaPlusSquare className="text-red-500 icon" size={30} />
        </button>
      </div>
    </div></motion.div>
  );
};

export default CardProduct;
