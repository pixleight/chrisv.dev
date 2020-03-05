// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Chris Violette [dot] dev',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/source-faker',
      options: {
        typeName: 'Article',
        route: '/articles/:slug',
      },
    },
    {
      use: '@gridsome/source-faker',
      options: {
        typeName: 'Work',
        route: '/work/:slug',
      },
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/brands/*.md',
        typeName: 'Brand',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'MainPages',
        path: 'content/pages/**/*.md',
        route: '/:slug',
        refs: {
          brands: 'Brand',
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Snippets',
        path: 'content/posts/snippets/**/*.md',
        route: '/snippets/:title',
      },
    },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     baseDir: './site/snippets',
    //     path: '*.md',
    //     typeName: 'Snippet',
    //   },
    // },
  ],
}
