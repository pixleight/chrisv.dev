<template>
  <footer>
    <section-header
      heading="Chris Violette"
      emoji="👨‍🎤"
      variant="invert"
      intro="Front End Web Developer"
    />
    <nav>
      <ul>
        <li><g-link to="/snippets/"><span>Snippets</span></g-link></li>
        <li><g-link to="/work/"><span>Work</span></g-link></li>
        <li><g-link to="/articles/"><span>Articles</span></g-link></li>
        <li><g-link to="/about/"><span>About</span></g-link></li>
        <li><g-link to="/contact/"><span>Contact</span></g-link></li>
      </ul>
    </nav>
  </footer>
</template>

<script>
  import SectionHeader from '~/components/SectionHeader';

  export default {
    components: {
      SectionHeader,
    }
  }
</script>

<style scoped>
  footer {
    @apply bg-gray-900 text-white z-10 p-8;

    @screen sm {
      grid-column: 1 / -1;
      grid-row: 2;
    }
  }

  ul {
    @apply flex flex-wrap;
  }

  nav li:not(:last-child) {
    /* @apply mr-2; */
  }

  nav a {
    @apply inline-block px-2 py-1 uppercase relative;

    transition: color 200ms ease;
  }

  nav a > span {
    @apply relative z-10;
  }

  nav a::before {
    @apply block absolute top-0 bottom-0 w-0 bg-yellow-500;
    content: '';
    left: 50%;
    transform: translateX(-50%) skewX(25deg);
    transition: width 200ms ease, height 200ms ease;
  }

  nav a:hover {
    @apply text-gray-900;
  }

  nav a:hover::before {
    @apply w-full;
  }
</style>