import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f0e17",
        title: "#fffffe",
        paragraph: "#a7a9be",
        button: "#ff8906",
        buttonText: "#fffffe",
        stroke: "#000",
        main: "#fffffe",
        highlight: "#ff8906",
        secondary: "#f25f4c",
        tertiary: "#e53170",
      },
    },
  },
  plugins: [],
} satisfies Config;
