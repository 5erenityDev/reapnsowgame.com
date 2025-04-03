/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Reap What You Sow`,
    siteUrl: `https://www.reapnsowgame.com`,
    description: "Welcome to the Farm! Reap What You Sow is an indie horror farming game being developed by a team of 3.",
    keywords: ['indie games', 'indie game', 'horror', 'ps1', 'n64', 'reap what you sow', 'reapnsowgame', 'reapwhatyousow', "hampton", "rana"],
    viewport: {
      width: 'device-width',
      initialScale: 1.0,
    },
    openGraph: {
      type: 'website',
      title: 'Reap What You Sow',
      description: 'Welcome to the Farm! Reap What You Sow is an indie horror farming game being developed by a team of 3."',
      locale: 'en_US',
      url: 'https://www.reapnsowgame.com',
      images: [
        {
          url: '/images/icon.png',
          width: 512,
          height: 512,
          alt: 'RWYS Logo',
        },
      ],
      
    },
    twitter: {
      card: 'summary',
      title: 'Reap What You Sow',
      description: 'Welcome to the Farm! Reap What You Sow is an indie horror farming game being developed by a team of 3."',
      site: '@reapnsowgame',
      creator: '@PrinnyPants',
      images: [
        {
          url: '/images/icon.png',
          width: 512,
          height: 512,
          alt: 'RWYS Logo',
        },
      ],
    },
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}
