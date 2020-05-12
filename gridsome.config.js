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
        route: '/work/:title',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Tags',
        path: 'content/tags/**/*.md',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Settings',
        path: 'content/settings/**/*.md',
        refs: {
          workItem: 'Work',
          workItems: 'Work',
          singleWorkItem: 'Work',
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
}
