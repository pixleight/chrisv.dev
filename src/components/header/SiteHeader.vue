<template>
  <div class="header-wrap py-0 px-8 fixed top-0 left-0 right-0 z-10 bg-gray-800 border-indigo-800 border-b shadow-lg lg:shadow-none lg:bg-transparent lg:border-none lg:px-0 lg:py-8 lg:static">
    <header class="flex items-center py-2 lg:block lg:sticky lg:pt-0 lg:pb-2 lg:border-r lg:border-gray-800">
      <SiteName />
      <HamburgerMenu
        class="ml-auto lg:hidden w-10"
        @toggle="toggleMenu($event)"
      />
      <nav
        class="absolute top-0 w-56 mt-12 mr-12 py-4 right-0 bg-indigo-800 transform transition-all opacity-0 rounded shadow-xl duration-200 ease lg:block lg:static lg:m-0 lg:w-auto lg:opacity-100 lg:translate-y-0 lg:rounded-none lg:bg-transparent lg:shadow-none lg:pointer-events-auto"
        :class="{
          '-translate-y-3 pointer-events-none': !active,
          'translate-y-2 opacity-100 pointer-events-auto': active,
        }"
      >
        <ul>
          <primary-nav-item to="/snippets/">Snippets</primary-nav-item>
          <primary-nav-item to="/work/">Work</primary-nav-item>
          <primary-nav-item to="/articles/">Articles</primary-nav-item>
          <primary-nav-item to="/about/">About</primary-nav-item>
          <primary-nav-item to="/work/">Work</primary-nav-item>
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