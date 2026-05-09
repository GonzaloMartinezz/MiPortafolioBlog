/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimización de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Formato moderno para mejor compresión
    formats: ['image/avif', 'image/webp'],
    // Caché agresiva
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  // Compresión
  compress: true,

  // Sin source maps en producción (más rápido)
  productionBrowserSourceMaps: false,

  // Headers para caché
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Optimizaciones de rendimiento
  swcMinify: true,
};

module.exports = nextConfig;
