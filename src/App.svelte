<template>
  <a href='#/book'>book</a>
  <a href='#/hello'>404</a>
  <Router {routes}/>
</template>

<script>
  import Router from 'svelte-spa-router';
  import routes from './routes';

  import HelloWorld from "./components/HelloWorld/HelloWorld.svelte";
  export let name = 'world';
  function handleClick() {
    alert('click');
  }
</script>

<style src='./app.less'></style>
