<template>
  <div class="grid grid-cols-3 overflow-hidden rounded-lg mb-16">
    <picture class="transform -skew-x-15 origin-top-right overflow-hidden rounded-lg">
      <g-image class="transform skew-x-15 origin-top-right" src="~/assets/cviolette-photo.jpg"></g-image>
    </picture>
    <div class="col-span-2 transform -skew-x-15 origin-bottom-right flex bg-indigo-900 rounded-lg top-heading">
      <div class="m-auto transform skew-x-15">
        <h1 class="text-4xl font-medium text-theme-body relative">
          <span class="relative z-10">Hi, I'm Chris.</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
h1 {
  @apply transition-all duration-150 ease-out;
}

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

@keyframes wave {
  from {
    transform: scale(1) rotate(-5deg);
  }
  to {
    transform: scale(1) rotate(5deg);
  }
}
</style>