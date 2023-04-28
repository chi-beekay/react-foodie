/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				colorPrimary: '#F6842A',
				colorCheck: '#2D2A2A',
				darkGray: '#322D2D',
				lightGray: '#707070',
			},
		},
		screens: {
			xs: '350px',
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
			monts: ['Montserrat', 'sans-serif'],
		},
	},
	plugins: [],
};
