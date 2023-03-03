import Link from "next/link"
import React, { useEffect, useState } from "react"
import CardProduct from "../components/CardProduct"
import HeroHeader from "../components/HeroHeader"
import Layout from "../components/Layout"
import connectMongo from "../lib/connectMongo"
import Product from "../models/Products"
import {GrLinkNext} from "react-icons/gr"
import { Fade } from "react-reveal"

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('api/products/getAll')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  const categorieNames = [...new Set(data.map(p => p.category))]

  const [phrase, setPhrase] = useState('')
  let products;
  if (phrase) {
    products = data.filter(p => p.name.toLowerCase().includes(phrase.toLowerCase()))
  } else {
    products = data;
  }



  //donnes pour le heroheader
  const newsProduct = products.filter((p)=>p.newp==true)
  let limit = newsProduct?.length - 1
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(-1);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + increment);
    }, 10000);

    return () => clearInterval(interval);
  }, [increment]);

  useEffect(() => {
    if (count === limit) {
      setIncrement(-1);
    } else if (count === 0) {
      setIncrement(1);
    }
  }, [count, limit]);

  return (
    <>
      
      {!phrase && <HeroHeader heroBanner={newsProduct.length && newsProduct[count]} />}

      <div className="mb-2">
        {
          categorieNames.map((categorie, index) => (
            <div key={index}>
              {products.find(p => p.category === categorie) && (
                <div>
                  <Fade duration={1000}>
                  <div className="flex justify-between items-center bg-gray-600 my-3 p-2 rounded-lg ">
                    <h2 className="text-2xl text-white font-bold capitalize">{categorie}</h2>
                    <Link href={`/${categorie}`}>
                      <span className="flex items-center gap-2 bg-red-500 text-white font-bold p-1 px-2 rounded-lg cursor-pointer">Voir plus
                      <GrLinkNext className="text-white-important"/>
                      </span>
                    </Link>
                  </div></Fade>
                  <div className="flex overflow-x-auto whitespace-no-wrap scrol" >
                  
                    {products.filter(p => p.category === categorie).map((p, i) => (
                      <div key={i} className="p-3 flex justify-center items-center " >
                        <CardProduct product={p} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))
        }

      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    await connectMongo();
    const products = await Product.find()
    return {
      props: {
        products: JSON.stringify(products)
      }
    }
  } catch (error) {
    console.log(error)
    return {
      notFound: true
    }
  }
}