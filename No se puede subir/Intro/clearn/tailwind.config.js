module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      fontSize: {
        xxs: ["10px", "12px"],
      },
      animation: {
        "quick-pulse": "pulse 0.5s cubic-bezier(0.4, 0, 0.6, 1) 2",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("./plugins/tailwindcss/scrollbar"),
  ],
}
