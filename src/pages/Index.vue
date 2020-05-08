<template>
  <Layout>
    <section class="home-intro relative shadow-lg overflow-hidden mb-8 bg-green-600 text-white grid gap-4 md:block">
      <g-image class="md:float-left md:max-w-xs" src="~/assets/cviolette-photo.jpg"></g-image>
      <h1 class="text-3xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-6xl md:mb-4 self-center">Hi, I'm Chris. 👋</h1>
      <pre class="mb-4 font-mono col-start-1 col-end-3 whitespace-pre md:whitespace-pre-line lg:whitespace-pre lg:text-xl xl:text-2xl">{
  bornRaised: <span>'Maine'</span>,
  living: <span>'Cleveland'</span>,
  role: <span>'Front End Developer'</span>,
}</pre>
    </section>
    <PostSection
      emoji="🧙"
      heading="Snippets"
      intro="Little magic bits of code I’ve picked up along the way"
      variant="purple"
      :posts="$page.snippets.edges"
    />
    <!-- <PostSection
      emoji="👨‍💻"
      heading="Work"
      intro="Selected examples of my work"
      variant="blue"
      :posts="$page.work.edges"
    />
    <PostSection
      emoji="🖋️"
      heading="Articles"
      intro="More in-depth articles on a variety of topics"
      variant="green"
      :posts="$page.articles.edges"
    /> -->
  </Layout>
</template>

<page-query>
query Posts {
  snippets: allSnippet(limit: 6) {
    edges {
      node {
        id
        path
        title
        image
      }
    }
  }
  work: allWork(limit: 6, skip: 6) {
    edges {
      node {
        id
        title
        slug
        thumbnail
        avatar
        path
      }
    }
  }
  articles: allArticle(limit: 6, skip: 12) {
    edges {
      node {
        id
        title
        slug
        thumbnail
        avatar
        path
      }
    }
  }
}
</page-query>

<script>
import Snippet from '~/components/Snippet';
import SectionHeader from '~/components/SectionHeader';
import PostSection from '~/components/PostSection';

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Snippet,
    SectionHeader,
    PostSection,
  }
}
</script>

<style scoped>
.home-intro {
  grid-template-columns: 6rem 1fr;
}

.home-intro header {
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    2rem 100%
  );
}

.home-intro img {
  @screen md {
    transform: translateX(-25%);
    shape-outside: polygon(50% 0%, 50% 50%, 75% 100%);
    shape-margin: 1rem;
    clip-path: polygon(25% 0, 75% 0, 100% 100%, 25% 100%);
  }
}

.home-intro pre {
  justify-self: center;
}

</style>
