/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electric: '#deff00',
        cream: {
          DEFAULT: '#f4f2e6',
          dim: '#e8e6d8',
          muted: 'rgba(244,242,230,0.55)',
          subtle: 'rgba(244,242,230,0.12)',
        },
        'brand-black': {
          DEFAULT: '#000000',
          soft: '#0d0d0d',
          card: '#111111',
        }
      },
      fontFamily: {
        display: ['Bricolage Grotesque', 'Noto Sans Arabic', 'sans-serif'],
        body: ['Instrument Sans', 'Noto Sans Arabic', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      backgroundImage: {
        'electric-glow': 'radial-gradient(ellipse at center, rgba(222,255,0,0.15) 0%, transparent 70%)',
        'section-fade': 'linear-gradient(180deg, #000000 0%, #0d0d0d 100%)',
        'card-border': 'linear-gradient(135deg, rgba(222,255,0,0.4), rgba(222,255,0,0.05))',
      },
      boxShadow: {
        'card-dark': '0 0 0 1px rgba(222,255,0,0.08), 0 8px 40px rgba(0,0,0,0.6)',
        'card-light': '0 0 0 1px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.08)',
        'electric': '0 0 60px rgba(222,255,0,0.2), 0 0 120px rgba(222,255,0,0.08)',
        'button': '0 4px 24px rgba(222,255,0,0.35)',
        'button-hover': '0 8px 40px rgba(222,255,0,0.55)',
      }
    },
  },
  plugins: [],
}
