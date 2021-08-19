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
        "Model-S":
          "url('https://tickernews.co/wp-content/uploads/2021/06/ms-homepage-social.jpg')",
        "Model-Y":
          "url('https://i0.wp.com/suvcult.com/wp-content/uploads/2021/04/0x0-Model_Y_05-e1618260036195-1024x515.jpg?resize=810%2C407&ssl=1')",
        "Model-3":
          "url('https://cdn.motor1.com/images/mgl/o6rGE/s3/tesla-model-3.webp')",
        "Model-X":
          "url('https://media.zigcdn.com/media/model/2021/Jan/top-view-572315385_600x400.jpg')",
        "Solar-Roof":
          "url('https://cdn.vox-cdn.com/thumbor/rtLLVbRL9_RqhkhRt22WsxsJK6E=/0x0:1672x1134/1200x800/filters:focal(703x434:969x700)/cdn.vox-cdn.com/uploads/chorus_image/image/65556890/Screen_Shot_2019_10_25_at_5.31.31_PM.0.png')",
        "Solar-Pannels":
          "url('https://i1.wp.com/electrek.co/wp-content/uploads/sites/3/2020/06/Tesla-solar-panel.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1')",
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
