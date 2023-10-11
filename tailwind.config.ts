import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
        sm: { max: "767.98px" },
        md: "768px",
        lg: "1280px",
      },
    extend: {
      container: {
      padding: {
        sm: '20px',
        md: '32px',
        lg: '104px',
      },
      center: true,
      },
      colors: {
        'backdrop-color': 'rgba(1, 10, 5, 0.75)',
        'font-color': 'rgba(255, 255, 255, 0.20)'
      }
    },
  },
  plugins: [],
};
export default config;
