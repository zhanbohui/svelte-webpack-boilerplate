<template>
  <h1>
    Hello {name}! <br>
    <span>Welcome to svelte</span>
  </h1>
  <HelloWorld />
</template>

<script>
  import HelloWorld from "./components/HelloWorld/HelloWorld.svelte"
  export let name = 'world';
</script>

<style src='./app.less'></style>
