/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'res.cloudinary.com'
        //     }
        // ]
        domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'],
    }
}

module.exports = nextConfig
