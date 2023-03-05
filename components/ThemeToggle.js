import { useContext, useEffect, useState } from 'react';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import { ProductContext } from './ProductContext';

function ThemeToggle() {
  const {isDarkMode,toggleTheme} = useContext(ProductContext)

  return (
    <button
      className="text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      onClick={toggleTheme}
    >
      {isDarkMode ? <MdLightMode size={35} color='white' /> : <MdNightlight size={35} className='text-gray-700' />}
    </button>
  );
}

export default ThemeToggle;
