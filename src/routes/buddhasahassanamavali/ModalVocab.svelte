<script>
  import { fade } from 'svelte/transition'
  export let words;
</script>

<!-- The Modal -->
<div id="myModal" class="modal" transition:fade>
  <div class="modal-content">
    <span class="close" on:click>&times;</span>
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
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
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