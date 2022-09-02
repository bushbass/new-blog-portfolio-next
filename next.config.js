module.exports = { reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://docs.google.com/document/d/13KlhMzzbGxa-U8yt1zE9qdAyGklGH1P8CJlj15OioxQ/edit?usp=sharing',
        permanent: true,
      },
    ]
  },
}