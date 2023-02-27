import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { ProductContext } from "../../components/ProductContext";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import ModalUser from "../../components/ModalUser";
import Link from "next/link";

const CkeckoutPage = () => {
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

  useEffect(() => {
    if (selectProducts?.length > 0) {
      const uniqIds = [...new Set(selectProducts)];
      fetch("api/products/getWithId?ids=" + uniqIds.join(","))
        .then((res) => res.json())
        .then((json) => setProductInfo(json));
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
    <>
      {productInfo.length < 0 &&
        <div className="h-60 w-100 bg-gray-500 rounded-lg gap-2 flex flex-col justify-center items-center text-white" >
          <img className="h-20" src="/logo1.png" />
          <p className="text-xl">Votre panier est vide!</p>
          <p className="font-mono">Veillez parcourir nos categorie pour voir nos differents offres!</p>
          <Link href={`/`}>
            <button className="bg-red-400 p-2 px-3 rounded-lg hover:bg-gray-700 font-bold">Commencer vos achats</button>
          </Link>
        </div>
      }

      {productInfo.length > 0 &&
        <div class="flex justify-between items-start gap-4 max-md:flex-col">

          <div class="bg-gray-200  flex-1 rounded-lg">
            <h2 className="border-b border-orange-500  p-2 pb-1">Panier</h2>
            {productInfo.map((product) => (
              <div key={product._id} className="flex p-4 rounded-lg shadow relative">
                <div className="bg-gray-100 p-3 flex rounded-xl shrink-0">
                  <img className="w-32 self-center max-lg:w-28 max-sm:w-20" src={product.picture} alt={product.name} />
                </div>

                <div className="flex max-sm:flex-col">
                  <div className="pl-4">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-box text-sm leading-5 text-gray-500 " >
                      {product.description}
                    </p>
                    <RiDeleteBin5Line
                      onClick={() => moinsProduct(product._id)}
                      className="icon mt-4 max-sm:hidden"
                      color="red"
                    />
                  </div>

                  <div className="flex flex-col justify-between ml-2  max-sm:flex-row max-sm:mt-4 items-center ">
                    <h2 className="grow text-center font-bold">{product.price}Dh</h2>
                    <div className="quantity-desc m-2">
                      <FaMinusSquare
                        onClick={() => moinsProduct(product._id)}
                        className="btn icon"
                        color="hsl(244, 74%, 26%)"
                      />
                      <span className="num">
                        {selectProducts.filter((id) => id === product._id).length}
                      </span>
                      <FaPlusSquare
                        onClick={() => plusProduct(product._id)}
                        className="btn icon"
                        color="tomato"
                      />
                    </div>
                    <RiDeleteBin5Line
                      onClick={() => moinsProduct(product._id)}
                      className="icon sm:hidden"
                      color="red"
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* PARTIE RESUME DU PANIER */}

          <div class="bg-gray-200   w-60 rounded-lg sticky top-0 max-md:w-full">
            <h2 className="border-b border-orange-500 p-2 pb-1">Resumé du Panier</h2>
            <div className="p-4 pt-2">
              <div >
                <div className="flex my-3">
                  <p className="grow font-bold text-gray-500">Quantité Total</p>
                  <p className="font-bold">{selectProducts.length} produt(s)</p>
                </div>
                <div className="flex my-3">
                  <p className="grow font-bold text-gray-500">Prix Total</p>
                  <p className="font-bold">{achatTotal} Dhs</p>
                </div>
                <div className="flex my-3">
                  <p className="grow font-bold text-sm text-gray-500">Livraison</p>
                  <p className="font-bold text-sm">{livraison} Dhs</p>
                </div>
                <div className="flex my-3 border-t pt-3 border-dashed border-emerald-500">
                  <p className="grow font-bold text-gray-500">Somme Total</p>
                  <p className="font-bold">{total} Dhs</p>
                </div>
              </div>
              <button
                onClick={() => setShow(!show)}
                className="bg-emerald-500 px-5 py-2 rounded-xl shadow-emerald-300 shadow-lg text-white w-full font-bold"
              >
                Payé {total} Dhs
              </button>
            </div>
          </div>
        </div>
      }

      {/* Modal de la confirmation du commande */}

      {show && selectProducts?.length > 0 && (
        <ModalUser
          toggleModal={toggleModal}
          total={total}
          selectProducts={selectProducts}
        />
      )}
    </>
  );
};

export default CkeckoutPage;
