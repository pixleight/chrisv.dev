<template>
  <div class="wrapper min-h-screen text-gray-900 bg-gray-200">
    <header class="fixed z-20 inset-0 bottom-auto sm:inset-auto sm:static bg-purple-900 text-white">
      <div class="flex sm:fixed sm:inset-0 p-2 sm:p-4 sm:w-48 border-t-2 sm:border-t-4 sm:border-b-4 border-purple-600">
        <PrimaryNav />
      </div>
    </header>
    <main class="container p-8 mt-16 sm:mt-0">
      <slot/>
    </main>
    <site-footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import Avatar from '~/components/Avatar';
  import PrimaryNav from '~/components/header/PrimaryNav';
  import SiteFooter from '~/components/footer/SiteFooter';

  export default {
    metaInfo: {
      meta: [
        { name: 'author', content: 'Chris Violette' },
      ],
    },
  components: {
      Avatar,
      PrimaryNav,
      SiteFooter,
    },
  }
</script>

<style scoped>
  .wrapper {
    @screen sm {
      display: grid;
      grid-template-columns: 12rem auto;
      grid-column-gap: 6vh;
    }
  }

  @screen sm {
    header > div::after {
      @apply absolute block inset-0 w-full bg-purple-900 border-t-4 border-b-4 border-purple-600;

      top: -0.25rem;
      bottom: -0.25rem;
      content: '';
      transform: skewX(-3deg);
      transform-origin: bottom right;
    }
  }
</style>
