import { createContext, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export const ProductContext = createContext()

export function ProductContextProvider({children}){
    const [selectProducts,setSelectProducts] = useLocalStorageState('cart',{defaultValue:[]})

    return(
        <ProductContext.Provider value={{selectProducts,setSelectProducts}}>
            {children}
        </ProductContext.Provider>
    )
}