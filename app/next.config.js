/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'www.empoderamentodamulher.pt',
			'https://www.empoderamentodamulher.pt',
			'https://empoderamentodamulher.pt/',
			'empoderamentodamulher.pt/',
		],
	},
};

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'empoderamentodamulher.pt',
				port: '',
				pathname: '/_next/',
			},
		],
	},
};
