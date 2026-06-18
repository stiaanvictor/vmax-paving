import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F6F2",
        ink: {
          DEFAULT: "#111A24",
          soft: "#3A4654",
          muted: "#6B7785",
        },
        navy: {
          900: "#0C2238",
          800: "#10314F",
          700: "#16456F",
        },
        blue: {
          accent: "#1F6FB2",
          bright: "#2E86C9",
        },
        stone: {
          sand: "#C9BFAC",
          line: "#E5E1D8",
          card: "#FBFAF6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      fontWeight: {
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
      },
      borderRadius: {
        md: "0.25rem",
        lg: "0.3rem",
        xl: "0.4rem",
        "2xl": "0.55rem",
        "3xl": "0.8rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,33,47,0.04), 0 12px 32px -12px rgba(16,33,47,0.12)",
        lift: "0 2px 4px rgba(16,33,47,0.05), 0 24px 56px -20px rgba(16,33,47,0.22)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
