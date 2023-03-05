import React, { useState, useEffect, useContext, Fragment } from "react";
import { useRouter } from "next/router";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import connectMongo from "../../lib/connectMongo";
import Product from "../../models/Products";

import { ProductContext } from "../../components/ProductContext";
import Recomandation from "../../components/Recomandation";

const ProductDetails = ({ products,product }) => {
  const router = useRouter();
  const path = router.query.name;
  
  const { name,images, description, price } = product || {};
  const [index, setIndex] = useState(0);

  const { addProductCart } = useContext(ProductContext);

  function buyNow(id) {
    addProductCart(id);
    router.push("/ckeckout");
  }
  //c'est pour que si le produit change on reinitialise l'index à 0
  useEffect(() => {
    if (index > 0) {
      setIndex(0);
    }
  }, [path]);

  return (
    <>
      {
        product ? (
          <div className="mb-3" >

            <div className="flex p-4 gap-4 max-lg:flex-col max-sm:p-1 ">
              <div className=" w-[40%] max-lg:h-[350px]  max-lg:w-auto max-h-[500px] border dark:border-gray-500 flex flex-col justify-between bg-gray-200 dark:bg-gray-800 rounded-lg ">
                <div className="flex justify-center p-2 h-[80%]  gap-4 rounded-tl-lg rounded-tr-lg hover:bg-red-400 ">
                  {images?.length > 0 ? <img src={images[index]} className="w-auto h-full" /> : <img src='/logo1.png' className="w-auto h-full" />}
                </div>
                <div className="flex justify-center gap-1 h-[20%] bg-gray-100 dark:bg-gray-700 rounded-bl-lg rounded-br-lg  overflow-auto scrol p-1">
                  {images?.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className={`p-1 h-full cursor-pointer bg-gray-200 dark:bg-gray-900 hover:bg-red-400 dark:hover:bg-red-400  rounded-lg ${i === index ? "bg-red-400 dark:bg-red-400" : ""
                        }`}
                      onMouseEnter={() => setIndex(i)}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between flex-1 gap-2">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-gray-700">{name}</h2>
                  <div className="flex gap-1 items-center">
                    <div className="flex items-center">
                      <AiFillStar className="text-red-600" />
                      <AiFillStar className="text-red-600" />
                      <AiFillStar className="text-red-600" />
                      <AiFillStar className="text-red-600" />
                      <AiOutlineStar className="text-red-600" />
                    </div>
                    <p> (20) </p>
                  </div>
                  <div>
                    <h3 className="text-lg">Details: </h3>
                    <p>{description}</p>
                  </div>
                  <div>
                    <p className="text-2xl text-red-600 font-bold">{price}€</p>
                    <span className="flex gap-3">
                      <p className="text-lg text-red-400 line-through ">
                        {price + price * (30 / 100)}€
                      </p>
                      <p className="text-lg text-red-400 font-mono">
                        -30% de réduction
                      </p>
                    </span>
                  </div>
                </div>

                <div className="flex max-sm:flex-col max-sm:gap-1 gap-6 border dark:border-gray-500 p-4 rounded-lg justify-center">
                  <button
                    onClick={() => addProductCart(product._id)}
                    type="button"
                    className="p-2 rounded border border-red-600 text-red-600 dark:text-gray-200 dark:border-gray-200 text-lg font-semibold hover:transform hover:scale-110 transition-transform duration-500 ease-in-out"
                  >
                    Ajouter au panier
                  </button>
                  <button
                    onClick={() => buyNow(product._id)}
                    type="button"
                    className="p-2 rounded border bg-red-600 text-white text-lg font-semibold hover:transform hover:scale-110 transition-transform duration-500 ease-in-out "
                  >
                    Acheter maintenant
                  </button>
                </div>
              </div>
            </div>

            <Recomandation products={products} name={name} />
          </div>
        ) : (
          <div className="container flex flex-col  w-screen h-screen justify-center items-center">
            <h2 className="text-black text-2xl text-rose-500 " >Oups!! le nom du produit entrer dans url n'existe pas</h2>
          </div>
        )
      }
    </>
  );
};


export const getServerSideProps = async (context) => {
  await connectMongo();
  const products = await Product.find();
  const path = context.query.name;
  const name = path.split("_").join(" "); 
  const product = products.find((p) => p.name === name);

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      product: product ? JSON.parse(JSON.stringify(product)) : null
    },
  };
};

export default ProductDetails;
