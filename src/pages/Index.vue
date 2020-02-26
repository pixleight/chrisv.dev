<template>
  <Layout>
    <section class="home-intro relative shadow-lg overflow-hidden">
      <header class="home-intro__header bg-green-600 text-white p-4">
        <h1 class="text-3xl mb-4">Hi, I'm Chris. 👋</h1>
        <pre class="font-mono">
{
  bornRaised: 'Maine',
  living: 'Cleveland',
  role: 'Front End Developer',
}
        </pre>
      </header>
      <g-image class="block w-full object-cover" src="https://i.pravatar.cc/800"></g-image>
    </section>
    <PostSection
      emoji="🧙"
      heading="Snippets"
      intro="Little magic bits of code I’ve picked up along the way"
      variant="purple"
      :posts="$page.snippets.edges"
    />
    <PostSection
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
    />
  </Layout>
</template>

<page-query>
query {
  snippets: allFaker(limit: 6) {
    edges {
      node {
        id
        title
        slug
        thumbnail
        avatar
      }
    }
  }
  work: allFaker(limit: 6, skip: 6) {
    edges {
      node {
        id
        title
        slug
        thumbnail
        avatar
      }
    }
  }
  articles: allFaker(limit: 6, skip: 12) {
    edges {
      node {
        id
        title
        slug
        thumbnail
        avatar
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
section {
  margin-bottom: 4rem;
}

@screen sm {
  article:nth-child(7n) {
    /* grid-column: span 2;
    grid-row: span 2; */
  }
}

.home-intro {
  height: 20rem;
}

.home-intro header {
  @apply absolute top-0 right-0 bottom-0 pl-12;

  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    2rem 100%
  );
}
</style>
