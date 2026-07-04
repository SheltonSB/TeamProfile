/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F5F7FA",
          100: "#E7ECF3",
          700: "#12385F",
          800: "#0B2D55",
          900: "#082345",
          950: "#071A2D"
        },
        orange: {
          400: "#F6A647",
          500: "#F47B20",
          600: "#D86414"
        }
      },
      boxShadow: {
        corporate: "0 18px 50px rgba(8, 35, 69, 0.12)",
        panel: "0 24px 70px rgba(7, 26, 45, 0.2)"
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(8,35,69,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(8,35,69,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
