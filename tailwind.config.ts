import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#f5f5f5",
        cobalt: "#e8c96d",
        lagoon: "#35d0c2",
        gold: "#e8c96d",
        sand: "#151515",
        milk: "#0a0a0a",
      },
      boxShadow: {
        glass: "0 18px 70px rgba(0, 0, 0, 0.35)",
        lift: "0 24px 80px rgba(232, 201, 109, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
