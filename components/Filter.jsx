import React, { useEffect, useState } from "react";
import { BsFilterSquare } from 'react-icons/bs'
import { RiMoneyPoundCircleLine } from 'react-icons/ri'
import { motion } from "framer-motion";
import Search from "./Search";
import { FaTimes } from "react-icons/fa";


const prixData = [
  { min: 0, max: 10, label: "Moins de 10€" },
  { min: 10, max: 50, label: "10€ à 50€" },
  { min: 50, max: 100, label: "50€ à 100€" },
  { min: 100, max: 500, label: "100€ à 500€" },
  { min: 500, max: 1000, label: "500€ à 1000€" },
  { min: 1000, max: 2000, label: "1000€ à 2000€" },
  { min: 2000, max: 100000000, label: "Plus 2000€" }
];
const Filter = ({ data, setData, category, products }) => {
  const [phrase, setPhrase] = useState('')

  const [showfiltrer, setShowfiltrer] = useState(true)
  const [isShowfiltrer, setIsShowfiltrer] = useState(false)

  var [priceFiltered, setPriceFiltered] = useState([]);
  const [isPrice, setIsPrice] = useState(false)
  // setDataMarque
  var [marqFiltered, setMarqFiltered] = useState([]);
  const [isMarque, setIsMarque] = useState(false);

  const marques = Array.from(new Set(
    data.filter(product => product.category === category)
      .map(product => product.marque)
  ));

  //trier les donné par prix
  const [lastSort, setLastSort] = useState(null);

  const sortByPrice = () => {
    let newSort;
    if (lastSort === "asc") {
      newSort = "desc";
      setData([...data].sort((a, b) => b.price - a.price));
    } else {
      newSort = "asc";
      setData([...data].sort((a, b) => a.price - b.price));
    }
    setLastSort(newSort);
  };

  // Fonction qui gere les marques cochés ou decochés
  var handleMarque = (e) => {
    let isChecked = e.target.checked;
    let marque = e.target.value;
    let id = e.target.id;
    setIsMarque(!isMarque);
    let temp = { id: id, marque: marque };
    if (isChecked === true) {
      marqFiltered.push(temp);
    }
    if (isChecked === false) {
      var temps = marqFiltered?.filter((m) => m.id !== id);
      setMarqFiltered(temps);
    }
  };

  // fonction qui gere les prix cochés
  const handlePriceChange = (e) => {
    let isChecked = e.target.checked;
    let price = e.target.value;
    let id = e.target.id;
    setIsPrice(!isPrice);
    let temp = prixData[id];
    if (isChecked === true) {
      priceFiltered.push(temp);
    }
    if (isChecked === false) {
      var temps = priceFiltered?.filter((p) => p.label !== price);
      setPriceFiltered(temps);
    }
  };
  // Fonction qui va filitrer automatiquement dans useEffect+
  // la data selon les marques selectionnés et  prix selection
  function filterProducts(products, marqueFilters, priceFilters) {
    let filtered = [...products];

    if (marqueFilters.length > 0) {
      filtered = filtered.filter(product => {
        for (const filter of marqueFilters) {
          if (product.marque.toLowerCase().includes(filter.marque.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
    }

    if (priceFilters.length > 0) {
      filtered = filtered.filter(product => {
        for (const filter of priceFilters) {
          if (product.price >= filter.min && product.price < filter.max) {
            return true;
          }
        }
        return false;
      });
    }

    return filtered;
  }

  useEffect(() => {
    const filtered = filterProducts(data, marqFiltered, priceFiltered);
    setData(filtered);
  }, [isMarque, isPrice]);

  // hide filter
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 768) {
        setShowfiltrer(true);
      } else {
        setShowfiltrer(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}

      className="w-[230px] md:min-h-90 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300 p-1 flex flex-col sticky top-0  max-md:w-full "  >
      <div className="flex items-center  md:hidden justify-between hover:bg-gray-200 dark:hover:bg-gray-600 hover:rounded-lg p-1 " >
        <div className='cursor-pointer'>
          {
            showfiltrer ? (<FaTimes onClick={() => setShowfiltrer(false)}
              className="hover:text-blue " size={30} />) : (
              <BsFilterSquare onClick={() => setShowfiltrer(true)}
                className="hover:text-blue " size={30} />
            )
          }
        </div>
        <div className='md:hidden flex-1 mx-2 '>
          <Search setData={setData} setSearch={setPhrase} products={products} />
        </div>
        <RiMoneyPoundCircleLine onClick={sortByPrice} className="cursor-pointer hover:text-red-600" size={34} />
      </div>

      <div className="flex max-md:hidden cursor-pointer justify-between hover:bg-gray-200 dark:hover:bg-gray-600 hover:rounded-lg p-1 " >

        <BsFilterSquare className="hover:text-red-600 " size={30} />
        <RiMoneyPoundCircleLine onClick={sortByPrice} className="cursor-pointer hover:text-red-600" size={34} />

      </div>
      {
        showfiltrer &&
        <div className="flex flex-col max-md:flex-row p-1 gap-3 bg-gray-100 dark:bg-gray-800 rounded-lg">

          <div className=" flex flex-col  basis-1">
            <h3 className="text-left font-bold text-lg">Marque</h3>
            <div className="flex flex-col max-md:flex-row max-md:flex-wrap max-md:justify-cennter max-md:items-start max-xs:gap-1 max-md:max-h-32  overflow-y-auto scrol">
              {marques.map(
                (marq, index) =>
                  marq !== "" && (
                    <div key={index} className="flex items-center gap-2 max-md:gap-0.5 max-md:min-w-[4.5rem] mr-4">
                      <input
                        onChange={(e) => handleMarque(e)}
                        type="checkbox"
                        id={index}
                        name={marq}
                        value={marq}
                        className="form-checkbox h-4 w-4"
                      />
                      <h5 className="capitalize text-xm font-bold font-tury text-gray-600 dark:text-gray-400">{marq}</h5>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="flex flex-col flex-1">

            <h3 className="text-left font-bold text-lg">Prix</h3>
            <div className=" grid sm:grid-cols-2 xx:grid-cols-3  md:grid-cols-1 max-xs:gap-1 max-md:max-h-32 overflow-y-auto">
              {prixData.map((range, index) => (
                <div key={range.label} className="flex gap-2 items-center  ">
                  <input
                    type="checkbox"
                    id={index}
                    value={range.label}
                    onChange={handlePriceChange}
                    className="form-checkbox h-4 w-4"
                  />
                  <h5 className="italic text-lg font-tury font-bold text-gray-600 dark:text-gray-400">{range.label}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      }


    </motion.div>
  );
};

export default Filter;
