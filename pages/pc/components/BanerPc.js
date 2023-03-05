import React from "react";
import Link from "next/link";
import { SlCallIn } from "react-icons/sl";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const BanerPc = ({ heroBanner }) => {
  let name = heroBanner?.name
  const path = name?.split(" ").join("_");
  return (
    <div className="w-full relative  flex justify-between items-start my-2 rounded-lg heroheader max-lg:p-3 max-xm:p-2">
      <div className="flex h-full flex-col items-start justify-around gap-1 text-gray-500 max-xm:justify-between" >
        <div className="italic uppercase flex flex-col justify-center items-start gap-px font-andale text-white max-xm:gap-[14px] max-xm:mt-2 ">

          <p className="font-bold text-[25px] text-gray-200 dark:text-gray-300 max-xm:text-[20px]">model haut gamme</p>
          <h2 className="font-900 text-[40px] text-box-md  tomato max-lg:text-[30px] max-xm:text-[22px]  ">Ordinateur portable</h2>
          <p className=" text-lg max-md:text-sm">aujourd’hui derniere offre </p>
          <Link href={`/product/${path}`} className=" ">
            <button className="font-bold text-lg text-white py-[8px] px-[15px] uppercase rounded-lg text-white z-10 max-lg:text-[18px] max-xm:text-[14px] max-xm:p-[7px] bg-tomato">Voir le produit</button>
          </Link>
        </div>
        <div className="flex justify-center items-start gap-1 text-white">
          <SlCallIn className="self-center text-[35px] tomato max-xm:text-[25px]  " />
          <span className="flex flex-col gap-px self-center">
            <p className="font-tury uppercase z-10 max-xm:text-[14px] ">Appel pour livraison</p>
            <p className="font-900 text-lg font-mono">0633851644</p>
          </span>
        </div>
      </div>
      <div className="center-baner " >
        <img className="img"  src={"/products/pc/hppavion/1.png"} />
      </div>
      <div className="flex h-full flex-col items-center justify-between " >
        <div className="bg-tomato text-white flex flex-col text-[25px] p-2 rounded-lg  ">
          <span >50%</span>
          <span className="font-bold">OFF</span>
        </div>
        <div className="flex gap-0.5">
          <FaFacebook className="social" />
          <FaInstagram className="social" />
          <FaTiktok className="social" />
        </div>
      </div>
    </div>
  );
};

export default BanerPc;
