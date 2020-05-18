<template>
  <div class="fixed bottom-0 left-0 right-0 z-10 px-8 py-0 bg-gray-800 border-t border-indigo-800 shadow-lg header-wrap lg:shadow-none lg:bg-transparent lg:border-none lg:px-0 lg:py-8 lg:static">
    <header class="flex items-center py-2 lg:block lg:sticky lg:pt-0 lg:pb-2 lg:border-r lg:border-gray-800">
      <SiteName />
      <HamburgerMenu
        class="w-10 ml-auto lg:hidden"
        @toggle="toggleMenu($event)"
      />
      <nav
        class="absolute bottom-0 right-0 w-56 py-4 mb-16 mr-12 transition-all duration-200 transform bg-indigo-800 rounded shadow-xl opacity-0 ease lg:block lg:static lg:m-0 lg:w-auto lg:opacity-100 lg:translate-y-0 lg:rounded-none lg:bg-transparent lg:shadow-none lg:pointer-events-auto"
        :class="{
          '-translate-y-3 pointer-events-none': !active,
          'translate-y-2 opacity-100 pointer-events-auto': active,
        }"
      >
        <ul>
          <primary-nav-item to="/work/">Work</primary-nav-item>
          <primary-nav-item to="/snippets/">Snippets</primary-nav-item>
          <primary-nav-item to="/articles/">Articles</primary-nav-item>
          <primary-nav-item to="/about/">About</primary-nav-item>
          <primary-nav-item to="/contact/">Contact</primary-nav-item>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
  import SiteName from '@/components/header/SiteName'
  import PrimaryNavItem from '@/components/header/PrimaryNavItem'
  import HamburgerMenu from '@/components/header/HamburgerMenu'

  export default {
    data: () => ({
      active: false,
    }),
    components: {
      SiteName,
      PrimaryNavItem,
      HamburgerMenu,
    },
    methods: {
      toggleMenu(e) {
        this.active = e;
      },
    },
  }
</script>

<style scoped>
div {
  @screen lg {
    padding-top: 20vh;
  }
}

header {
  top: 1rem;
}
</style>