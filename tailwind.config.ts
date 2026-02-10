import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pink: '#FF2D7C',
        cyan: '#00D4FF',
        purple: '#9B5DE5',
        yellow: '#FFE66D',
        dark: '#0D0D0D',
        cream: '#FFF8E7',
      },
      fontFamily: {
        comic: ['Comic Neue', 'cursive'],
        bangers: ['Bangers', 'cursive'],
        marker: ['Permanent Marker', 'cursive'],
      },
      boxShadow: {
        'panel': '8px 8px 0 #0D0D0D',
        'panel-hover': '12px 12px 0 #0D0D0D',
        'panel-dark': '8px 8px 0 #FF2D7C',
        'panel-dark-hover': '12px 12px 0 #FF2D7C',
      },
    },
  },
  plugins: [],
} satisfies Config;
