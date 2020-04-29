<template>
  <div class="container h-screen mx-auto p-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
    <div class="header-wrap">
      <header class="sticky pb-2 border-r border-site-transparent">
        <SiteName class="block mb-8" />
        <nav>
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
    <main class="md:col-span-2 xl:col-span-3">
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <WorkPreview />
        <WorkPreview />
        <WorkPreview />
        <WorkPreview />
        <WorkPreview />
        <WorkPreview />
        <WorkPreview />
        <WorkPreview />
        <WorkPreview />
        <p>More</p>
      </section>
    </main>
  </div>
</template>

<script>
  import SiteName from '@/components/header/SiteName'
  import PrimaryNavItem from '@/components/header/PrimaryNavItem'
  import WorkPreview from '@/components/work/WorkPreview'

  export default {
    components: {
      SiteName,
      PrimaryNavItem,
      WorkPreview,
    }
  }
</script>

<style scoped>
.header-wrap {
  padding-top: 20vh;
}

.sticky {
  top: 1rem;
}
</style>