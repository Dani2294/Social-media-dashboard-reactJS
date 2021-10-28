module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				inter: 'Inter, sans-serif',
			},
			gradientColorStops: (theme) => ({
				...theme('colors'),
				instFrom: 'hsl(37, 97%, 70%)',
				instTo: 'hsl(329, 70%, 58%)',
				toggleFrom: 'hsl(210, 78%, 56%)',
				toggleTo: 'hsl(146, 68%, 55%)',
			}),
			colors: {
				'lime-green': 'hsl(163, 72%, 41%)',
				'bright-red': 'hsl(356, 69%, 56%)',
				facebook: 'hsl(208, 92%, 53%)',
				twitter: 'hsl(203, 89%, 53%)',
				youtube: 'hsl(348, 97%, 39%)',
				'lm-toggle': 'hsl(230, 22%, 74%)',
				lm: {
					'very-pale-blue': 'hsl(225, 100%, 98%)',
					'light-grayish-blue': 'hsl(227, 47%, 96%)',
					'light-grayish-blue-hov': 'hsl(227, 47%, 92%)',
					'dark-grayish-blue': 'hsl(228, 12%, 44%)',
					'very-dark-blue': 'hsl(230, 17%, 14%)',
				},
				dm: {
					'very-dark-blue': 'hsl(230, 17%, 14%)',
					'top-pattern-very-dark-blue': 'hsl(232, 19%, 15%)',
					'dark-desaturated-blue': 'hsl(228, 28%, 20%)',
					'dark-desaturated-blue-hov': 'hsl(228, 28%, 28%)',
					'desaturated-blue': 'hsl(228, 34%, 66%)',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
