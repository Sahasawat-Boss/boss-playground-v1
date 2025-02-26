/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'static.vecteezy.com', 'media0.giphy.com'], 
    },
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
    },
};

export default nextConfig;
