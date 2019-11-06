import Book from './pages/Book.svelte';
import NotFound from './pages/404.svelte';
import Home from './pages/Home.svelte';

const routes = {
  '/': Home,
  '/book/:id': Book,
  '*': NotFound
}

export default routes;
