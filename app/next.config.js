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


const withImage = require('next-images');
module.exports = withImage();