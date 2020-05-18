<template>
  <li class="py-2">
    <g-link 
      :to="to"
      class="relative block py-2 pl-8 pr-4 transition-colors duration-200 ease-out font-display hover:text-indigo-900"
    >
      <slot></slot>
      <span class="absolute inset-0 block origin-bottom-right transform translate-x-6 bg-yellow-500 rounded-tl rounded-tr rounded-bl sm:absolute sm:right-auto sm:w-0 skew-x-15"></span>
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