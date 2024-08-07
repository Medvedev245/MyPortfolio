/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Убедитесь, что добавлены все нужные расширения
  ],
  theme: {
    extend: {
      width: {
        1200: '1200px',
      },
    },
  },
  plugins: [],
};
