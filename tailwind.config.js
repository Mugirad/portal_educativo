/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      xs:   '480px',
      mxs:  '100px',
      mxs2: '200px',
      mxs3: '300px',
      mxs4: '400px'
    },
  },
  plugins: [],
};
