<template>
  <div>
    <figure class="overflow-hidden bg-blue-600">
      <Avatar/>
    </figure>
    <nav>
      <ul>
        <li><a href="">nav item</a></li>
        <li><a href="">nav item</a></li>
        <li><a href="">nav item</a></li>
        <li><a href="">nav item</a></li>
        <li><a href="">nav item</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import Avatar from '~/components/Avatar';

  export default {
    components: {
      Avatar,
    },
  }
</script>

<style scoped>
  figure, li {
    transform: skewX(3deg);
  }

  nav {
    transform: translateX(1rem);
  }

  li {
    @apply py-2;
  }

  li a {
    @apply block relative py-2 pr-4 pl-8;

    transition: color 0.2s ease;
  }

  li a:hover {
    @apply text-purple-800;
  }

  li a::before {
    @apply absolute inset-0 bg-yellow-500;
    content: '';
    display: block;
    right: 100%;
    z-index: -1;
    transform: skewX(30deg);
    transform-origin: top right;
    transition: right 0.35s ease;
  }

  li a:hover::before {
    right: 0;
  }

  li a::after {
    @apply block absolute border-yellow-600;
    content: '';
    width: 0;
    height: 0;
    top: 100%;
    right: 0;
    border-style: solid;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-width: 0;
    transform: translateX(1.5rem) skewX(-3deg);
    transition: border-width 0.2s ease 0.2s;
  }

  li a:hover::after {
    border-width: 12px;
  }

  figure {
    border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
  }
</style>
