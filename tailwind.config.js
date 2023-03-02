/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ss: '350px',
      sm: '483px',
      xm: '500px',
      xx: '620px',
      md: '768px',
      lg: '976px',
      xg: '1100px',
      xl: '1440px',
    },
    minHeight: {
      90: '90vh',
    },
   
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus', 'group-active', 'disabled'],
      backgroundOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus', 'group-active', 'disabled'],
    },
  },
  
  plugins: [
    require('tailwind-scrollbar-hide')
    
  ]
}