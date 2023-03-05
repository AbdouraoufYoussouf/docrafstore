import React, { useContext } from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsPhoneFill } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { FaShoppingBag, FaHeadphones } from "react-icons/fa";
import { useRouter } from "next/router";
import { ProductContext } from "./ProductContext";

const Footer = () => {
  const router = useRouter();
  const path = router.pathname;
  const { selectProducts } = useContext(ProductContext);
  let length = selectProducts?.length;

  return (
    <div className="flex justify-center items-center gap-2 fixed bottom-0 p-1 bg-gray-200 dark:bg-gray-800 w-full border-t-2 border-t-cyan-400 ">
      <Link href={"/"}>
        <span>
          <AiFillHome
            className={path === "/" ? "tomato link" : " text-gray-800 dark:text-white link"}
          />
        </span>
      </Link>
      <Link href={"/mobiles"}>
        <span>
          <BsPhoneFill
            className={path.includes("mobiles") ? "tomato link" : " text-gray-800 dark:text-white link"}

          />
        </span>
      </Link>
      <Link href={"/pc"}>
        <span>
          <MdOutlineComputer
            className={path.includes("pc") ? "tomato link" : " text-gray-800 dark:text-white link"}

          />
        </span>
      </Link>
      <Link href={"/casques"}>
        <span>
          <FaHeadphones
            className={path.includes("casques") ? "tomato link" : " text-gray-800 dark:text-white link"}

          />
        </span>
      </Link>
      <Link href={"/ckeckout"}>
        <div style={{ position: "relative" }}>
          <FaShoppingBag
            className={path.includes("ckeckout") ? "tomato link" : "link text-gray-800 dark:text-white "}

          />
          {length > 0 && (
            <span className="absolute bottom-7 left-7 bg-red-500 text-white font-bold p-0.5 w-6 h-6 rounded-full flex justify-center items-center ">
              {length}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Footer;
