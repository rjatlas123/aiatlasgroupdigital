/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#6AFFD2",       // neon mint green
          2: "#FFC876",       // soft yellow
          3: "#FF776F",       // coral red
          4: "#7ADB78",       // bright green
          5: "#858DFF",       // soft purple-blue
          6: "#FF98E2",       // pink neon
        },
        stroke: {
          1: "#26242C",       // subtle divider
        },
        n: {
          1: "#ffffff",       // pure white
          2: "#dcdceb",       // text light
          3: "#ADA8C3",       // description
          4: "#757185",       // caption
          5: "#3F3A52",       // soft black
          6: "#2C283C",       // card inner
          7: "#1A1824",       // card deep
          8: "#0E0C15",       // base dark
          9: "#1B1B2E",       // page bg base
          10: "#222131",      // hover overlays
          11: "#13111C",      // deep background
          12: "#2E2A41",      // modal bg
          13: "#6C7275",      // outline stroke
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #fa5353, #79a0ff, #9F53FF, #FF98E2, #fa5353)",
        "benefit-card-1": "url(assets/benefits/card-1.svg)",
        "benefit-card-2": "url(assets/benefits/card-2.svg)",
        "benefit-card-3": "url(assets/benefits/card-3.svg)",
        "benefit-card-4": "url(assets/benefits/card-4.svg)",
        "benefit-card-5": "url(assets/benefits/card-5.svg)",
        "benefit-card-6": "url(assets/benefits/card-6.svg)",
        "holo-glow":
          "radial-gradient(ellipse at top left, rgba(106,255,210,0.15), transparent 60%)",
        "profilio-overlay":
          "linear-gradient(180deg, rgba(14,12,21,0.8) 0%, rgba(14,12,21,1) 100%)",
        "profilio-grid":
          "repeating-linear-gradient(0deg, #15131d 0px, #15131d 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, #15131d 0px, #15131d 1px, transparent 1px, transparent 24px)",
        "profilio-fade":
          "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(14,12,21,0.95) 100%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]": {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]": {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight": {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply text-xl leading-normal": {},
        },
      });
    }),
  ],
};
