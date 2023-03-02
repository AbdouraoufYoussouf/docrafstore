import Link from "next/link";
import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

const CardProduct = ({ product }) => {
  const { selectProducts, addProductCart } = useContext(ProductContext);

  const name = product?.name;
  const path = name?.split(" ").join("_");

  return (
    <div className=" bg-gray-100 w-60 h-full text-gray-800 hover:bg-violet-600 hover:text-white rounded-lg flex flex-col justify-between shadow-card max-lg:w-52">
    <div className="h-32 bg-white m-2 rounded-lg flex justify-center">
      <Link className="card " href={`/product/${path}`}>
        <img src={product?.images[0]} className="w-32 cursor-pointer" alt={product?.name} />
      </Link>
    </div>
    <div className="mx-2">
      <h3 className="font-bold  text-lg leading-6 max-md:leading-5 max-sm:leading-4 max-md:mb-1 max-md:text-box ">{product?.name}</h3>
    </div>
    <p
      className="text-xm mx-2 mt-1 leading-5 text-box max-xm:text-[15px] max-md:leading-none "
    >
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
  </div>
    
  );
};

export default CardProduct;
