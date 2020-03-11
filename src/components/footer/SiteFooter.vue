<template>
  <div class="site-footer z-30 sm:row-start-2">
    <section class="brands">
      <div class="brand" v-for="brand in $static.brands.edges" :key="brand.node.id">
        <g-image :src="brand.node.logo" :alt="brand.node.title" />
      </div>
    </section>
    <footer class="bg-gray-900 text-white z-10 p-8">
      <section-header
        heading="Chris Violette"
        emoji="👨‍🎤"
        variant="invert"
        intro="Front End Web Developer"
      />
      <nav class="-ml-2">
        <ul class="flex flex-wrap">
          <footer-nav-item to="/snippets/">Snippets</footer-nav-item>
          <footer-nav-item to="/work/">Work</footer-nav-item>
          <footer-nav-item to="/articles/">Articles</footer-nav-item>
          <footer-nav-item to="/about/">About</footer-nav-item>
          <footer-nav-item to="/contact/">Contact</footer-nav-item>
        </ul>
      </nav>
      <p class="text-xs mt-8">&copy; 2020 Chris Violette</p>
    </footer>
  </div>
</template>

<static-query>
query {
  brands: allBrand(order: ASC, sortBy: "title") {
    edges {
      node {
        id
        title
        logo
      }
    }
  }
}
</static-query>

<script>
  import SectionHeader from '~/components/SectionHeader';
  import FooterNavItem from './FooterNavItem';

  export default {
    components: {
      SectionHeader,
      FooterNavItem,
    }
  }
</script>

<style scoped>
  .site-footer {
    @screen sm {
      grid-column: 1 / -1;
    }
  }

  .brands {
    @apply grid bg-gray-300;

    grid-template-columns: repeat(5, 1fr);
  }

  .brand {
    @apply p-4 flex items-center justify-center;
  }

  .brand img {
    max-width: 5rem;
    filter: grayscale(1);    
  }
</style>