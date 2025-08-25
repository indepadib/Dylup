/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dylup: {
          blue: '#4B9EFF',
          indigo: '#2C42E2',
          violet: '#9E49FC',
          black: '#0B0B0F'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(36, 27, 255, 0.12)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(1350px 650px at 10% 10%, rgba(75,158,255,0.18) 0%, rgba(156,89,255,0.12) 40%, rgba(255,255,255,0) 70%)',
        'dylup-gradient':
          'linear-gradient(90deg, #4B9EFF 0%, #2C42E2 40%, #9E49FC 100%)'
      }
    },
  },
  plugins: [],
}
