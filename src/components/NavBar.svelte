<script lang="ts">
  import { goto } from "$app/navigation";
  import logo from "../assets/logo.png";
  import { googleAuth } from "./util";
  import { supabase } from '../supabase';
  export let loggedIn: boolean = false;

  supabase.auth.onAuthStateChange((ev, session) => {
    console.log(session.user.aud);
    loggedIn = session.user.aud == 'authenticated';
  })
</script>


<nav class="pb-2 w-full bg-light-blue flex flex-row h-20 top-0 fixed z-50">
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
    <a on:click={googleAuth}>
      <span>Login</span>
    </a>
  {:else}
    <a sveltekit:prefetch href="/dashboard">
        <span>Dashboard</span>
    </a>
  {/if}
</nav>

<style style lang="postcss">
  nav {
    z-index: 100;
  }
  nav > div {
    @apply text-center m-auto  text-black font-normal transition-all duration-700;
  }
  nav > a {
    @apply flex m-auto w-full h-full transition duration-100 ease-in-out hover:bg-light-blue-hover;
  }
  nav > a > span {
    @apply m-auto;
  }
  nav > a:hover {
    @apply cursor-pointer;
  }
  
</style>