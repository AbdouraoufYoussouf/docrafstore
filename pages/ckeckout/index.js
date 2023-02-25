import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { ProductContext } from "../../components/ProductContext";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import ModalUser from "../../components/ModalUser";

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
    const uniqIds = [...new Set(selectProducts)];
    fetch("api/products/getWithId?ids=" + uniqIds.join(","))
      .then((res) => res.json())
      .then((json) => setProductInfo(json));
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
      {!productInfo.length && <div>pas de produt dans le panier</div>}
      {productInfo.length &&
        productInfo.map((product) => (
          <div key={product._id} className="flex mb-5">
            <div className="bg-gray-100 p-3 rounded-xl shrink-0">
              <img className="w-24" src={product.picture} alt={product.name} />
            </div>
            <div className="pl-4">
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-sm leading-4 text-gray-500">
                {product.description}
              </p>
              <div className="flex">
                <div className="grow">{product.price}dh</div>
                <div className="quantity-desc">
                  <FaMinusSquare
                    onClick={() => moinsProduct(product._id)}
                    className="btn"
                    size={30}
                  />
                  <span className="num">
                    {selectProducts.filter((id) => id === product._id).length}
                  </span>
                  <FaPlusSquare
                    onClick={() => plusProduct(product._id)}
                    className="btn"
                    size={30}
                    color="#f02d34"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

      <div className="mt-4">
        <div className="flex my-3">
          <h3 className="grow font-bold text-gray-500">Achat Total</h3>
          <h3 className="font-bold">{achatTotal} Dhs</h3>
        </div>
        <div className="flex my-3">
          <h3 className="grow font-bold text-gray-500">Livraison</h3>
          <h3 className="font-bold">{livraison} Dhs</h3>
        </div>
        <div className="flex my-3 border-t pt-3 border-dashed border-emerald-500">
          <h3 className="grow font-bold text-gray-500">Somme Total</h3>
          <h3 className="font-bold">{total} Dhs</h3>
        </div>
      </div>
      <input type="hidden" name="products" value={selectProducts.join(",")} />
      <button
        onClick={() => setShow(!show)}
        className="bg-emerald-500 px-5 py-2 rounded-xl shadow-emerald-300 shadow-lg text-white w-full font-bold"
      >
        Payé {total} Dhs
      </button>
      {show && (
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
