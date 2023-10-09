import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "cosnova-red": "rgb(172, 0, 62)",
      "white": "#fff",
    },
    extend: {
      backgroundImage: {
        'page-gradient': 'linear-gradient(320deg,#f27121,#e94057,#8a2387)',
      },
    },
  },
  plugins: [],
}
export default config
