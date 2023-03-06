import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../components/ProductContext";
import { FaPlusSquare, FaMinusSquare ,FaCcPaypal} from "react-icons/fa";
import { GrPaypal } from "react-icons/gr";
import { RiDeleteBin5Line,RiSecurePaymentFill } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
import ModalUser from "../../components/ModalUser";
import Link from "next/link";
import SeeRescent from "../../components/SeeRescent";
import connectMongo from "../../lib/connectMongo";
import Product from "../../models/Products";
import { motion } from "framer-motion";


const CkeckoutPage = ({products}) => {
  const { selectProducts, setSelectProducts } = useContext(ProductContext);
  const [productInfo, setProductInfo] = useState([]);
  const [show, setShow] = useState(false);

  function plusProduct(id) {
    setSelectProducts((prev) => [...prev, id]);
  }

  function moinsProduct(id) {
    const pos = selectProducts.indexOf(id);
    if (pos !== -1) {
      setSelectProducts((prev) => {
        return prev.filter((value, index) => index !== pos);
      });
    }
  }
  function deleteProduct(id) {
    const newArray = selectProducts.filter((item) => item !== id);
    setSelectProducts(newArray)
  }


  useEffect(() => {
    if (selectProducts?.length > 0) {
      const uniqIds = [...new Set(selectProducts)];
      const filteredProducts = products.filter((product) => uniqIds.includes(product._id.toString()));
      setProductInfo(filteredProducts)
    }
  }, [selectProducts]);

  let livraison = 12;
  let achatTotal = 0;
  if (selectProducts?.length) {
    for (let id of selectProducts) {
      const price = productInfo?.find((p) => p._id === id)?.price;
      achatTotal += price;
    }
  }

  const total = achatTotal + livraison;

  const toggleModal = () => {
    setShow(!show);
  };
  return (
    <div className=" dark:bg-gray-900  mb-4 rounded-lg ">
      {selectProducts.length === 0 ? (
        <div className="h-60 w-100 bg-gray-500 rounded-lg gap-2 flex flex-col justify-center items-center text-white text-center" >
          <img className="h-20" src="/rafstore.png" />
          <p className="text-xl">Votre panier est vide!</p>
          <p className="font-mono">Veillez parcourir nos catégories pour voir nos différents offres</p>
          <Link href={`/`}>
            <button className="bg-red-400 p-2 px-3 rounded-lg hover:bg-gray-700 font-bold">Commencer vos achats</button>
          </Link>
        </div>

      ) : (

        <div class="flex justify-between  items-start gap-4 max-md:flex-col p-2 ">

           <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
           class="bg-gray-200 dark:bg-gray-800  flex-1 rounded-lg">
            <h3 className="border-b border-orange-500 font-bold text-xl p-2 pb-1">Panier</h3>
            {productInfo.map((product) => {
              const name = product?.name;
              const path = name.split(" ").join("_");
              return (
                <div key={product._id} className="flex p-4 rounded-lg shadow relative">
                  <div className="bg-gray-300 dark:bg-gray-900 p-3 flex rounded-xl shrink-0">
                    <Link className="" href={`/product/${path}`}>
                      <img className="w-28 cursor-pointer w-32 self-center max-lg:w-28 max-sm:w-20" src={product.images[2]} alt={product.name} />
                    </Link>
                  </div>

                  <div className="flex max-sm:flex-col ">
                    <div className="pl-4">
                      <h3 className="font-bold text-lg">{product.name}</h3>
                      <p className="text-box text-sm leading-5 text-gray-500 dark:text-gray-300 " >
                        {product.description}
                      </p>
                      <RiDeleteBin5Line
                        onClick={() => deleteProduct(product._id)}
                        className="icon mt-4 max-sm:hidden"
                        color="red"
                      />
                    </div>

                    <div className="flex flex-col justify-between ml-2  max-sm:flex-row max-sm:mt-4 items-center ">
                      <h2 className="grow text-center font-bold text-lg">{product.price}€</h2>
                      <div className="quantity-desc m-2">
                        <FaMinusSquare
                          onClick={() => moinsProduct(product._id)}
                          className="dark:text-gray-300 icon"

                        />
                        <span className="num">
                          {selectProducts.filter((id) => id === product._id).length}
                        </span>
                        <FaPlusSquare
                          onClick={() => plusProduct(product._id)}
                          className=" icon "
                          color="tomato"
                        />
                      </div>

                      <RiDeleteBin5Line
                        onClick={() => deleteProduct(product._id)}
                        className="icon delete sm:hidden text-red-400"

                      />
                    </div>
                  </div>

                </div>
              )
            })}
          </motion.div>

          {/* PARTIE RESUME DU PANIER */}
          <div className="flex flex-col gap-4 max-md:w-full ">
            <div class="bg-gray-200 dark:bg-gray-800  w-60 rounded-lg sticky  top-0 max-md:relative max-md:w-full">
              <h3 className="border-b font-bold text-xl capitalize border-orange-500 p-2 pb-1">Resumé du Panier</h3>
              <div className="p-4 pt-2">
                <div >
                  <div className="flex my-3">
                    <p className="grow font-bold text-gray-500 dark:text-gray-200">Quantité Total</p>
                    <p className="font-bold">{selectProducts.length} produt(s)</p>
                  </div>
                  <div className="flex my-3">
                    <p className="grow font-bold text-gray-500 dark:text-gray-200">Prix Total</p>
                    <p className="font-bold">{achatTotal} €</p>
                  </div>
                  <div className="flex my-3">
                    <p className="grow font-bold text-sm text-gray-500 dark:text-gray-200">Livraison</p>
                    <p className="font-bold text-sm">{livraison} €</p>
                  </div>
                  <div className="flex my-3 border-t pt-3 border-dashed border-emerald-500">
                    <p className="grow font-bold text-gray-500 dark:text-gray-200">Somme Total</p>
                    <p className="font-bold">{total} €</p>
                  </div>
                </div>
                <button
                  onClick={() => setShow(!show)}
                  className="bg-emerald-500 px-5 py-2 rounded-xl shadow-emerald-300 shadow-lg text-white w-full font-bold"
                >
                  Payé {total} €
                </button>
              </div>
            </div>
            {/* choisir le moyen de payement */}
            {/* <div class="bg-gray-200 dark:bg-gray-800  w-60 rounded-lg max-md:mb-16 max-md:w-full">
              <h3 className="border-b font-bold text-xl border-orange-500 p-2 pb-1 capitalize">moyen de paiement</h3>
                
                <div className="mx-2 py-2">
                  <div className="flex  items-center gap-3 hover:bg-red-400 p-2 rounded cursor-pointer">
                    <RiSecurePaymentFill className="text-3xl"/>
                    <img src="/pay/visa.png" alt="paypal" className="h-8 "  />
                  </div>
                  <div className="flex items-center gap-3 hover:bg-red-400 p-2 rounded cursor-pointer">
                    <GrPaypal className="text-3xl"/>
                    <img src="/pay/paypal.png" alt="visa" className="h-8 "  />
                  </div>
                  <div className="flex items-center gap-3 hover:bg-red-400 p-2 rounded cursor-pointer">
                    <MdDeliveryDining className="text-3xl"/>
                    <p>Paiement à la vivraison</p>
                  </div>
               
              </div>
            </div> */}

          </div>
        </div>)

      }

      {/* Modal de la confirmation du commande */}

      {show && selectProducts?.length > 0 && (
        <ModalUser
          toggleModal={toggleModal}
          total={total}
          selectProducts={selectProducts}
        />
      )}

      <SeeRescent />
    </div>
  );
};

export default CkeckoutPage;

export const getServerSideProps = async () => {
  await connectMongo();
  const products = await Product.find();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};

