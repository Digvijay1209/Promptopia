// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true, // Ensure your version of Next.js supports this
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    }
}

export default nextConfig;
