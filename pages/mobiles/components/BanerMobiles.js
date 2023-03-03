import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaBlenderPhone,
  FaTiktok,
} from "react-icons/fa";

const BanerMobiles = () => {
  return (
    <div className="flex w-full justify-between h-v6 rounded-lg p-4 max-sm:p-1 bg-deg relative ">
      <div className=" flex flex-1 justify-between max-md:justify-center max-sm:flex-col-reverse ">
        <div className="flex flex-col grow justify-between items-start p-5 ">
          <p className="font-black uppercase text-4xl text-white max-lg:text-3xl max-lg:absolute max-lg:top-5 max-md:text-xl">
            the best of the best</p>
          <div className="flex justify-center bac-text rounded-full text-center gap-4 text-white font-bold text-3xl max-md:text-lg bg-rose-500 p-3  top-32 left-25 max-lg:absolute max-md:top-14   max-lg:left-20 max-sm:left-5">
            <span>70%</span>
            <span>OFF</span>
          </div>
          <div className="flex items-center gap-5 max-md:gap-2 max-lg:absolute max-lg:bottom-5 max-sm:bottom-0">
            <FaBlenderPhone className="text-3xl " color='tomato' />
            <div className="flex flex-col items-start">
              <p className="italic capitalize text-sm w-full text-gray-700 z-10">Appel pour livraison</p>
              <p className="font-bold font-conso text-2xl text-gray-700 max-lg:text-lg">0633851644</p>
            </div>
          </div>
        </div>
        <div className="flex">

        <img src="/products/mobiles/iphone14/1.png" className=" p-3 absolute left-[300px] top-20 max-lg:hidden h-v3" />
        <img src="/products/mobiles/galaxyz/1.png" className=" p-3 flex-1 h-[80%] max-xx:h-auto max-sm:absolute max-lg:w-1/2 max-lg:h-[80%] self-center bottom-12" />
        </div>
      </div>

      <div className="flex flex-col p-4 justify-around items-start max-lg:items-end max-sm:mt-10">
        <div className="flex flex-col gap-1 max-sm:items-end ">
          <h2 className="font-conso uppercase text-3xl text-white max-md:text-2xl max-sm:text-lg">Nouvelles gamme</h2>
          <h1 className="uppercase font-tury text-5xl font-black text-red-500 z-10 max-md:text-3xl max-lg:text-4xl">
            Smartphones
          </h1>
          <p className="capitalize font-roma text-lg italic text-white">
            Today's Super offre
          </p>
        </div>
        <Link href={'#mobiles'} >
        <button className="p-2 bg-red-500 font-bold uppercase text-white rounded-lg z-10 hover:transform hover:scale-110 transition-transform duration-500 ease-in-out">
          Order Now
        </button>
        </Link>
        <div className="flex gap-2 justify-center self-center max-md:self-end">
          <FaFacebook className="social" />
          <FaInstagram className="social" />
          <FaTiktok className="social" />
        </div>
      </div>
    </div>
  );
};

export default BanerMobiles;

