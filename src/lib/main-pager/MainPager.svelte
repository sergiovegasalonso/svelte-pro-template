<script lang="ts">
  import { Route } from "svelte-navigator";
  import LazyRoute from "./LazyRoute.svelte";

  const delayModuleLoad = (module) =>
    new Promise((res) => setTimeout(() => res(module), Math.random() * 2000));
  const Home = () => import("@/screens/home/Home.svelte").then(delayModuleLoad);
  const About = () =>
    import("@/screens/about/About.svelte").then(delayModuleLoad);
  const Blog = () => import("@/screens/blog/Blog.svelte").then(delayModuleLoad);
</script>

<main>
  <!--
      When `delayMs` is set, the fallback will be displayed
      after `delayMs` milliseconds.
      It might lead to a better UX, because it will suppress
      a flash of spinners on a fast connection.
    -->
  <LazyRoute path="blog/*blogRoute" component={Blog} delayMs={500}>
    <h4>Loading...</h4>
  </LazyRoute>
  <LazyRoute path="home" component={Home} delayMs={500}>
    Loading Home...
  </LazyRoute>
  <LazyRoute path="about" component={About} delayMs={500}>
    Loading About...
  </LazyRoute>
  <Route>
    <h3>Default</h3>
    <p>No Route could be matched.</p>
  </Route>
</main>
