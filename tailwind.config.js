module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        mid: "100vh",
      },
      width: {
        mid: "500px",
      },
      backgroundImage: (theme) => ({
        modelSInterior:
          "url('https://cdn.motor1.com/images/mgl/0MnWm/s1/2021-tesla-model-s-plaid.jpg')",
      }),
      colors: {
        "gray-150": "rgba(255, 255, 255, 0.9)",
        "gray-450": "rgba(73, 73, 73, 0.1)",
        "gray-550": "rgba(37, 37, 37, 0.9)",
        "gray-650": "rgba(73, 73, 73, 0.4)",
      },
    },
  },
  variants: {
    extend: { backgroundImage: ["hover", "focus"] },
  },
  plugins: [],
};
