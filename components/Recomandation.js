import React from 'react'
import CategorieProduct from './CategorieProduct'

const Recomandation = ({ products, name }) => {

    const marque = products.find((p) => p.name === name).marque;
    const category = products.find((p) => p.name === name).category;
    const productByMarque = products.filter((product) => product.marque === marque).filter((prod)=>prod.name!==name)
    const productByCatergory = products.filter((product) => product.category === category).filter((prod)=>prod.name!==name).slice(0, 6);

    return (
        <div className='flex flex-col gap-4 mt-5' >
       {productByMarque.length > 0 ? (
    <div className='flex flex-col gap-4 mt-5'>
        <h2 className='text-2xl font-bold'>Recommandé pour vous</h2>
        <div className='grid grid-cols-1 ss:grid-cols-2 xx:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xg:grid-cols-5 xl:grid-cols-6 gap-4 justify-center'>
            {productByMarque.map((item, index) => (
                <CategorieProduct key={index} product={item} />
            ))}
        </div>
    </div>
) : (
    <div className='flex flex-col gap-4 mt-5'>
        <h2 className='text-2xl font-bold'>Autres produits recommandés</h2>
        <div className='grid grid-cols-1 ss:grid-cols-2 xx:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xg:grid-cols-5 xl:grid-cols-6 gap-4 justify-center'>
            {productByCatergory.map((item, index) => (
                <CategorieProduct key={index} product={item} />
            ))}
        </div>
    </div>
)}


        </div>
    )
}

export default Recomandation