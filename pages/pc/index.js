import React, { useState, useEffect } from 'react'
import CategorieProduct from '../../components/CategorieProduct'
import Filter from '../../components/Filter'
import BanerPc from './components/BanerPc'

const Pc = () => {
  const [data, setData] = useState([])
  const [dataInit, setDataInit] = useState([])
  useEffect(() => {
    fetch('api/products/getAll')
      .then(res => res.json())
      .then(json => {setData(json), setDataInit(json)})
  }, [])
  //console.log('first', data)
  return (
    <div id='pc' className='flex flex-col justify-center gap-4 mb-4 w-full '>
       <BanerPc />
      <div className='flex gap-4 justify-between items-start w-full max-md:flex-col '>
          <Filter data={dataInit} setData={setData} category={"pc"} />
        
        <div className='w-full grid grid-cols-1 ss:grid-cols-2 xm:grid-cols-3 md:grid-cols-3  lg:grid-cols-3 xg:grid-cols-4 xl:grid-cols-5  gap-4 justify-center  '>
          {
            data?.filter(p => p.category === 'pc').map((product,index)=>(
              <CategorieProduct key={index} product={product}/>
            ))
          }
        
        </div>
      </div>
    </div>
  )
}

export default Pc

