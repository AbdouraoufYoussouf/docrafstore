import Link from "next/link";
import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { FaPlusSquare} from "react-icons/fa";


const CategorieProduct = ({ product }) => {
  const { addProductSee, addProductCart } = useContext(ProductContext);

  const name = product?.name;
  const path = name?.split(" ").join("_");
  //console.log(product._id)

  return (
    <div className=" bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-violet-600 hover:text-white rounded-lg flex flex-col w-auto justify-between shadow-card dark:hover:bg-violet-600 dark:hover:text-white">
      <div className=" bg-gray-200 dark:bg-gray-900 p-1 cursor-pointer m-2 rounded-lg flex justify-center">
        <Link href={`/product/${path}`}  >
          <img
            src={product?.images[0]}
            className=" w-auto h-32"
            alt={product?.name} onClick={()=>addProductSee(product._id)}
          />
        </Link>
      </div>
      <div className="mx-2">
      <Link href={`/product/${path}`}  >
        <h3 className="font-bold  text-lg leading-6 max-md:leading-5 max-sm:leading-4 max-md:mb-1 max-lg:text-box ">
          {product?.name}
        </h3>
        </Link>
      </div>
      <p className="text-xm m-2 leading-5 text-box max-xm:text-[15px] max-md:leading-none dark:text-gray-400">
        {" "}
        {product?.description}
      </p>
      <div className="flex mx-2 mb-1">
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
