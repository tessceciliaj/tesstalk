import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        k2d: "k2d",
      },
      color: {
        accentPink: "#F94390",
        accentPurple: "#6100CF",
        lightColor: "#FFFFFF",
        darkColor: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
