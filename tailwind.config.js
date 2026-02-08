/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        'primary-hover': '#1D4ED8',
        dark: '#0F172A',
        'soft-bg': '#F8FAFF',
        card: '#FFFFFF',
        border: '#E5EDFF',
        muted: '#6B7280',
        success: '#22C55E',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '16px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(37, 99, 235, 0.08)',
        'soft-lg': '0 4px 16px rgba(37, 99, 235, 0.12)',
      },
    },
  },
  plugins: [],
}
