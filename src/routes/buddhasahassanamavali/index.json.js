import { GraphQLClient } from 'graphql-request';

export async function get() {
  const graphcmsClient = new GraphQLClient(
    `${import.meta.env.VITE_GRAPHCMS_ENDPOINT}`,
    { headers: {} }
  );

try {
  const { verses } = await graphcmsClient.request(
    `query VersesIndex {
      verses {
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
    }`
  )
  return {
    props: {
      status: 200,
      body: JSON.stringify(verses, null, 2),
    }
  };
  } catch(error) {
    return {
      status: 500,
      body: {
        error: 'A Silly Server Error Occurred!',
      }
    }
  }
}