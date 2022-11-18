/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('/images/desktop/image-hero.jpg')",
        "mobile-hero": "url('/images/mobile/image-hero.jpg')",
      },
      colors: {
        "dark-gray": "hsl(0, 0%, 55%)",
        "very-dark-gray": "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        alata: "'Alata', sans-serif",
        josefin: "'Josefin Sans', sans-serif",
      },
      spacing: {
        37: "580px",
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
