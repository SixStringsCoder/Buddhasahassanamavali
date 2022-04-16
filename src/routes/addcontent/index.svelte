<script>
  import { GraphQLClient } from 'graphql-request';
  import wordsJSON from '../../../static/words.json';
  //$: console.log(`${wordsJSON[0].wordId}`)
  
  async function addData() {  
    console.log(`${wordsJSON[0].wordId}`)
    const graphcmsClient = new GraphQLClient(
      `${import.meta.env.VITE_GRAPHCMS_ENDPOINT}`,
      { 
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_GRAPHCMS_MUTATION_TOKEN}`
        } 
      });
      try {
        const { createVocabularyWord } = await graphcmsClient.request(
          `mutation {
            createVocabularyWord(data: { 
            wordId: ${wordsJSON[0].wordId}, 
            word: ${wordsJSON[0].word},
            definition: ${wordsJSON[0].definition},
            etymology: ${wordsJSON[0].etymology},
          }) {
              wordId
              word
              definition
              etymology
            }
          }`
        );
          console.log(createVocabularyWord);
      } catch(error) {
        console.log(error)
      }
  } 

// for (let i = 0; i < wordsJSON.length; i++) {
//     const { vocabularyWord } = await graphcmsClient.request(
//       `mutation {
//         createVocabularyWord(data: { 
//         wordId: wordsJSON[i].wordId, 
//         word: wordsJSON[i].word,    
//         definition: wordsJSON[i].definition,
//         etymology: wordsJSON[i].etymology,
//       }) {
//         wordId
//         word
//         definition
//         etymology
//       }
//     }`
//     );
//   }
</script>

<div>
  <button on:click={addData}>ADD CONTENT</button>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    margin: 20px;
  }
</style>