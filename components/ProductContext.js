import { createContext, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export const ProductContext = createContext()

export function ProductContextProvider({children}){
    const [selectProducts,setSelectProducts] = useLocalStorageState('cart',{defaultValue:[]})
    function addProductCart(id) {
        if(typeof selectProducts !== 'undefined'){
          setSelectProducts((prev) => [...prev,id]);
        }else{
          setSelectProducts(id);
        }
      }
    return(
        <ProductContext.Provider value={{selectProducts,setSelectProducts,addProductCart}}>
            {children}
        </ProductContext.Provider>
    )
}