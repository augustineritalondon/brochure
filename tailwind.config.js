module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        button: '#oc4a6e',
        secondary: {
          100: '#e2e2d5',
          200: '#888883',
          300: 'rgb(12, 74, 110)'
        }
      },
      FontFamily:{
        body: ['Nunito']
      },
      
    },
  },
  plugins: [],
}
