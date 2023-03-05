import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { ProductContext } from "./ProductContext";

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
        <title>MiShop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/rafstore.png" />
      </Head>
      <div className="flex flex-col mb-12 p-2 bg-gray-300 dark:bg-gray-900 text-gray-700  dark:text-white justify-center min-h-screen">
        {success && (
          <div className="mb-5 bg-green-400 text-white text-lg p-5 rounded-xl">
            Votre commande a bien éffectué avec successé , AnsumatiBoutique vous
            remercie!!
          </div>
        )}
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
