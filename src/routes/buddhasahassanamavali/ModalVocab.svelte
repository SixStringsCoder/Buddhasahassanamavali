<script>
  import { fade } from 'svelte/transition'
  export let words;
  export let filterWords;
  export let searchTerm;
</script>

<!-- The Modal -->
<div id="myModal" class="modal" transition:fade>
  <div class="modal-content">
    <span class="close" on:click>&times;</span>
    <!-- Search Input -->
    <div id="search-input-cont">
      <form on:submit|preventDefault>
        <input type="text" 
              id="search-field" 
              placeholder="Search..." 
              autocomplete="off"
              bind:value={searchTerm}
              />
        <button type="submit">GO</button>      
      </form>
    </div> 
    <!-- List of Vocabulary -->
    <ul>
      {#if filterWords.length > 0}
        {#each filterWords as wordObj}
          <li><b>{wordObj.word}</b> - {wordObj.definition} <br>{!wordObj.etymology ? "" : `(${wordObj.etymology})`}</li>    
        {/each}
      {:else}
        {#each words as {word, definition, etymology}}
          <li><strong>{word}</strong> - {definition} {etymology ? `${etymology}` : ""}</li>
        {/each}
      {/if}
    </ul>
  </div>
</div>


<style>
  .modal {
    display: block; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
  }

  /* Modal Content/Box */
  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Adjust depending on screen size */
    height: 550px;
    overflow: scroll;
  }

  div#search-input-cont {
    width: 100%;
  }

  form {
		width: 85%;
		display: flex;
		align-items: center;
		margin: 0 0 0 10px;
	}

	#search-field {
		width: 100%;
		font-size: 1.3rem;
		border: 1px solid gray;
    border-right: 0px;
		border-radius: 5px 0 0 5px;
		padding: 8px;
	}

  button {
    width: 25%;
    padding: 12px 0;
    border: 1px solid gray;
    border-radius: 0 5px 5px 0;
    text-align: center;
  }

  button:hover {
    background-color: rgb(12, 184, 46);
  }

  button:active {
    background-color: #000;
    color: white
  }

  ul {
    padding: 5px;
    overflow: scroll;
  }

  /* The Close Button */
  .close {
    position: absolute;
    top: 0;
    right: 15px;
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>