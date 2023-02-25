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

  return (
    <Foter className="text-gray-400">
      <Link href={"/"} className="nav-link">
        <span>
          <AiFillHome color={path ==="/" && "hsl(43, 100%, 68%)"} size={30} />
        </span>
      </Link>
      <Link href={"/smartphone"} className="nav-link">
        <span>
          <BsPhoneFill color={path.includes("smartphone") && "hsl(43, 100%, 68%)"} size={30} />
        </span>
      </Link>
      <Link href={"/pc"} className="nav-link">
        <span>
          <MdOutlineComputer color={path.includes("pc") && "hsl(43, 100%, 68%)"} size={30} />
        </span>
      </Link>
      <Link href={"/ecouteur"} className="nav-link">
        <span>
          <FaHeadphones color={path.includes("ecouteur") && "hsl(43, 100%, 68%)"} size={30} />
        </span>
      </Link>
      <Link href={"/ckeckout"} className="nav-link">
        <span style={{position:"relative"}}>
          <FaShoppingBag color={path.includes("ckeckout") && "hsl(43, 100%, 68%)"} size={30} />
          {selectProducts.length && <span className="bag">{selectProducts.length}</span>}
        </span>
      </Link>
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
  border-top: 1px solid;
  background-color: white;

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
  }
`;
