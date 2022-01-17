module.exports = { reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://docs.google.com/document/d/1OR_FV2JG7cnFN5UvEg6kjDb-0JTfI1QAdKwFYxQqjkU/edit',
        permanent: true,
      },
    ]
  },
}