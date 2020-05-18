<template>
  <div class="z-30 site-footer sm:row-start-2">
    <brands-list/>
    <footer class="z-10 p-8 text-white bg-gray-dark">
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
      <p class="mt-8 text-xs">&copy; 2020 Chris Violette</p>
    </footer>
  </div>
</template>

<script>
  import SectionHeader from '~/components/SectionHeader';
  import FooterNavItem from './FooterNavItem';
  import BrandsList from './brands/BrandsList';

  export default {
    components: {
      BrandsList,
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
    @apply grid bg-gray-light;

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