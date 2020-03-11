<template>
  <Layout>
    <section class="home-intro relative shadow-lg overflow-hidden mb-8">
      <header class="home-intro__header absolute top-0 right-0 bottom-0 bg-green-600 text-white p-4 pl-12">
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
  snippets: allSnippets(limit: 6) {
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
  height: 20rem;
}

.home-intro header {
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    2rem 100%
  );
}
</style>
