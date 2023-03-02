import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaBlenderPhone,
  FaTiktok,
} from "react-icons/fa";

const BanerCasque = () => {
  return (
    <div className="flex w-full justify-between h-v6 rounded-lg p-4 max-sm:p-1 bg-deg relative ">
      <div className=" flex flex-1 justify-between max-md:justify-center max-sm:flex-col-reverse ">
        <div className="flex flex-col grow justify-between items-start p-5 ">
          <p className="font-black uppercase text-4xl text-white max-lg:text-3xl max-lg:absolute max-lg:top-5 max-md:text-xl">
            the best of the best</p>
          <div className="flex justify-center bac-text rounded-full text-center gap-4 text-white font-bold text-3xl max-md:text-lg bg-rose-500 p-3  top-32 left-25 max-lg:absolute max-sm:top-28  max-lg:left-20 max-sm:left-5">
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

        <img src="/products/airpods.png" className=" p-3 absolute left-60 top-20 max-lg:hidden h-v3" />
        <img src="/products/headset.png" className=" p-3 flex-1 h-v4" />
        </div>
      </div>

      <div className="flex flex-col p-4 justify-around items-start max-lg:items-end max-sm:mt-10">
        <div className="flex flex-col gap-1 max-sm:items-end ">
          <h2 className="font-conso text-3xl text-white max-md:text-2xl">New arrival</h2>
          <h1 className="uppercase font-tury text-5xl font-black text-red-600 z-10 max-md:text-3xl max-lg:text-4xl">
            Headphone
          </h1>
          <p className="capitalize font-roma text-lg italic text-white">
            Today's Super offre
          </p>
        </div>
        <button className="p-2 bg-rose-600 font-bold uppercase text-white rounded-lg z-10">
          Order Now
        </button>
        <div className="flex gap-2 justify-center self-center max-md:self-end">
          <FaFacebook className="social" />
          <FaInstagram className="social" />
          <FaTiktok className="social" />
        </div>
      </div>
    </div>
  );
};

export default BanerCasque;
