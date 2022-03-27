<script context="module">
  import { GraphQLClient } from 'graphql-request';

  export async function load({params}) {
    const graphcmsClient = new GraphQLClient(
      'https://api-us-west-2.graphcms.com/v2/cl0j2ytsq2g0k01xkg40ihtzv/master',
      { headers: {} }
    );
    
    const { verse } = await graphcmsClient.request(
      `query VersePageQuery($slug: String!) {
        verse(where: { slug: $slug }) {
          verseId
					englishVerse
        }
      }`,
      {
        slug: params.slug
      }
    );

    return {
      props: {
        verse
      }
    };
  }
</script>

<script>
  export let verse;
</script>

<svelte:head>
  <title>Buddhasahassanāmāvali - Verse {verse.verseId}</title>
</svelte:head>

<h1>Verse {verse.verseId}</h1>
<pre>{verse.englishVerse}</pre>

<style>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }
  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }
  pre {
    margin: 1em auto;
  }
  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
