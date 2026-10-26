/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dos: {
          void: '#04050F',
          midnight: '#0A1030',
          surface: '#0B1339',
          surfaceHover: '#101B4E',
          cyan: '#22E6FF',
          azure: '#2F6BFF',
          indigo: '#3A2BFF',
          violet: '#9B4DFF',
          magenta: '#E23CFF',
          cloud: '#F4F7FF',
          mist: '#C9D4F5',
          muted: '#8A99C2',
          border: 'rgba(47, 107, 255, 0.15)',
          borderSubtle: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at top center, rgba(34, 230, 255, 0.12) 0%, rgba(47, 107, 255, 0.08) 35%, rgba(4, 5, 15, 0) 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(16, 27, 78, 0.5) 0%, rgba(10, 16, 48, 0.7) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #22E6FF 0%, #2F6BFF 50%, #9B4DFF 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(34, 230, 255, 0.3)',
        'glow-azure': '0 0 30px -5px rgba(47, 107, 255, 0.4)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(47, 107, 255, 0.2)',
      }
    },
  },
  plugins: [],
}
