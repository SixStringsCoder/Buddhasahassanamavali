<script>
	export let searchTerm = "";
</script>


<section id="vocab-search-input">
  <div class="search-input-cont">
    <input type="text" 
          id="search-field" 
          placeholder="Search Vocab. or Verses"
          autocomplete="off"
          pattern="\D*" 
          maxlength="50"
          bind:value={searchTerm}
          on:input />
  </div> 
</section>


<style>
  section#vocab-search-input {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 0;
  }

	div.search-input-cont {
		width: 75%;
		display: flex;
		align-items: center;
		margin: 0 20px 10px;
	}

  input {
		font-size: 1.3rem;
		border: 1px solid gray;
		border-radius: 5px;
		padding: 8px;
		margin: 0 10px 0;
  }

	#search-field {
		width: 100%;
	}
</style>