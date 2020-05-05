<template>
  <div class="container mx-auto p-8 h-screen">
    <div class="grid grid-cols-3 overflow-hidden rounded-lg mb-16">
      <picture class="transform -skew-x-15 origin-top-right overflow-hidden rounded-lg">
        <g-image class="transform skew-x-15 origin-top-right" src="~/assets/photo.jpg"></g-image>
      </picture>
      <div class="col-span-2 transform -skew-x-15 origin-bottom-right flex bg-site-primary rounded-lg top-heading">
        <div class="m-auto transform skew-x-15">
          <h1 class="text-4xl font-medium text-site-body relative">
            <span class="relative z-10">Hi, I'm Chris.</span>
          </h1>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
      <div class="header-wrap">
        <header class="sticky pb-2 border-r border-site-transparent">
          <SiteName class="block mb-8" />
          <nav>
            <ul>
              <primary-nav-item to="/snippets/">Snippets</primary-nav-item>
              <primary-nav-item to="/work/">Work</primary-nav-item>
              <primary-nav-item to="/articles/">Articles</primary-nav-item>
              <primary-nav-item to="/about/">About</primary-nav-item>
              <primary-nav-item to="/work/">Work</primary-nav-item>
            </ul>
          </nav>
        </header>
      </div>
      <main class="md:col-span-2 xl:col-span-3">
        <PostSection />
      </main>
    </div>
  </div>
</template>

<script>
  import SiteName from '@/components/header/SiteName'
  import PrimaryNavItem from '@/components/header/PrimaryNavItem'
  import PostSection from '@/components/posts/PostSection'

  export default {
    components: {
      SiteName,
      PrimaryNavItem,
      PostSection,
    }
  }
</script>

<style scoped>
.header-wrap {
  padding-top: 20vh;
}

.sticky {
  top: 1rem;
}

h1 {
  @apply transition-all duration-150 ease-out;
}

h1::before {
  @apply absolute block top-0 bottom-0 bg-site-accent transform -skew-x-15 z-0 rounded transition-all duration-150 ease-out;

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
  @apply text-site-primary;
}

.top-heading:hover h1::after {
  @apply block visible opacity-100;
  
  animation: wave 150ms ease-in-out infinite alternate both;
}

.top-heading:hover h1::before {
  @apply shadow-sharp;

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
