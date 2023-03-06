import { createContext, useState ,useEffect} from "react";
import { toast } from "react-toastify";
import useLocalStorageState from "use-local-storage-state";

export const ProductContext = createContext()

export function ProductContextProvider({ children }) {
  const [selectProducts, setSelectProducts] = useLocalStorageState('cart', { defaultValue: [] })
  const [seeProducts, setSeeProducts] = useLocalStorageState('see', { defaultValue: [] })

  // theme context
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    const theme = localStorage.getItem('theme');
    console.log('theme:',theme)
    setIsDarkMode(isDark);
    if(isDarkMode){
      document.documentElement.classList.add('dark')
    }
  }, [isDarkMode]);


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark');
  };
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

  //notification added to cart

  const notify = (result) =>
        toast.info(result, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

  function addProductCart(id) {
    notify(`produit ajouté au panier!`);
    if (typeof selectProducts !== 'undefined') {
      setSelectProducts((prev) => [...prev, id]);
    } else {
      setSelectProducts(id);
    }

  }
  return (
    <ProductContext.Provider value={{
      selectProducts, setSelectProducts, addProductCart,
      seeProducts, addProductSee,isDarkMode,toggleTheme
    }}>
      {children}
    </ProductContext.Provider>
  )
}