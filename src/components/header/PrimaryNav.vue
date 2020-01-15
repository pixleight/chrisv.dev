<template>
  <section class="relative flex sm:block z-10 w-full justify-between items-center">
    <figure class="overflow-hidden bg-blue-600 w-12">
      <Avatar/>
    </figure>
    <p class="text-2xl leading-relaxed">
      <span class="text-3xl">{</span> chris<span class="bg-white text-purple-800">violette</span>.dev <span class="text-3xl">}</span>
    </p>
    <Hamburger @toggle="menuIsVisible = !menuIsVisible" :isActive="menuIsVisible" />
    <div class="fixed sm:static sm:block inset-0" :class="{ isVisible: menuIsVisible }">
      <nav>
        <ul>
          <li><a href="">nav item<span></span></a></li>
          <li><a href="">nav item<span></span></a></li>
          <li><a href="">nav item<span></span></a></li>
          <li><a href="">nav item<span></span></a></li>
          <li><a href="">nav item<span></span></a></li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
  import Avatar from '~/components/Avatar';
  import Hamburger from './Hamburger';

  export default {
    components: {
      Avatar,
      Hamburger,
    },
    data() {
      return {
        menuIsVisible: false,
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

  figure, li {
    @screen sm {
      transform: skewX(3deg);
    }
  }

  figure {
    border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%
  }

  div {
    @apply bg-purple-900;
    top: 4rem;
    transform: translateX(-100vw);
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    opacity: 0;
    transition:
      opacity 0.3s,
      transform 0.3s,
      clip-path 0.5s;
    transition-timing-function:cubic-bezier(0.230, 1.000, 0.320, 1.000);

    @screen sm {
      transform: translateX(1rem);
      clip-path: none;
      opacity: 1;
    }
  }
    div.isVisible {
      opacity: 1;
      clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
      transform: translateX(0);
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

  li a span {
    @apply absolute top-0 left-0 bottom-0 w-0 bg-yellow-500;

    z-index: -1;
    transform: skewX(30deg) translateX(1rem);
    transition: width 0.3s ease;
  }
    li a:hover span {
      @apply w-full;
    }

  li a span::after {
    @apply block absolute right-0 h-0 bg-yellow-700;

    content: '';
    top: 100%;
    width: 28px;
    transform: skewX(-33deg);
    transform-origin: top right;
    clip-path: polygon(0 0, 100% 0, 0 100%);
  }
    li a:hover span::after {
      animation: ribbonunder 0.15s ease 1 forwards 0.23s;
  }

  @keyframes ribbonunder {
    from {
      height: 0;
    }
    to {
      height: 14px;
    }
  }
</style>
