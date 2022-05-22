module.exports = {
	siteMetadata:{
		siteUrl: 'https://mywebsite:8000/',
		name: 'Isaac Njiru',
		role: 'Senior Software Engineer at Craftsilicon',
		bio: 'Short Introduction about me'
	},
	plugins: [
	//'gatsby-plugin-sass'
	'gatsby-plugin-mdx',
    'gatsby-plugin-postcss',
	'gatsby-transformer-remark',
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			name: 'markdown-bio',
			path: `${__dirname}/MD`,
			// name: 'mdx-bio',
			// path: `${__dirname}/MDX`,
		}
	}
	],

	// plugins: ['gatsby-plugin-styled-components']
};

