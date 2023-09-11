import type { Config } from 'tailwindcss';

const colors = {
	light: '#FDFDFD',
	dark: '#01030e',
	background: '#F5F7FE',
	primary: {
		light: '#263238',
		main: '#212227',
		dark: '#1A1B1F',
	},
	secondary: {
		light: '#F5F7FE',
		main: '#BDD4E7',
		dark: '#b1cce3',
	},
	accent: '#2db625',
	gray: {
		100: '#f2f3f5',
		200: '#E9EAF2',
		500: '#89a4bb',
	},
	neutrals: {
		900: '#1C1C1F',
		800: '#2F3033',
		700: '#6D6E73',
		600: '#84858A',
		500: '#B3B4BA',
		400: '#D0D1D6',
		300: '#E4E5EB',
		200: '#F0F2F7  ',
		100: '#FAFBFC',
		white: '#FFFFFF',
	},
	success: {
		dark: '#006627',
		main: '#009E3D',
		light: '#EDFDF3',
	},
	error: {
		dark: '#5C0500',
		main: '#9E0800',
		light: '#FDEEED',
	},
	warning: {
		dark: '#998000',
		main: '#E0BD00',
		light: '#FDFAEB',
	},
	feedback: {
		alert: '#E07000',
	},
};

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors,
			fontFamily: {
				sans: ['var(--font-inter)'],
			},
			width: {
				modal: '540px',
			},
		},
	},
	plugins: [],
};
export default config;
