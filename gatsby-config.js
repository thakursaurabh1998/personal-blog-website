require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    siteTitle: 'Saurabh Thakur',
    siteTitleAlt: 'Saurabh Thakur',
    author: '@thakursaurabh98',
    siteImage: '/me.jpg',
    siteHeadline: 'My personal website and blog',
    siteUrl: 'https://saurabhthakur.dev',
    siteDescription: `This is the place you'll get to know about me and my views about technology and other things that intrigue me.`,
    siteLanguage: 'en',
  },
  plugins: [
    {
      resolve: './theme',
      options: {
        navigation: [
          {
            title: 'Blog',
            slug: '/blog',
          },
          {
            title: 'About',
            slug: '/about',
          },
        ],
        externalLinks: [
          {
            name: 'StackOverflow',
            url: 'https://stackoverflow.com/story/thakursaurabh1998',
          },
          {
            name: 'Github',
            url: 'https://github.com/thakursaurabh1998',
          },
          {
            name: 'Twitter',
            url: 'https://twitter.com/thakursaurabh98',
          },
          {
            name: 'Telegram',
            url: 'https://t.me/thakursaurabh1998',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Saurabh Thakur - Blog',
        short_name: 'My Blog',
        description: 'Blog and about page',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#6B46C1',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sitemap',
  ],
};
