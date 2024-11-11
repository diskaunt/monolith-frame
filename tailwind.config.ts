import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'orange-500': '#DF462A',
				'blue-500': '#0B1D40',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        drucSyr: ['var(--font-drucSyr)'],
				halvarBreit: ['var(--font-halvarBreit)'],
      },
			width: {
				'menuDev': 'calc(100vw - 753px)',
				'devConst-hd': 'calc(100vw - 117px - 40px)',
				'nav-sm': 'calc(100% - 40px)',
				'nav': 'calc(100% - 32px)',
			},
			spacing: {
				'complex-x': 'calc(100% + 6px)',
			  'complex-y': 'calc(-100% + -6px)',
				'scroll': 'calc(100vw-17px)',
			}
    },
    screens: {
			'sm': '640px',
			'md': '768px',
			'hd': '1368px',
			'fhd': '1920px',
    },
		letterSpacing: {
			tighter: '-.03em',
			tight: '-.01em',
			normal: '0',
			wide: '.01em',
		}
  },
  plugins: [],
};
export default config;
