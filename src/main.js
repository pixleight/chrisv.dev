// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Cloudinary from 'cloudinary-vue'

import Store from './store'

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/styles.css';

export default function (Vue, { router, head, isClient, appOptions }) {

  Vue.use(Cloudinary, {
    configuration: {
      cloudName: "chrisvdev"
    }
  });

  appOptions.store = Store;

  head.link.push({
    href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@450&family=Montserrat:wght@300;400;500&display=swap',
    rel: 'preload',
    as: 'style',
    onload: 'this.onload=null;this.rel="stylesheet"',
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
