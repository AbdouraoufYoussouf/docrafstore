import React, { useState, useEffect } from 'react'
import CategorieProduct from '../../components/CategorieProduct'
import Filter from '../../components/Filter'
import BanerCasque from './components/BanerCasque'

const Casque = () => {
  const [data, setData] = useState([])
  const [dataInit, setDataInit] = useState([])
  useEffect(() => {
    fetch('api/products/getAll')
      .then(res => res.json())
      .then(json => {setData(json), setDataInit(json)})
  }, [])
  console.log('first', data)
  return (
    <div className='flex flex-col justify-center  w-full '>
      <BanerCasque />
      <div className='flex gap-4 justify-between mt-5 items-start w-full '>
          <Filter data={dataInit} setData={setData} />
        
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 justify-center  '>
          {
            data?.filter(p => p.category === 'casques').map((product,index)=>(
              <CategorieProduct key={index} product={product}/>
            ))
          }
        
        </div>
      </div>
    </div>
  )
}

export default Casque

