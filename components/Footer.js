import React, { useContext } from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { FaMobile, FaShoppingBag, FaHeadphones } from "react-icons/fa";
import { useRouter } from "next/router";
import { ProductContext } from "./ProductContext";
import styled from "styled-components";

const Footer = () => {
  const router = useRouter();
  const path = router.pathname;
  const { selectProducts } = useContext(ProductContext);
  let length = selectProducts?.length

 

  return (
    <div className="flex justify-center items-center gap-2 fixed bottom-0 p-1 bg-gray-300 w-full border-2 border-t-cyan-400 ">
      <Link href={"/"} >
        <span>
          <AiFillHome color={path ==="/" ? "hsl(43, 100%, 68%)" :" hsl(244, 16%, 43%)"}  className='link' />
        </span>
      </Link>
      <Link href={"/mobiles"} >
        <span>
          <BsPhoneFill color={path.includes("mobiles") ? "hsl(43, 100%, 68%)" :" hsl(244, 16%, 43%)"}  className='link' />
        </span>
      </Link>
      <Link href={"/pc"} >
        <span>
          <MdOutlineComputer color={path.includes("pc") ? "hsl(43, 100%, 68%)" :" hsl(244, 16%, 43%)"}  className='link' />
        </span>
      </Link>
      <Link href={"/casques"} >
        <span>
          <FaHeadphones color={path.includes("casques") ? "hsl(43, 100%, 68%)" :" hsl(244, 16%, 43%)"}  className='link' />
        </span>
      </Link>
      <Link href={"/ckeckout"} >
        <div style={{position:"relative"}}>
          <FaShoppingBag color={path.includes("ckeckout") ? "hsl(43, 100%, 68%)" :" hsl(244, 16%, 43%)"}  className='link' />
          {length>0  && <span className="absolute bottom-7 left-7 bg-red-500 text-white font-bold p-0.5 w-6 h-6 rounded-full flex justify-center items-center ">{length}</span>}
        </div>
      </Link>
    </div>
  );
};

export default Footer;

