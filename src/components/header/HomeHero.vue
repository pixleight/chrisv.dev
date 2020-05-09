<template>
  <div class="grid grid-cols-3 items-center lg:min-h-screen py-8 overflow-hidden rounded-lg mb-16">
    <picture class="transform -skew-x-15 origin-top-right overflow-hidden rounded-lg">
      <g-image class="transform skew-x-15 origin-top-right" src="~/assets/cviolette-photo.jpg" alt="Chris Violette, Web Developer &amp; Designer"></g-image>
    </picture>
    <div class="pt-12 pb-4 col-span-2 transform -skew-x-15 origin-bottom-right flex bg-indigo-900 rounded-lg top-heading">
      <div class="m-auto transform skew-x-15 flex flex-col justify-center items-center">
        <h1 class="text-2xl sm:text-4xl font-medium text-white relative transition-all duration-150 ease-out">
          <span class="relative z-10">Hi, I'm Chris.</span>
        </h1>
        <p class="text-white text-center my-3">
          Web Developer <br class="sm:hidden"/>& Designer
        </p>
        <p class="time-mag hidden sm:block text-center leading-tight text-white text-sm px-2 py-1 opacity-0 transform translate-y-2 transition-all duration-300 ease-out text-indigo-900 bg-white bg-opacity-75 rounded-sm shadow-sharp-right">
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