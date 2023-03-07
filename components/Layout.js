import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { ProductContext } from "./ProductContext";
import {BsFillBagCheckFill} from 'react-icons/bs'
const Layout = ({ children }) => {
  const [success, setSuccess] = useState(false);
  const { setSelectProducts } = useContext(ProductContext);

  //affiche si le payement a reussi
  useEffect(() => {
    if (window.location.href.includes("success")) {
      setSelectProducts([]);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  }, []);
  return (
    <>
      <Head>
        <title>DocRafStore</title>
        <meta name="description" content="DocRafStore est un site d'e-commerce en ligne creer par Abdouraouf Youssouf avec la technologie react" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/rafstore.png" />
      </Head>
      <div className="flex flex-col mb-12 p-2 bg-gray-300 dark:bg-gray-900 text-gray-700  dark:text-white justify-center min-h-screen">
        
        {success && (
          <div className="flex gap-1 justify-center items-center w-auto mb-3 bg-green-500 text-gray-800 dark:text-white text-lg p-2 rounded-lg">
           <BsFillBagCheckFill size={28}/>
           <p className="mt-1"> Votre commande a bien été effectué avec succès , <strong>DocRafStore</strong> vous
            remercie !!</p>
          </div>
        )}
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
