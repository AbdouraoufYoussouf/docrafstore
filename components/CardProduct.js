import Link from "next/link";
import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

const CardProduct = ({ product }) => {
  const {selectProducts, addProductCart } = useContext(ProductContext);

  
  console.log(selectProducts?.length)
  const name = product?.name;
  const path = name.split(" ").join("_");

  return (
    <div className="w-64">
        <div className="bg-blue-100 p-5 rounded-xl">
        <Link className="card" href={`/product/${path}`}>
          <img src={product?.picture} className="image-card" alt={product?.name} />
    </Link>
        </div>
        <div className="mt-2">
          <h3 className="font-bold text-lg"></h3>
          <h3 className="font-bold text-lg">{product?.name}</h3>
        </div>
        <p
          className="text-sm mt-2 leading-4"
          style={{
            textAlign: "start",
            display: "inline-block",
            overflow: "hidden",
            maxHeight: 70 /* (Number of lines you want visible) * (line-height) */,
            lineHeight: 1.2,
            textAlign: "justify",
          }}
        >
          {" "}
          {product?.description}
        </p>
        <div className="flex mt-1">
          <div className="text-2xl font-bold grow">${product?.price}</div>
          <button onClick={()=> addProductCart(product._id)}>
            {" "}
            <FaPlusSquare className="btn bg-emerald-400" size={30} />
          </button>
        </div>
      </div>
  );
};

export default CardProduct;
