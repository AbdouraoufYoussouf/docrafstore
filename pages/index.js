import Link from "next/link"
import React, { useEffect, useState } from "react"
import CardProduct from "../components/CardProduct"
import HeroHeader from "../components/HeroHeader"
import connectMongo from "../lib/connectMongo"
import Product from "../models/Products"
import { GrLinkNext } from "react-icons/gr"
import Search from "../components/Search"
import ThemeToggle from "../components/ThemeToggle"
import Reglement from "../components/Reglement"

export default function Home({ products }) {
  const [data, setData] = useState(products)
  const [isSearch, setIsSearch] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const categorieNames = [...new Set(data.map(p => p.category))]

  //donnes pour le heroheader
  const newsProduct = products.filter((p) => p.newp == true)

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
    <div className="flex flex-col">
      <div className="flex">
        <img src="/rafstore.png" className="bg-gray4-500 rounded" style={{ width: 40 }} />
        <div className="mx-2 flex-1">
          
        <Search setData={setData} products={products} setSearch={setIsSearch} />
        </div>
       <ThemeToggle/>

      </div>
      {!isSearch && <HeroHeader heroBanner={newsProduct.length && newsProduct[count]} />}
      <div className="mb-2">
        {
          categorieNames.map((categorie, index) => (
            <div key={index}>
              {data.find(p => p.category === categorie) && (
                <div>
                  <div className="flex justify-between items-center bg-gray-600 my-3 p-2 rounded-lg ">
                    <h2 className="text-2xl text-white font-bold capitalize">{categorie}</h2>
                    <Link href={`/${categorie}`}>
                      <span className="flex items-center gap-2 bg-red-500 text-white font-bold p-1 px-2 rounded-lg cursor-pointer">Voir plus
                      &rarr;
                      </span>
                    </Link>
                  </div>
                  <div className="flex overflow-x-auto whitespace-no-wrap scrol" >

                    {data.filter(p => p.category === categorie).map((p, i) => (
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
      <div className="flex flex-col justify-center xl:w-[90%] self-center ">
        <h2 className="text-3xl mt-4">Pour plus d'information</h2>
      <Reglement />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  await connectMongo();
  const products = await Product.find();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};