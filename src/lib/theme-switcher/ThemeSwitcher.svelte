<script lang="ts">
  import Button from "@/lib/button/Button.svelte";
  import sun from "./icons/sun.svg";
  import moon from "./icons/moon.svg";

  let isDark = false;
  const toggleTheme = () => {
    const html = document.getElementsByTagName("html")[0];
    const className = "dark";
    if (html.classList.contains(className)) {
      html.classList.remove(className);
    } else {
      html.classList.add(className);
    }
    isDark = !isDark;
  };
</script>

<Button on:click={toggleTheme}>
  {#if isDark}
    <img src={sun} alt="sun" class="w-8 h-8 stroke-white" />
  {:else}
    <img src={moon} alt="moon" class="w-8 h-8 fill-black" />
  {/if}
</Button>
