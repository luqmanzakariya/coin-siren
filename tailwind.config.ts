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
        blackMenu: 'rgb(var(--black-menu) / <alpha-value>)',
        footerBg: 'rgb(var(--footer-bg) / <alpha-value>)',
        whiteSolid: 'rgb(var(--white-solid) / <alpha-value>)',
        primaryBlue: 'rgb(var(--primary-blue) / <alpha-value>)',
        lightBlue: 'rgb(var(--light-blue) / <alpha-value>)',
        lightBluePrimary: 'rgb(var(--light-blue-primary) / <alpha-value>)',
        blackCard: 'rgb(var(--black-card) / <alpha-value>)',
        greyPrimary: 'rgb(var(--grey-primary) / <alpha-value>)',
        lightGreen: 'rgb(var(--light-green) / <alpha-value>)',
        greenPrimary: 'rgb(var(--green-primary) / <alpha-value>)',
        yellowPrimary: 'rgb(var(--yellow-primary) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
export default config;
