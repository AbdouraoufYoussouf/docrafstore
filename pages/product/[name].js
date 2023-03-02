import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import connectMongo from '../../lib/connectMongo';
import Product from '../../models/Products'

import { ProductContext } from '../../components/ProductContext';
import CategorieProduct from '../../components/CategorieProduct';

const ProductDetails = ({ products }) => {
  const router = useRouter()
  const path = router.query.name
  const name = path.split("_").join(" ");
  //console.log(name)
  const product = products.find(p => p.name === name)
  const { images, description, price } = product
  const [index, setIndex] = useState(0);
  //console.log("product:", product)

  const { addProductCart } = useContext(ProductContext);


  function buyNow(id) {
    addProductCart(id)
    router.push('/ckeckout');
  }
  useEffect(()=>{
    if(index>0){
      setIndex(0)
      console.log('index',index)
    }
  },[name])

  return (
    <>
      <div className='flex p-4 gap-4 max-lg:flex-col max-sm:p-1' >
        <div className=' w-[40%] max-lg:h-[350px]  max-lg:w-auto max-h-[500px] border flex flex-col justify-between bg-white rounded-lg '>
          <div className='flex justify-center p-2 max-h-[80%]  transition duration-300 ease-in-out gap-4 rounded-tl-lg rounded-tr-lg hover:bg-red-400'>
            <img src={images[index]} className="w-auto h-full" />
          </div>
          <div className="flex justify-center gap-1 h-[20%] bg-gray-300 rounded-bl-lg rounded-br-lg overflow-auto scrol p-1">
            {
              images.map((img, i) => (
                <img key={i}
                  src={img}
                  className={`p-1 h-full cursor-pointer bg-gray-200 hover:bg-red-400 border rounded-lg ${i===index ? 'bg-red-400' : ''}`}
                  onMouseEnter={() => setIndex(i)}
                />
              ))
            }
          </div>
        </div>

        <div className='flex flex-col justify-between flex-1 gap-2'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold text-gray-700'>{name}</h1>
            <div className="flex gap-1 items-center">
              <div className='flex items-center'>
                <AiFillStar className='text-red-600' />
                <AiFillStar className='text-red-600' />
                <AiFillStar className='text-red-600' />
                <AiFillStar className='text-red-600' />
                <AiOutlineStar className='text-red-600' />
              </div>
              <p > (20) </p>
            </div>
            <div>
              <h3 className='text-lg'>Details: </h3>
              <p>{description}</p>
            </div>
            <div>
              <p className="text-2xl text-red-600 font-bold">{price}€</p>
              <span className='flex gap-3'>
                <p className="text-lg text-red-400 line-through ">{price + price * (30 / 100)}€</p>
                <p className="text-lg text-red-400 font-mono">-30% de réduction</p>
              </span>
            </div>
          </div>


          <div className="flex max-sm:flex-col max-sm:gap-1 gap-6 border p-4 rounded-lg justify-center">
            <button onClick={() => addProductCart(product._id)} type="button" className="p-2 rounded border border-red-600 text-red-600 text-lg font-semibold hover:transform hover:scale-110 transition-transform duration-500 ease-in-out" >Ajouter au panier</button>
            <button onClick={() => buyNow(product._id)} type="button" className="p-2 rounded border bg-red-600 text-white text-lg font-semibold hover:transform hover:scale-110 transition-transform duration-500 ease-in-out " >Acheter maintenant</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 mt-5' >
        <h2 className='text-2xl text-bold'>Recommandé pour vous</h2>
        <div className='w-full grid grid-cols-1 ss:grid-cols-2 xx:grid-cols-3 md:grid-cols-3  lg:grid-cols-4 xg:grid-cols-5 xl:grid-cols-6  gap-4 justify-center  '>
          {products?.map((item, index) => (
            <CategorieProduct key={index} product={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  await connectMongo();
  const products = await Product.find()

  console.log(products)

  const paths = products.map((product) => ({
    params: {
      name: product.name
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async () => {
  await connectMongo();
  const products = await Product.find()

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}

export default ProductDetails
