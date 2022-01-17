<script lang="ts">
  import { Router } from "svelte-navigator";
  import Navbar from "@/lib/navbar/Navbar.svelte";
  import logo from "@/assets/svelte.png";
  import "@/css/global.css";
</script>

<Router>
  <Navbar />
  <main>
    <img src={logo} alt="Svelte Logo" />
  </main>
</Router>
