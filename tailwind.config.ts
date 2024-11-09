import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        lg: '1142px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        blackPrimary: 'rgb(var(--black-primary) / <alpha-value>)',
        blackSecondary: 'rgb(var(--black-secondary) / <alpha-value>)',
        footerBg: 'rgb(var(--footer-bg) / <alpha-value>)',
        whiteSolid: 'rgb(var(--white-solid) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
export default config;
