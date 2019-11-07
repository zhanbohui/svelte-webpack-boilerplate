<template>
  <a href="/" use:link>home</a>
  <a href="/book/1?a=1" use:link>book</a>
  <a href="/404" use:link>404</a>
  <Router {routes}/>
</template>

<script>
  import Router, { link } from "svelte-spa-router";
  import routes from "./routes";
</script>

<style src="./app.less"></style>
