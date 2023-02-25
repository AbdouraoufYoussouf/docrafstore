import React, { useContext } from 'react';
import Link from 'next/link';
import { AiOutlineHome, AiOutlineShopping } from 'react-icons/ai'
import { useRouter } from 'next/router';
import { ProductContext } from './ProductContext';

const Footer = () => {

  const router = useRouter();
  const path = router.pathname;
  const {selectProducts}=useContext(ProductContext)
  
  return (
    <footer className='fixed bottom-0 bg-white p-2 w-full flex border-t border-gray-200 justify-center space-x-12 text-gray-400'>
      <Link href={'/'}>
        <a className={(path === '/' ? 'text-emerald-500' : '') + 'flex flex-col justify-center items-center'}>
          <AiOutlineHome />
          <span>Home</span>
        </a>
      </Link>
      <Link href={'/ckeckout'}>
        <a className={(path === "/ckeckout" ? "text-emerald-500" : '') + 'flex flex-col justify-center items-center'}>
          <AiOutlineShopping />
          <span>Cart {selectProducts?.length}</span>
        </a>
      </Link>
    </footer>
  )
}

export default Footer