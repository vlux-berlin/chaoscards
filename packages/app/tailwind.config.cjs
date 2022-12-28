/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/components/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				electric: '#db00ff',
				ribbon: '#0047ff',
			},
		},
	},
	plugins: [],
};
