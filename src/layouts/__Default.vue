<template>
  <div class="min-h-screen wrapper text-gray-dark foo">
    <header class="fixed inset-0 bottom-auto z-20 text-white bg-indigo-900 sm:inset-auto sm:static">
      <div class="flex p-2 border-t-2 sm:fixed sm:inset-0 sm:p-4 sm:w-48 sm:border-t-4 sm:border-b-4 border-purple">
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
      @apply absolute block inset-0 w-full bg-indigo-900 border-t-4 border-b-4 border-purple;

      top: -0.25rem;
      bottom: -0.25rem;
      content: '';
      transform: skewX(-3deg);
      transform-origin: bottom right;
    }
  }
</style>
