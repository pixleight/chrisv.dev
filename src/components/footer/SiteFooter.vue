<template>
  <footer>
    <section-header
      heading="Chris Violette"
      emoji="👨‍🎤"
      variant="invert"
      intro="Front End Web Developer"
    />
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
</style>