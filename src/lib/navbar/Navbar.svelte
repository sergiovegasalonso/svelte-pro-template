<script lang="ts">
  import { Link } from "svelte-navigator";
  import BackButton from "@/lib/back-button/BackButton.svelte";
  import ForwardButton from "@/lib/forward-button/ForwardButton.svelte";
  import ThemeSwitcher from "@/lib/theme-switcher/ThemeSwitcher.svelte";
</script>

<header
  class="flex justify-between items-center px-8 py-4 width-full shadow-md h-16 bg-lightPrimary dark:bg-darkPrimary"
>
  <nav>
    <BackButton />
    <ForwardButton />
    <Link to="/">Base</Link>
    <Link to="home">Home</Link>
    <Link to="about">About</Link>
    <Link to="blog">Blog</Link>
  </nav>
  <ThemeSwitcher />
</header>
