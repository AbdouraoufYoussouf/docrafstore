import { createContext, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export const ProductContext = createContext()

export function ProductContextProvider({ children }) {
  const [selectProducts, setSelectProducts] = useLocalStorageState('cart', { defaultValue: [] })
  const [seeProducts, setSeeProducts] = useLocalStorageState('see', { defaultValue: [] })
  const [isDarkMode, setIsDarkMode] = useState(true);

  // ajout au local state le produit vu rescent
  function addProductSee(id) {
    if (typeof selectProducts !== 'undefined') {
      var existIds = seeProducts?.filter((p) => p.id !== id);
      if (!seeProducts.includes(id)) {
        setSeeProducts((prev) => [...prev, id]);
      } else {
        setSeeProducts(existIds);
      }
    } else {
      setSelectProducts(id);
    }
  }
  function addProductCart(id) {
    if (typeof selectProducts !== 'undefined') {
      setSelectProducts((prev) => [...prev, id]);
    } else {
      setSelectProducts(id);
    }
  }
  return (
    <ProductContext.Provider value={{
      selectProducts, setSelectProducts, addProductCart,
      seeProducts, addProductSee,isDarkMode,setIsDarkMode
    }}>
      {children}
    </ProductContext.Provider>
  )
}