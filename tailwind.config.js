/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradientX 3s linear infinite',
      },
      
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        gradientX: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      fontFamily: {
        haka: ['haka', 'sans-serif'],
      },
      colors:{
        'bg' : "#FFF6E9",
        'foretext' : "#FF7F3E",
        'sectext' : "#007c7d",
      }
  },
  plugins: [],
}
}