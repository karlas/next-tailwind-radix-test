import type { Config } from 'tailwindcss'
import { COLORS } from './src/theme/colors'
import { SPACING } from './src/theme/spacing'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: COLORS,
    spacing: SPACING,
  },
  plugins: [],
}
export default config
