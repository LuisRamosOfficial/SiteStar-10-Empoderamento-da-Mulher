/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'www.empoderamentodamulher.pt',
			'https://empoderamentodamulher.pt/',
			'empoderamentodamulher.pt/',
		],
	},
};

module.exports = nextConfig
