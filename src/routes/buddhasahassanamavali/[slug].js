import { GraphQLClient } from 'graphql-request';

export async function get({params}) {
  
  const graphcmsClient = new GraphQLClient(
    `${import.meta.env.VITE_GRAPHCMS_ENDPOINT}`,
    { headers: {} }
  );

  try {
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
      body: {
        verse
      }
    };
  } catch(error) {
    return {
      status: 500,
      body: {
        error: 'A Server Error Occurred!',
      }
    }
  }
}



// const { verses } = await graphcmsClient.request(
//   `query VersesIndex {
//     verses {
//       slug
//       verseId
//       paliDevanagariVerse
//       paliRomanVerse
//       englishVerse
//       vocabularyWords {
//         id   
//         word
//         definition
//         etymology
//       }
//       audioUrl
//       quizletUrl
//       pdfFlashcards
//     }
//   }`
// )