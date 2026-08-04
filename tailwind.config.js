/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        page: 'var(--color-page)',
        card: 'var(--color-card)',
        subtle: 'var(--color-subtle)',
        border: 'var(--color-border)',
        'ink-muted': 'var(--color-text-muted)',
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
        },
        secondary: '#0EA5E9',
        ink: 'var(--color-text)',
        success: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(17, 24, 39, 0.06), 0 4px 16px rgba(17, 24, 39, 0.04)',
        'card-hover': '0 4px 12px rgba(37, 99, 235, 0.12), 0 8px 24px rgba(17, 24, 39, 0.06)',
        glow: '0 0 24px rgba(37, 99, 235, 0.25)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        photoRing: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out both',
        photoRing: 'photoRing 8s linear infinite',
      },
    },
  },
  plugins: [],
}
