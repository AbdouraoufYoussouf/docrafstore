import Link from "next/link";
import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

const CategorieProduct = ({ product }) => {
  const { selectProducts, addProductCart } = useContext(ProductContext);

  const name = product?.name;
  const path = name?.split(" ").join("_");

  return (
    <div className="  h-full hover:bg-violet-600 hover:text-white p-2 rounded-lg flex flex-col w-auto justify-between shadow-card ">
      <div className="bg-blue-100 p-2 rounded-lg flex justify-center">
        <Link className="card " href={`/product/${path}`}>
          <img src={product?.images[0]} className="w-32 cursor-pointer" alt={product?.name} />
        </Link>
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-lg"></h3>
        <h3 className="font-bold text-lg">{product?.name}</h3>
      </div>
      <p
        className="text-sm mt-2 leading-4 text-box font-italic"
      >
        {" "}
        {product?.description}
      </p>
      <div className="flex mt-2">
        <div className="text-2xl font-bold grow">{product?.price}€</div>
        <button onClick={() => addProductCart(product._id)}>
          {" "}
          <FaPlusSquare className="text-red-500 icon" size={30} />
        </button>
      </div>
    </div>
  );
};

export default CategorieProduct;
