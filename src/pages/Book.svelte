<template>
  <h2>
    This is Book page!!!
  </h2>
  <button on:click={handleClick}>go to 404</button>
</template>

<script>
  import { push, pop, replace, location, querystring } from 'svelte-spa-router';
  import { onMount } from 'svelte';
  export let params = {};
  function handleClick() {
    push('/404');
  }
  onMount(() => {
    console.log($location);
    console.log($querystring);
    console.log(params);
  })
</script>
