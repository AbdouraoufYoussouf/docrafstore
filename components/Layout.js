import React, { useContext, useEffect, useState } from 'react'
import Footer from './Footer'
import { ProductContext } from './ProductContext'

const Layout = ({children}) => {
  const [success,setSuccess] = useState(false)
  const {setSelectProducts } = useContext(ProductContext)

  useEffect(()=>{
    if(window.location.href.includes('success')){
      setSelectProducts([])
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 5000);
    }
  },[])
  return (
    <div>
        <div className='p-4'>
          {success? (
          <div className='mb-5 bg-green-400 text-white text-lg p-5 rounded-xl'>
            Votre commande a bien éffectué avec successé , AnsumatiBoutique vous remercie!!
          </div>
          ):(null)

          }
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout