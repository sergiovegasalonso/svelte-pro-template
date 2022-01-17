<script lang="ts">
  import { Link } from "svelte-navigator";
  import BackButton from "@/lib/back-button/BackButton.svelte";
  import ForwardButton from "@/lib/forward-button/ForwardButton.svelte";
</script>

<header>
  <h1>History</h1>
  <nav>
    <BackButton />
    <ForwardButton />
    <Link to="/">Base</Link>
    <Link to="home">Home</Link>
    <Link to="about">About</Link>
    <Link to="blog">Blog</Link>
  </nav>
</header>
