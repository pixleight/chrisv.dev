<template>
  <li class="py-2">
    <g-link 
      :to="to"
      class="block relative font-display py-2 pr-4 pl-8 hover:text-purple transition-colors duration-200 ease-out"
    >
      <slot></slot>
      <span class="absolute block bg-yellow inset-0 sm:absolute sm:right-auto sm:w-0"></span>
    </g-link>
  </li>
</template>

<script>
  export default {
    props: {
      to: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style scoped>
li {
  @screen sm {
    transform: skewX(3deg);
  }
}

span {
  z-index: -1;
  transition:
    clip-path 300ms;
  transition-timing-function:cubic-bezier(0.230, 1.000, 0.320, 1.000);
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
}

a:hover span {
  clip-path: polygon(calc(100% - 0.5rem) 0, 2rem 0%, 0.5rem 100%, calc(100% - 2rem) 100%);
}

@screen sm {
  span {
    z-index: -1;
    clip-path: none;
    transform: skewX(30deg) translateX(1rem);
    transition: width 0.3s 0.15s;
  }

  a:hover span {
    @apply w-full;

    clip-path: none;
    transition: width 0.3s;
  }

  span::after {
    @apply block absolute right-0 h-0 bg-yellow;

    content: '';
    top: 100%;
    width: 28px;
    transform: skewX(-33deg);
    transform-origin: top right;
    clip-path: polygon(0 0, 100% 0, 0 100%);
    height: 0;
    transition: height 0.15s;
  }

  a:hover span::after {
    height: 14px;
    transition: height 0.15s 0.23s;
  }


  a:hover span::before {
    display: block;
    content: "";
    position: absolute;
    background: rgba(0,0,0,0.6);
    top: 100%;
    height: 6px;
    width: calc(100% - 2rem);
    left: 0.5rem;
  }
}
</style>