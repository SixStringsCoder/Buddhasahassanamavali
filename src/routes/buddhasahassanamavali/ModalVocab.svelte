<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition'
  export let words;
  export let filterWords;
  export let searchTerm;

  const dispatch = createEventDispatcher();
</script>

<!-- The Modal -->
<div id="myModal" class="modal" transition:fade>
  <div class="modal-content">
    <header id="search-input-cont">    
      <!-- Search Input -->
			<div class="input-cont">
        <button id="reset-search" on:click={() => dispatch('clear')}>🔄</button>
        <form on:submit|preventDefault>
          <input type="text" 
                id="search-field" 
                placeholder="Search..." 
                autocomplete="off"
                bind:value={searchTerm}
                />
          <button type="submit">🔎</button>      
        </form>  
			</div>
			<div class="closer-cont">
      	<span class="close" on:click>&times;</span>
			</div>
  </header>
    <!-- List of Vocabulary -->
    <ul>
      {#if filterWords.length > 0}
        {#each filterWords as wordObj}
          <li><b>{wordObj.word}</b> - {wordObj.meaning} <br>{!wordObj.formation ? "" : `${wordObj.formation}`}</li>    
        {/each}
      {:else}
        {#each words as {word, meaning, formation}}
          <li><strong>{word}</strong> - {meaning} <br><span>{formation ? `${formation}` : ""}</span></li>
        {/each}
      {/if}
    </ul>
  </div>
</div>


<style>
  .modal {
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
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Adjust depending on screen size */
    height: 550px;
    overflow: scroll;
  }

  header {
    width: 85%;
    position: fixed;
    top: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 5px 0;
  }
	
	div.input-cont {
		width: 83%;
		display: flex;
    justify-content: center;
    align-items: center;
	}
		
	div.closer-cont {
		
	}

  button#reset-search {
    font-size: 2.3rem;
    width: 40px;
    height: 42px;
    padding: 0;
    border-top: 1px solid gray;
    border-left: 1px solid gray;
    border-bottom: 1px solid gray;
  }

  form {
		width: 65%;
		display: flex;
		align-items: center;
	}

	#search-field {
		width: 90%;
		font-size: 1.3rem;
		border: 1px solid gray;
    border-right: 0px;
		/* border-radius: 5px 0 0 5px; */
		padding: 8px;
	}

  button {
		position: relative;
		top: -1px;
		left: 0px;
    width: 40px;
    padding: 11px 0;
    border: 1px solid gray;
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
    margin-top: 35px;
    padding: 5px;
    overflow: scroll;
  }
	
	li {
		margin: 5px 0;
	}
	
	li span {
		color: green
	}

  /* The Close Button */
  .close {
    position: relative;
    top: -10px;
    right: 15px;
    color: #aaa;
    font-size: 35px;
    font-weight: bold;
    margin-left: 15px;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>