/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#951018",
        // secondary: "#ffff65",
        menuText: "#281236",
        menu: "#000ac2",
        cover: "#951018",
        border: "rgba(00, 6, 129, 1)"
      },
      backgroundImage: {
        gradient: "linear-gradient(0deg, rgba(34, 4, 66, 1) 0%, rgba(66, 6, 129, 1) 100%)"
      },
      animation: {
        cover: "cover 0.5s forwards ease-out"
      },
      keyframes: {
        cover: {
          "100%": { width: "100%" },
        }
      }
    },
  },
  plugins: [],
}

