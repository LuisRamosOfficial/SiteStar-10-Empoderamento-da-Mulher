/** @type {import('next').NextConfig} */


module.exports = {
	reactStrictMode: true,
	i18n,
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles')],
		prependData: `@import "variables.scss";`,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
				port: '',
				pathname: '**',
			},
		],
	},
};