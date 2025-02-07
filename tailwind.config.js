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
      padding: "1.5rem"
    },
    screens: {
      sm: '40rem',
      md: '48rem',
      lg: '64rem',
      xl: '80rem',
      '2xl': '96rem',
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
          "gray-a": "var(--gray-gradients-a)",
          "gray-b": "var(--gray-gradients-b)",
          "gray-c": "var(--gray-gradients-c)",
          "gray-d": "var(--gray-gradients-d)",
          "primary-a": "var(--primary-gradient-a)",
          "primary-b": "var(--primary-gradient-b)",
          "primary-c": "var(--primary-gradient-c)",
          "primary-d": "var(--primary-gradient-d)",
          "primary-e": "var(--primary-gradient-e)",
          "primary-f": "var(--primary-gradient-f)",
          "primary-g": "var(--primary-gradient-g)",
          "primary-h": "var(--primary-gradient-h)",
        },
        boxShadow: {
          shadow: "var(--color-shadow)",
          "m-shadow": "var(--color-m-shadow)",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addComponents }) {
      addComponents({
        ".content-title-h1": {
          fontSize: "6.25rem",
          lineHeight: "6.875rem",
          fontWeight: "700",
          "@media (max-width: 48rem)":{
            fontSize: "2rem",
            lineHeight: "2.25rem",
            fontWeight: "800",
          }
        },
        ".content-title-h2": {
          fontSize: "4rem",
          lineHeight: "4.5rem",
          fontWeight: "700",
          "@media (max-width: 48rem)":{
            fontSize: "1.75rem",
            lineHeight: "2rem",
            fontWeight: "800",
          }
        },
        ".content-title-h3": {
          fontSize: "2.25rem",
          lineHeight: "2.75rem",
          fontWeight: "700",
          "@media (max-width: 48rem)":{
            fontSize: "1.25rem",
            lineHeight: "1.5rem",
            fontWeight: "800",
          }
        },
        ".content-title-h4": {
          fontSize: "1.75rem",
          lineHeight: "2rem",
          fontWeight: "700",
          "@media (max-width: 48rem)":{
            fontSize: "1.25rem",
            lineHeight: "1.5rem",
            fontWeight: "800",
          }
        },
        ".content-title-h5": {
          fontSize: "1.5rem",
          lineHeight: "1.75rem",
          fontWeight: "700",
          "@media (max-width: 48rem)":{
            fontSize: "1.125rem",
            lineHeight: "1.375rem",
            fontWeight: "800",
          }
        },
        ".content-title-h6": {
          fontSize: "1.25rem",
          lineHeight: "1.5rem",
          fontWeight: "700",
          "@media (max-width: 48rem)":{
            fontSize: "1rem",
            lineHeight: "1.25rem",
            fontWeight: "800",
          }
        },
        ".content-text": {
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
          fontWeight: "400",
          "@media (max-width: 48rem)":{
            fontSize: "0.875rem",
            lineHeight: "1.375rem",
            fontWeight: "500",
          }
        },
        ".content-text-bold": {
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
          fontWeight: "700",
          "@media (max-width: 48rem)":{
            fontSize: "0.875rem",
            lineHeight: "1.375rem",
            fontWeight: "800",
          }
        },
        ".content-text-italic": {
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
          fontWeight: "300",
          fontStyle:"italic",
          "@media (max-width: 48rem)":{
            fontSize: "0.875rem",
            lineHeight: "1.375rem",
            fontWeight: "500",
          }
        },
        ".content-caption": {
          fontSize: "0.75rem",
          lineHeight: "1.25rem",
          fontWeight: "400",
          "@media (max-width: 48rem)":{
            fontSize: "0.875rem",
            lineHeight: "1.375rem",
            fontWeight: "500",
          }
        },
        ".motion": {
          fontSize: "8.75rem",
          lineHeight: "8.75rem",
          fontWeight: "700",
          "@media (max-width: 48rem)":{
            fontSize: "2.5rem",
            lineHeight: "2.5rem",
            fontWeight: "500",
          }
        },
        ".motion-2": {
          fontSize: "4rem",
          lineHeight: "5.9375rem",
          fontWeight: "700",
          "@media (max-width: 48rem)":{
            fontSize: "1.5rem",
            lineHeight: "2.5rem",
            fontWeight: "800",
          }
        },
        ".menu-section": {
          fontSize: "0.875rem",
          lineHeight: "1.75rem",
          fontWeight: "500",
        },
        ".button-md": {
          fontSize: "1rem",
          lineHeight: "1.25rem",
          fontWeight: "700",
        },
      });
    }),
  ],
});
