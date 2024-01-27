/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat'],
      },
      colors: {
        'mq-purple': '#8E00FF',
        'mq-blue': '#0B42FF',
        'mq-boring': '#F3F8FE',
      },
    },
  },
  plugins: [],
}

