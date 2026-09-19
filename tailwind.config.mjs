


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // ashyBlack: "#060606",
        // cream: "#fff6ea",
        // paleOrange: "#df8e56",
        // lightOrange: "#fff6ea",



        // Backgrounds & Canvas
        base: "#0B0F19",        
        surface: "#111827",
        surfaceBorder: "#1F2937", 
        

        // Typography
        textPrimary: "#F9FAFB", 
        textMuted: "#9CA3AF", 

        // Accents & Actions
        primary: "#6366F1",    
        primaryHover: "#4F46E5",
        accent: "#06B6D4",

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
