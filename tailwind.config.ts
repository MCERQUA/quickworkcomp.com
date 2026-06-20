import type { Config } from "tailwindcss";

/* ============================================================
   QUICK WORK COMP — "High-Vis Orange & Charcoal" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to high-vis orange (primary) / charcoal dark
   (secondary) / gold (accent).
   clay = orange · sage = charcoal · gold = warm amber
   cream = off-white · sand = warm gray
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F5",
        sand: "#F2EEE8",
        white: "#FFFFFF",
        adobe: "#DDD8D0",
        adobeDark: "#C8C2B8",
        clay: {
          DEFAULT: "#E05A00",
          dark: "#C04800",
          light: "#F07010",
          50: "#FEF3EC",
          100: "#FDE3D0",
          200: "#FAC5A0",
          300: "#F6A070",
          400: "#F07010",
          500: "#E05A00",
          600: "#C04800",
          700: "#9A3800",
          800: "#742800",
          900: "#4E1A00",
        },
        sage: {
          DEFAULT: "#2C3038",
          dark: "#1A1E24",
          light: "#404550",
          50: "#EEEEF0",
          100: "#D8D9DC",
          200: "#B0B3B9",
          300: "#888D96",
          400: "#606773",
          500: "#404550",
          600: "#2C3038",
          700: "#1A1E24",
        },
        gold: {
          DEFAULT: "#F08020",
          dark: "#D06010",
          light: "#F8A040",
          50: "#FEF5EA",
          100: "#FDE8CC",
          200: "#FAD099",
          300: "#F6B566",
          400: "#F8A040",
          500: "#F08020",
          600: "#D06010",
          700: "#A84800",
        },
        espresso: "#0E1015",
        cocoa: "#1C2028",
        mocha: "#484C54",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FAF8F5 0%, #F2EEE8 40%, #FEF3EC 70%, #FAF8F5 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(224,90,0,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(44,48,56,0.06) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #E05A00 0%, #F07010 100%)",
        "sage-gradient": "linear-gradient(135deg, #1A1E24 0%, #2C3038 100%)",
        "gold-gradient": "linear-gradient(135deg, #F08020 0%, #F8A040 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(224,90,0,0.28), 0 4px 12px -6px rgba(14,16,21,0.10)",
        "warm-lg": "0 30px 70px -20px rgba(224,90,0,0.34), 0 10px 30px -10px rgba(14,16,21,0.12)",
        card: "0 2px 8px -2px rgba(14,16,21,0.08), 0 1px 3px -1px rgba(14,16,21,0.04)",
        "card-hover": "0 20px 50px -15px rgba(224,90,0,0.28), 0 8px 20px -8px rgba(14,16,21,0.12)",
        arch: "inset 0 -8px 30px -10px rgba(224,90,0,0.12)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
