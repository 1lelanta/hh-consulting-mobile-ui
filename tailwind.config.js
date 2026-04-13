/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        design: {
          primary: "#050816",
          secondary: "#0B1730",
          accent: "#D5B223",
          surface: "#0F172A",
          muted: "#94A3B8",
          paper: "#F6F8FC",
        },
        brand: {
          navy950: "#08192D",
          navy900: "#0D284A",
          navy800: "#163B63",
          gold500: "#BE9A5A",
          gold400: "#D7BC86",
          gray050: "#F7F9FC",
          gray200: "#E7ECF3",
          gray500: "#627284",
        },
      },
      boxShadow: {
        glass: "0 10px 30px rgba(2, 6, 23, 0.28)",
        soft: "0 20px 50px rgba(8, 25, 45, 0.12)",
        card: "0 14px 30px rgba(8, 25, 45, 0.08)",
        lift: "0 20px 45px rgba(2, 6, 23, 0.18)",
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"],
      },
      fontSize: {
        hero: ["clamp(3.25rem, 7vw, 6.25rem)", { lineHeight: "0.94", letterSpacing: "-0.05em" }],
        h1: ["clamp(2.4rem, 4vw, 4.2rem)", { lineHeight: "1", letterSpacing: "-0.04em" }],
        h2: ["clamp(1.75rem, 2.5vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        body: ["1rem", { lineHeight: "1.7" }],
      },
      spacing: {
        section: "5rem",
        sectionLg: "7rem",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(14px) scale(0.99)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        reveal: "reveal 700ms ease forwards",
      },
    },
  },
  plugins: [],
};
