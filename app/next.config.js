/** @type {import('next').NextConfig} */


module.exports = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'empoderamentodamulher.pt',
				port: '',
				pathname: '/_next/**',
			},
		],
		domains: [
			'www.empoderamentodamulher.pt',
			'https://www.empoderamentodamulher.pt',
			'https://empoderamentodamulher.pt/',
			'empoderamentodamulher.pt/',
		],
	},
};

