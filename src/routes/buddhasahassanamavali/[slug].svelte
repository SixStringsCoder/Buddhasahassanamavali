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
          paliDevanagariVerse
          paliRomanVerse
					englishVerse
          vocabularyWords {
            id
            word
            definition
            etymology
          }
          audioUrl
          quizletUrl
          pdfFlashcards
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

<main>
  <section class="verse">
    <!--TITLE HEADING-->
    <h2>Verse {verse.verseId}</h2>

    <!--AUDIO-->
    <div class="audio-cont">
      <audio controls>
        <source src={verse.audioUrl} type="audio/mp3">      
            Your browser does not support HTML 5 audio.
      </audio>
    </div>

    <!--DEVANAGIRI PALI SCRIPT-->
    <pre class="pali-italics">
      {verse.paliDevanagariVerse}
    </pre>

    <!--ROMAN PALI SCRIPT-->
    <pre class="pali-italics">
      {verse.paliRomanVerse}
    </pre>

    <!--ENGLISH  TRANSLATION-->
    <pre id="english">
      {verse.englishVerse}
    </pre>

     <!-- Next/prev buttons -->
    <span class="prev" on:click={prevVerse}>&#10094;</span>
    <span class="next" on:click={nextVerse}>&#10095;</span>
  </section>

  <hr />
  <section class="pali-vocab">
  <!--PALI VOCABULARY-->
    <h3>Vocabulary</h3>
    <ol>
      {#each verse.vocabularyWords as wordObj}
        <li><b>{wordObj.word}</b> - {wordObj.definition}  {wordObj.etymology ? `--> (${wordObj.etymology})` : ""}</li>    
      {/each}
    </ol>
  </section>

  <section class="quizlet-pdf-cont">
    <!--QUIZLET-->
    <div>
      <iframe src={verse.quizletUrl} height="410" width="100%" style="border:0" title="flashcards"></iframe>
    </div>
      
    <!--PDF DOWNLOAD LINK and BUTTON-->
    <div>
      <a href={verse.pdfFlashcards}>
        <button>Download the Flashcards</button>
      </a>
    </div> 
  </section>
</main>


<style>
  main {
    /* width: 100%;
    padding: 0; */
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: 	hsl(39, 37%, 85%);
  } 

  section {
    padding: 20px;
  }

  section.quizlet-pdf-cont {
    width: 90%;
  }

  h1, h2, h3, h4, h5, h6 {
    text-align: center;
    font-weight: bold;
  }

  .audio-cont {
    margin-left: auto;
    margin-right: auto;
  }

  pre {
    width: 100%;
    text-align: center;
    line-height: 125%;
  }

  pre#english {
    white-space:pre-line;
  }

  .pali-italics {
    font-style: italic;
  }

  .pali-vocab ol {
    max-width: 400px;
  }

  ol {
    margin: 0 0 10px 10px;
  }
  li {
    font-size: 1.1rem;
    line-height: 140%;
  } 

  div {
    width: 100%;
    text-align: center;
  }

  button {
    width: 190px;
    margin-top: 15px;
  }

  /* Next & previous buttons */
  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 350px; 
    margin: 0 10px;
    padding: 16px;
    color: #888;
    font-weight: bold;
    font-size: 1.5rem;
    user-select: none;
  }

  .prev {
    left: 0;
    border-radius: 0 3px 3px 0;
  }

  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  /* On hover, add a black background color with a little bit see-through */
  .prev:hover, .next:hover {
    background-color: rgba(0,0,0,0.8);
    color: white;
  }
</style>
