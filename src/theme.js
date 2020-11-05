const colors = {
	text: '#000',
	background: '#fff',
	grey: '#c4c4c4',
	primary: '#4c54e1',
	secondary: '#6652E2',
}

const theme = {
	space: [0, 4, 8, 16, 24, 48, 96, 192, 256, 512],
	fonts: {
		body: `'Raleway', sans-serif;`,
		heading: `'Raleway', sans-serif;`
	},
	colors,
	fontSizes: [11, 14, 24],
	fontWeights: [500, 600, 700],
	styles: {
		root: {
			// uses the theme values provided above
			fontFamily: 'body',
			fontWeight: 'body',
		},
	},
	gradient: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
};

export default theme;