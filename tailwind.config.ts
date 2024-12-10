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
				'gray-100': '#F0F1F2',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        drucSyr: ['var(--font-drucSyr)'],
				halvarBreit: ['var(--font-halvarBreit)'],
      },
			height: {
				'mainW-hd': 'calc((100vw - 117px - 40px) + 100vw)',
			},
			width: {
				'100vw': '100vw',
				'100vw-scroll': 'calc(100vw)',
				'menuDev': 'calc(100vw - 753px)',
				'devConst-hd': 'calc(100vw - 117px - 40px)',
				'nav-sm': 'calc(100vw - 40px)',
				'nav': 'calc(100vw - 32px)',
			},
			spacing: {
				'complex-x': 'calc(100% + 6px)',
			  'complex-y': 'calc(-100% + -6px)',
				'scroll': 'calc(100vw-17px)',
			},
			objectPosition: {
        'center-top': 'center top',
      }
    },
    screens: {
			'sm': '640px',
			'md': '768px',
			'hd': '1368px',
			'fhd': '1920px',
    },
		letterSpacing: {
			veryTight: '-.04em',
			tighter: '-.03em',
			tight2: '-.02em',
			tight: '-.01em',
			normal: '0',
			wide: '.01em',
		}
  },
  plugins: [],
};
export default config;
