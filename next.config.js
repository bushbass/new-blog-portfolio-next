module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/resume',
        destination:
          'https://docs.google.com/document/d/1w1tsK-C9ysDKSwaVT_szGmsc4ST6WZjqARZrJ9r0c9Q/edit?usp=sharing',
        permanent: true,
      },
    ];
  },
};
