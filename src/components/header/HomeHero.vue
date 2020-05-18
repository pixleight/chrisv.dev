<template>
  <div class="grid grid-cols-3 mb-16 overflow-hidden rounded-lg lg:items-center lg:min-h-screen">
    <picture class="overflow-hidden origin-top-right transform rounded-lg -skew-x-15">
      <g-image class="origin-top-right transform skew-x-15" src="~/assets/cviolette-photo.jpg" alt="Chris Violette, Web Developer &amp; Designer"></g-image>
    </picture>
    <div class="flex col-span-2 pt-12 pb-4 origin-bottom-right transform bg-indigo-900 rounded-lg -skew-x-15 top-heading">
      <div class="flex flex-col items-center justify-center m-auto transform skew-x-15">
        <h1 class="relative text-2xl font-medium text-white transition-all duration-150 ease-out sm:text-4xl">
          <span class="relative z-10">Hi, I'm Chris.</span>
        </h1>
        <p class="my-3 text-center text-white">
          Web Developer <br class="sm:hidden"/>& Designer
        </p>
        <p class="hidden px-2 py-1 text-sm leading-tight text-center text-white text-indigo-900 transition-all duration-300 ease-out transform translate-y-2 bg-white bg-opacity-75 rounded-sm opacity-0 time-mag sm:block shadow-sharp-right">
          2006 Time Magazine<br/>
          Person of the Year!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
h1::before {
  @apply absolute block top-0 bottom-0 bg-yellow-500 transform -skew-x-15 z-0 rounded transition-all duration-150 ease-out;

  content: '';
  left: 50%;
  right: 50%
}

h1::after {
  @apply opacity-0 absolute top-0 right-0 transition-opacity duration-150 ease-out;

  content: '👋';
  margin-top: -0.75em;
  margin-right: -0.75em;
}

.top-heading:hover h1 {
  @apply text-indigo-900;
}

.top-heading:hover h1::after {
  @apply block visible opacity-100;
  
  animation: wave 150ms ease-in-out infinite alternate both;
}

.top-heading:hover h1::before {
  @apply shadow-sharp-right;

  left: -0.25em;
  right: -0.25em;
}

.top-heading:hover .time-mag {
  @apply translate-y-0 -rotate-3 opacity-100;
}

@keyframes wave {
  from {
    transform: scale(1) rotate(-5deg);
  }
  to {
    transform: scale(1) rotate(5deg);
  }
}
</style>