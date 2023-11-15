/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        mavenPro: ["Maven Pro", "sans-serif"],
      },
      keyframes: {
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate: "rotate 4s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["black"],
  },
}
