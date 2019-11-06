<template>
  <h1>Hello {name}!
    <span>hhhhh</span>
  </h1>
  <HelloWorld />
</template>

<script>
  import HelloWorld from "./components/HelloWorld/HelloWorld.svelte";
  export let name = 'world';
  function handleClick() {
    alert('click');
  }
</script>

<style src='./app.less'></style>
