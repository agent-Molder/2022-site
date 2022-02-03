module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'serif': ['ui-serif', 'Georgia'],
    },
    colors: {
      transparent: 'transparent',
      white:"#fff",
      black:"#000",
      "soft-slate": "rgb(23 23 23)",
      "soft-navy": "#171E37",
      "rose-pink": "#A26769",
      "green":{ 
        DEFAULT: "#0F1F0A",
        "forest": "#162D0F",
        "moss": "#2D5C1F",
    },
      "eggshell": {
        DEFAULT: "#FAF8EF",
        1: "#ECE5C0",
        2: "#E3D8A1",
        3:"#DED190"},
      "amber": "#B45309",
      "exciting-orange": "#D5630B",
    },
    extend: {},
  },
  plugins: [],
}
