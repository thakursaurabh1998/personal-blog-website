require("dotenv").config();

const { ANALYSE_BUNDLE: shouldAnalyseBundle, GOOGLE_GTAG_ID: googleGtagId } = process.env;

module.exports = {
  siteMetadata: {
    siteTitle: "Saurabh Thakur",
    siteTitleAlt: "Saurabh Thakur",
    author: "@thakursaurabh98",
    siteImage: "/me.jpg",
    siteHeadline: "My personal website and blog",
    siteUrl: "https://saurabhthakur.dev",
    siteDescription: "This is the place you'll get to know about me and my views about technology and other things that intrigue me.",
    siteLanguage: "en",
  },
  plugins: [
    {
      resolve: "@lekoarts/gatsby-theme-minimal-blog",
      options: {
        navigation: [
          {
            title: "Blog",
            slug: "/blog",
          },
          {
            title: "About",
            slug: "/about",
          },
          {
            title: "Now",
            slug: "/now",
          }
        ],
        externalLinks: [
          {
            name: "Github",
            url: "https://github.com/thakursaurabh1998",
          },
          {
            name: "Twitter",
            url: "https://twitter.com/thakursaurabh98",
          },
          {
            name: "Telegram",
            url: "https://t.me/thakursaurabh1998",
          },
          {
            name: "Let's talk?",
            url: "https://calendly.com/saurabhthakur",
          },
        ],
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],
        // If you plan on changing the font you'll also need to adjust the Theme UI config to edit the CSS
        // See: https://github.com/LekoArts/gatsby-themes/tree/main/examples/minimal-blog#changing-your-fonts
        web: [
          {
            name: "IBM Plex Sans",
            file: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Saurabh Thakur - Blog",
        short_name: "Saurabh Thakur",
        description: "This is the place you'll get to know about me and my views about technology and other things that intrigue me.",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#6B46C1",
        display: "standalone",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug;
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`;

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                };
              }),
            query: `
              {
                allPost(sort: { fields: date, order: DESC }) {
                  nodes {
                    title
                    date(formatString: "MMMM D, YYYY")
                    excerpt
                    slug
                  }
                }
              }
            `,
            output: "rss.xml",
            title: "Saurabh Thakur | My personal website and blog",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [googleGtagId],
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify",
    shouldAnalyseBundle && {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
        reportFilename: "_bundle.html",
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
