<template>
  <div class="container mx-auto px-8 h-screen text-gray-900 dark:text-gray-100">
    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
      <SiteHeader />
      <slot name="hero"/>
      <main class="py-8 min-h-screen md:col-span-2 xl:col-span-3">
        <slot/>
      </main>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { Mutations as AppMutations } from '@/store/app/types'

  import SiteHeader from '@/components/header/SiteHeader'
  import SiteName from '@/components/header/SiteName'
  import PrimaryNavItem from '@/components/header/PrimaryNavItem'
  import PostSection from '@/components/posts/PostSection'
  import HomeHero from '@/components/header/HomeHero'

  export default {
    components: {
      SiteHeader,
      SiteName,
      PrimaryNavItem,
      PostSection,
      HomeHero,
    },
    computed: {
      ...mapState('app', {
        darkMode: state => state.darkMode,
      }),
    },
    methods: {
      ...mapMutations('app', {
        setDarkMode: AppMutations.SET_DARKMODE,
      }),
    },
    beforeMount() {
      function checkDarkMode() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return true;
        }
        return false;
      }

      if (checkDarkMode()) {
        document.documentElement.classList.add('mode-dark');
      } else {
        document.documentElement.classList.remove('mode-dark');
      }
    },
  }
</script>

<style scoped>

</style>
