const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['osangmin.com'],
  },
  async redirects() {
    return [
      {
        source: '/work_knitted_light',
        destination: '/work/knitted_light',
        permanent: true,
      },
      {
        source: '/work_thankspressure',
        destination: '/work/thankspressure',
        permanent: true,
      },
      {
        source: '/work_papa',
        destination: '/work/papa',
        permanent: true,
      },
      {
        source: '/work_butterfly',
        destination: '/work/butterfly',
        permanent: true,
      },
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/sitemap-0.xml',
        destination: '/sitemap-0.xml',
        permanent: true,
      },
      {
        source: '/:path',
        destination: '/',
        permanent: true,
      }
    ];
  }
}

module.exports = nextConfig
