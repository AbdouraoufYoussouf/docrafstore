import React, { useContext, useState, useEffect } from 'react'
import CategorieProduct from './CategorieProduct'
import { ProductContext } from './ProductContext';

const SeeRescent = () => {

  const { seeProducts } = useContext(ProductContext);
  const [productSees, setProductSees] = useState([]);
  useEffect(() => {
    if (seeProducts?.length > 0) {
      const uniqIds = [...new Set(seeProducts)];
      fetch("api/products/getWithId?ids=" + uniqIds.join(","))
        .then((res) => res.json())
        .then((json) => setProductSees(json));
    }
  }, [seeProducts]);

  return (
    <div className='flex flex-col gap-4 mt-5' >
      {
        productSees.length > 0 && <>
          <h2 className='text-2xl text-bold'>Produits vu récemement</h2>
          <div className='w-full grid grid-cols-1 ss:grid-cols-2 xx:grid-cols-3 md:grid-cols-3  lg:grid-cols-4 xg:grid-cols-5 xl:grid-cols-6  gap-4 justify-center  '>
            {productSees?.map((item, index) => (
              <CategorieProduct key={index} product={item} />
            ))}
          </div>
        </>
      }
    </div>
  )
}

export default SeeRescent