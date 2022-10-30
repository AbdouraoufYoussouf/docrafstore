import React, { useEffect, useState } from "react"
import CardProduct from "../components/CardProduct"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import connectMongo from "../lib/connectMongo"
import Product from "../models/Products"

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
    products = data.filter(p => p.name.toLowerCase().includes(phrase))
  } else {
    products = data;
  }

  return (
    <Layout>
      <input placeholder="Search..."
        value={phrase} onChange={e => setPhrase(e.target.value)}
        className="bg-gray-100 w-full py-2 px-4 rounded-xl" />
      <div>
        {
          categorieNames.map(categorie => (
            <div key={categorie._id}>
              {products.find(p => p.category === categorie) && (
                <div>
                  <h2 className="text-2xl font-bold capitalize">{categorie}</h2>
                  <div className="flex mx-5 overflow-x-scroll snap-x scrollbar-hide" >

                    {products.filter(p => p.category === categorie).map(p => (
                      <div key={p._id} className="p-3 snap-start" >
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
    </Layout>
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
      notFounf: true
    }
  }
}