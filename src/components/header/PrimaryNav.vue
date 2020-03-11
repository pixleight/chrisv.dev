<template>
  <section class="relative flex sm:block z-10 w-full justify-between items-center">
    <figure class="overflow-hidden bg-blue-600 w-12 sm:w-24 sm:mx-auto">
      <Avatar/>
    </figure>
    <p class="text-2xl leading-tight sm:-ml-8">
      <span class="text-3xl">{</span> 
      <span class="sm:block sm:ml-4">chris<span class="bg-white text-purple-800">violette</span>.dev</span> 
      <span class="text-3xl">}</span>
    </p>
    <Hamburger @toggle="isVisible = !isVisible" :isActive="isVisible" />
    <div class="fixed sm:static sm:block inset-0 bg-purple-900 opacity-0 sm:opacity-100" :class="{ 'is-visible opacity-100': isVisible }">
      <nav class="px-12 sm:p-0">
        <ul>
          <primary-nav-item to="/snippets/">Snippets</primary-nav-item>
          <primary-nav-item to="/work/">Work</primary-nav-item>
          <primary-nav-item to="/articles/">Articles</primary-nav-item>
          <primary-nav-item to="/about/">About</primary-nav-item>
          <primary-nav-item to="/contact/">Contact</primary-nav-item>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
  import Avatar from '~/components/Avatar';
  import Hamburger from './Hamburger';
  import PrimaryNavItem from './PrimaryNavItem';

  export default {
    components: {
      Avatar,
      Hamburger,
      PrimaryNavItem,
    },
    data() {
      return {
        isVisible: false,
      }
    },
  }
</script>

<style scoped>
  section {
    @screen sm {
      transform: skewX(-3deg);
      transform-origin: bottom right;
    }
  }

  figure, li, p {
    @screen sm {
      transform: skewX(3deg);
    }
  }

  figure {
    border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%
  }

  div {
    top: 4rem;
    transform: translateX(-100vw);
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    transition:
      opacity 0.3s,
      transform 0.3s,
      clip-path 0.5s;
    transition-timing-function:cubic-bezier(0.230, 1.000, 0.320, 1.000);

    @screen sm {
      transform: translateX(1rem);
      clip-path: none;
    }
  }
    div.is-visible {
      clip-path: polygon(0 0, 100% 0, calc(100% - 3rem) 100%, 0% 100%);
      transform: translateX(0);
    }
</style>
