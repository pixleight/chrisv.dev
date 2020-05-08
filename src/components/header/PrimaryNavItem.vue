<template>
  <li class="py-2">
    <g-link 
      :to="to"
      class="block relative font-display py-2 pr-4 pl-8 hover:text-indigo-900 transition-colors duration-200 ease-out"
    >
      <slot></slot>
      <span class="absolute block bg-yellow-500 inset-0 sm:absolute sm:right-auto sm:w-0 transform origin-bottom-right translate-x-6 skew-x-15 rounded-tl rounded-tr rounded-bl"></span>
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

span {
  z-index: -1;
  transition:
    clip-path 300ms;
  transition-timing-function: cubic-bezier(0.230, 1.000, 0.320, 1.000);
  /* clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%); */
}

a:hover span {
  /* clip-path: polygon(calc(100% - 0.5rem) 0, 2rem 0%, 0.5rem 100%, calc(100% - 2rem) 100%); */
}

@screen sm {
  span {
    z-index: -1;
    transition: width 300ms 150ms;
  }

  a:hover span {
    @apply w-full;

    transition: width 300ms;
  }

  span::after {
    @apply block absolute right-0 h-0 w-6 bg-yellow-700 transform origin-top-right -skew-x-15;

    content: '';
    top: 100%;
    /* transform: skewX(-33deg); */
    transform-origin: top right;
    clip-path: polygon(0 0, 100% 0, 0 100%);
    height: 0;
    transition: height 150ms;
  }

  span::before {
    @apply absolute inset-0 z-0 shadow-sharp-left pointer-events-none;
    
    content: '';
    right: 8px;
    border-radius: inherit;
  }

  a:hover span::after {
    @apply h-4;

    transition: height 150ms 230ms;
  }



  /* a:hover span::before {
    display: block;
    content: "";
    position: absolute;
    background: rgba(0,0,0,0.6);
    top: 100%;
    height: 6px;
    width: calc(100% - 2rem);
    left: 0.5rem;
  } */
}
</style>