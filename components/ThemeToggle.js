// components/ThemeToggle.js

import { useEffect, useState } from 'react';
import { MdLightMode, MdNightlight } from 'react-icons/md';

function ThemeToggle() {
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
