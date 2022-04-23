<script>
  import { fade } from 'svelte/transition'
  export let words;
  export let searchTerm;
</script>

<!-- The Modal -->
<div id="myModal" class="modal" transition:fade>
  <div class="modal-content">
    <span class="close" on:click>&times;</span>
    <!-- Search Input -->
    <div id="search-input-cont">
      <input type="text" 
             id="search-field" 
             placeholder="Search..." 
             autocomplete="off"
             bind:value={searchTerm}
             on:input />
    </div> 
    <!-- List of Vocabulary -->
    <ul>
      {#await words}
        <p>...waiting</p>
      {:then words}
        {#each words as {word, definition, etymology}}
          <li><strong>{word}</strong> - {definition} {etymology ? `${etymology}` : ""}</li>
        {/each}
      {:catch error}
        <p style="color: red">Something went wrong!</p>
      {/await}
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
  }

  #search-input-cont {
		width: 85%;
		display: flex;
		align-items: center;
		margin: 0 0 0 10px;
	}

	#search-field {
		width: 100%;
		font-size: 1.3rem;
		border: 1px solid gray;
		border-radius: 5px;
		padding: 8px;
		margin: 0 10px 0;
	}

  ul {
    padding: 5px;
    overflow: scroll;
  }

  /* The Close Button */
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
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