/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/utils/myImageLoader.ts',
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // ignoreDuringBuilds: true,
  },
  basePath: isProd ? '/monolith-frame' : '',
};
module.exports = nextConfig;