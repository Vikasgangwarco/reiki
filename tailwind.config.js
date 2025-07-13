// tailwind.config.js
module.exports = {
    content: [
      './app/**/*.{js,jsx,ts,tsx}', // Include TypeScript files as well
      './pages/**/*.{js,jsx,ts,tsx}', // Include the pages directory if you use it
      './components/**/*.{js,jsx,ts,tsx}', // Include the components directory if you use it
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['var(--font-poppins)', 'sans-serif'],
          roboto: ['var(--font-roboto)', 'sans-serif'],
          playfair: ['var(--font-playfair)', 'serif'],
        },
      },
    },
    plugins: [],
  };
  