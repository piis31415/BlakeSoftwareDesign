<script lang="ts" context="module">
  export async function load({ session }) {
    console.log('bruh', session);
    console.log(session.auth);
    return {
      props: {
        auth: session.auth
      }
    }
  }
</script>
<script lang="ts">
  import { goto } from "$app/navigation";
  import Login from "./GoogleLogin.svelte";
  import logo from "../assets/logo.png";
  export let loggedIn: boolean = false;
</script>


<nav class="w-full bg-light-blue flex flex-row h-20 fixed top-0">
  <img src={logo} on:click={()=>{goto('/')}} alt="Learning Works Logo" class="cursor-pointer"/>
  <a sveltekit:prefetch href="/announcements">
      <span>Announcements</span>
  </a>
  <a sveltekit:prefetch href="/schedules-links">
      <span>Schedules and Links</span>
  </a>
  <a sveltekit:prefetch href="/win-skittles">
      <span>Win Skittles</span>
  </a>
  <a sveltekit:prefetch href="/extra-info">
      <span>Extra Info</span>
  </a>
  {#if !loggedIn}
    <Login/>
  {:else}
    <a sveltekit:prefetch href="/dashboard">
        <span>Dashboard</span>
    </a>
  {/if}
</nav>

<style style lang="postcss">
  nav > div {
    @apply text-center m-auto  text-black font-normal transition-all duration-700;
  }
  nav > a {
    @apply flex m-auto w-full h-full;
  }
  nav > a > span {
    @apply m-auto;
  }
  nav > a:hover {
    @apply bg-light-blue-hover;
  }
  
</style>