import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'

const CardProduct = ({product}) => {
  const {setSelectProducts} = useContext(ProductContext)
  function addProductCart(){
    setSelectProducts(prev => [...prev,product._id])
  }
  return (
    <div className="">
   
      <div className="w-64">
        <div className="bg-blue-100 p-5 rounded-xl">
          <img src={product.picture} alt={product.name} />
        </div>
        <div className="mt-2">
          <h3 className="font-bold text-lg"></h3>
          <h3 className="font-bold text-lg">{product.name}</h3>
        </div>
        <p className="text-sm mt-2 leading-4" 
            style={{
                textAlign: 'start',
                display: 'inline-block',
                overflow: 'hidden',
                maxHeight: 70,/* (Number of lines you want visible) * (line-height) */
                lineHeight: 1.2,
                textAlign:'justify',
                color: 'black'}}
        > {product.description}</p>
        <div className="flex mt-1">
          <div className="text-2xl font-bold grow">${product.price}</div>
          <button onClick={addProductCart} className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
        </div>
      </div>
     
    </div>
  )
}

export default CardProduct