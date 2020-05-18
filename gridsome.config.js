// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Chris Violette [dot] dev',
  siteDescription: 'Web developer and designer specializing in frontend development.',
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
  templates: {
    Snippet: '/snippets/:title',
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        // publicPath: '/admin',
        // htmlPath: './src/admin/index.html',
        modulePath: './src/admin/index.js',
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
        typeName: 'Snippet',
        path: 'content/posts/snippets/**/*.md',
        route: '/snippets/:title',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Work',
        path: 'content/posts/work/**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Settings',
        path: 'content/settings/**/*.md',
        refs: {
          workItems: 'Work',
        },
      },
    }
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     baseDir: './site/snippets',
    //     path: '*.md',
    //     typeName: 'Snippet',
    //   },
    // },
  ],
  chainWebpack: config => {
    config.resolve.alias.set('@uploads', '~/assets')
  },
}
