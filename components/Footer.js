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
    <Foter >
      <>
      <Link href={"/"} className="nav-link">
        <span>
          <AiFillHome color={path ==="/" ? "hsl(43, 100%, 68%)" :" hsl(244, 16%, 43%)"} size={30} className='icon' />
        </span>
      </Link>
      <Link href={"/mobiles"} className="nav-link">
        <span>
          <BsPhoneFill color={path.includes("mobiles") ? "hsl(43, 100%, 68%)" :" hsl(244, 16%, 43%)"} size={30} className='icon' />
        </span>
      </Link>
      <Link href={"/pc"} className="nav-link">
        <span>
          <MdOutlineComputer color={path.includes("pc") ? "hsl(43, 100%, 68%)" :" hsl(244, 16%, 43%)"} size={30} className='icon' />
        </span>
      </Link>
      <Link href={"/casques"} className="nav-link">
        <span>
          <FaHeadphones color={path.includes("casques") ? "hsl(43, 100%, 68%)" :" hsl(244, 16%, 43%)"} size={30} className='icon' />
        </span>
      </Link>
      <Link href={"/ckeckout"} className="nav-link">
        <div style={{position:"relative"}}>
          <FaShoppingBag color={path.includes("ckeckout") ? "hsl(43, 100%, 68%)" :" hsl(244, 16%, 43%)"} size={30} className='icon' />
          {length>0  && <span className="bag">{length}</span>}
        </div>
      </Link>
      </>
    </Foter>
  );
};

export default Footer;

const Foter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: fixed;
  bottom: 0px;
  padding: 0.5rem;
  width: 100%;
  background-color: hsl(258, 60%, 98%);
  border-top: 1px solid #00bcd4;

  .bag {
    position: absolute;
    top: -7px;
    right: -15px;
    color: white;
    font-weight: bold;
    background-color: tomato;
    padding: 3px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
  line-height: 20px;
  }
`;
