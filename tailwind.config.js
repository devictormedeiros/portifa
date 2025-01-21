const plugin = require("tailwindcss/plugin");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.scss",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        black: {
          5: "var(--black-5)",
          10: "var(--black-10)",
          20: "var(--black-20)",
          30: "var(--black-30)",
          40: "var(--black-40)",
          50: "var(--black-50)",
          60: "var(--black-60)",
          70: "var(--black-70)",
          80: "var(--black-80)",
          90: "var(--black-90)",
          100: "var(--black-100)",
        },
        white: {
          10: "var(--white-10)",
          20: "var(--white-20)",
          30: "var(--white-30)",
          40: "var(--white-40)",
          50: "var(--white-50)",
          60: "var(--white-60)",
          70: "var(--white-70)",
          80: "var(--white-80)",
          90: "var(--white-90)",
          100: "var(--white-100)",
        },
        gray: {
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
        },
        primary: {
          DEFAULT: "var(--primary)",
        },
        gradient: {
          "gray-a": "var(--gray-gradient-a)",
          "gray-b": "var(--gray-gradient-b)",
          "gray-c": "var(--gray-gradient-c)",
          "gray-d": "var(--gray-gradient-d)",
          "primary-a": "var(--gradient-primary-a)",
          "primary-b": "var(--gradient-primary-b)",
          "primary-c": "var(--gradient-primary-c)",
          "primary-d": "var(--gradient-primary-d)",
          "primary-e": "var(--gradient-primary-e)",
          "primary-f": "var(--gradient-primary-f)",
          "primary-g": "var(--gradient-primary-g)",
          "primary-h": "var(--gradient-primary-h)",
        },
        boxShadow: {
          shadow: "var(--color-shadow)",
          "m-shadow": "var(--color-m-shadow)",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".content-title-h1": {
          fontSize: "100px",
          lineHeight: "110px",
          fontWeight: "700",
          "@media (max-width: 768px)":{
            fontSize: "32px",
            lineHeight: "36px",
            fontWeight: "800",
          }
        },
        ".content-title-h2": {
          fontSize: "64px",
          lineHeight: "72px",
          fontWeight: "700",
          "@media (max-width: 768px)":{
            fontSize: "28px",
            lineHeight: "32px",
            fontWeight: "800",
          }
        },
        ".content-title-h3": {
          fontSize: "36px",
          lineHeight: "44px",
          fontWeight: "700",
          "@media (max-width: 768px)":{
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: "800",
          }
        },
        ".content-title-h4": {
          fontSize: "28px",
          lineHeight: "32px",
          fontWeight: "700",
          "@media (max-width: 768px)":{
            fontSize: "20px",
            lineHeight: "24px",
            fontWeight: "800",
          }
        },
        ".content-title-h5": {
          fontSize: "24px",
          lineHeight: "28px",
          fontWeight: "700",
          "@media (max-width: 768px)":{
            fontSize: "18px",
            lineHeight: "22px",
            fontWeight: "800",
          }
        },
        ".content-title-h6": {
          fontSize: "20px",
          lineHeight: "24px",
          fontWeight: "700",
          "@media (max-width: 768px)":{
            fontSize: "16px",
            lineHeight: "20px",
            fontWeight: "800",
          }
        },
        ".content-text": {
          fontSize: "18px",
          lineHeight: "28px",
          fontWeight: "400",
          "@media (max-width: 768px)":{
            fontSize: "14px",
            lineHeight: "22px",
            fontWeight: "500",
          }
        },
        ".content-text-bold": {
          fontSize: "18px",
          lineHeight: "28px",
          fontWeight: "700",
          "@media (max-width: 768px)":{
            fontSize: "14px",
            lineHeight: "22px",
            fontWeight: "800",
          }
        },
        ".content-text-italic": {
          fontSize: "18px",
          lineHeight: "28px",
          fontWeight: "300",
          fontStyle:"italic",
          "@media (max-width: 768px)":{
            fontSize: "14px",
            lineHeight: "22px",
            fontWeight: "500",
          }
        },
        ".content-caption": {
          fontSize: "12px",
          lineHeight: "20px",
          fontWeight: "400",
          "@media (max-width: 768px)":{
            fontSize: "14px",
            lineHeight: "22px",
            fontWeight: "500",
          }
        },
        ".motion": {
          fontSize: "140px",
          lineHeight: "140px",
          fontWeight: "700",
          "@media (max-width: 768px)":{
            fontSize: "40px",
            lineHeight: "40px",
            fontWeight: "500",
          }
        },
        ".motion-2": {
          fontSize: "64px",
          lineHeight: "95px",
          fontWeight: "700",
          "@media (max-width: 768px)":{
            fontSize: "24px",
            lineHeight: "40px",
            fontWeight: "800",
          }
        },
        ".menu-section": {
          fontSize: "14px",
          lineHeight: "28px",
          fontWeight: "500",
        },
        ".button-md": {
          fontSize: "16px",
          lineHeight: "20px",
          fontWeight: "700",
        },
      });
    }),
  ],
});
