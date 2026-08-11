export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#04070f',
          900: '#060a13',
          800: '#080d1a',
          700: '#0c1322',
          600: '#111a2d',
          500: '#18233b',
        },
        electric: {
          50: '#eaf2ff',
          100: '#d3e3ff',
          200: '#a9c8ff',
          300: '#7aa8ff',
          400: '#4f8bff',
          500: '#2e7bff',
          600: '#1c5fe0',
          700: '#164ab3',
          800: '#123a8c',
          900: '#0f2f70',
        },
        cyanx: {
          300: '#67e8f9',
          400: '#38d3ee',
          500: '#12b9d8',
        },
        signal: {
          online: '#22d38a',
          warn: '#f5b544',
          crit: '#ff5a6a',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(46,123,255,0.25), 0 12px 40px -12px rgba(46,123,255,0.55)',
        'glow-soft': '0 18px 60px -24px rgba(46,123,255,0.5)',
        panel: '0 24px 80px -40px rgba(0,0,0,0.9)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
