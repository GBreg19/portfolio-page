export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 700ms infinite",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 }, 
          "100%": { opacity: 1 }, 
        },
      }),
      fontFamily: {
        spaceMonoReg: ["SpaceMono-Regular"],
        spaceMonoIta: ["SpaceMono-Italic"],
        spaceMonoBoldIta: ["SpaceMono-BoldItalic"],
        spaceMonoBold: ["SpaceMono-Bold"],
        vtReg: ["VT323-Regular"],
      },
    },
  },
};
