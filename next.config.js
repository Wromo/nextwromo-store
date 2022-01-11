const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/],
    scope: '/',
    sw: 'service-worker.js',
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },

  reactStrictMode: false,
  eslint: {
    // Warning: This allows production builds to successfully 
    // has ESLint errors.
    ignoreDuringBuilds: true,
  },

  images: {
    domains: [
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'res.cloudinary.com',
      'fakestoreapi.com',
      'img.icons8.com',
      'i.postimg.cc',
      'i.ibb.co',
      '',
    ],
  },
});

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({});
