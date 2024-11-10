const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2D3748',
          dark: '#E2E8F0',
        },
        background: {
          light: '#FFFFFF',
          dark: '#1A202C',
        },
        accent: '#6366F1', // Indigo that works well in both modes
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config