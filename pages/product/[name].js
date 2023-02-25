import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineMinus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaPlusSquare,FaMinusSquare  } from 'react-icons/fa';
import connectMongo from '../../lib/connectMongo';
import Product from '../../models/Products'

import { DetailContainer, DetailImage ,ProductDescription, Recomandation} from '../../styles/DetailStyle';
import CardProduct from '../../components/CardProduct';
import { ProductContext } from '../../components/ProductContext';

const ProductDetails = ({ products }) => {
  const router = useRouter()
  const path = router.query.name
  const name = path.split("_").join(" ");
  //console.log(name)
  const product = products.find(p => p.name === name)

  const [index, setIndex] = useState(0);
  //console.log("product:", product)
  const [quantity, setQuantity] = useState(0)

  const { setSelectProducts } = useContext(ProductContext);

  function addProductCart() {
    setSelectProducts((prev) => console.log(prev));
  }

  return (
    <div>
      <DetailContainer>
        <DetailImage>
          <div>
            <img src={product?.picture} className={'productDetailImage'} />
          </div>
          <div className={'smallImagesContainer'}>
            <img
              src={product?.picture}
              className={'smallImage'}
              onMouseEnter={() => setIndex(1)}
            />
          </div>
        </DetailImage>

        <ProductDescription>
          <h1>{name}</h1>
          <div className="reviews">
            <div className='starts'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p style={{marginBottom:12}}> (20) </p>
          </div>
          <h4>Details: </h4>
          <p>{product?.description}</p>
          <p className="price">${product?.price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <div className="quantity-desc">
             <FaMinusSquare className='btn' size={30} />
              <span className="num">{quantity}</span>
              <FaPlusSquare className='btn' size={30} />
            </div>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" >Add to Cart</button>
            <button type="button" className="buy-now" >Buy Now</button>
          </div>
        </ProductDescription>
      </DetailContainer> 

      <Recomandation >
        <h1>Recommandation pour vous</h1>
          <div className="product-reco">
              {products?.map((item,index) => (
                <CardProduct key={index} product={item} />
              ))}
          </div>  
      </Recomandation>
    </div>
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
