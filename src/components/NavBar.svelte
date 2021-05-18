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
  <button class="flex-1" on:click={()=>goto('/announcements')}>
    Announcements
  </button>  
  <button class="flex-1" on:click={()=>goto('/schedules-links')}>
      Schedule and Links
    </button>
  <button class="flex-1" on:click={()=>goto('/win-skittles')}>
      Win Skittles
    </button>
    <button class="flex-1" on:click={()=>goto('/extra-info')}>
      Extra Info
    </button>
    {#if !loggedIn}
      <Login/>
    {:else}
    <button class="flex-1" on:click={()=>goto('/dashboard')}>
      Dashboard
    </button>
    {/if}
</nav>

<style style lang="postcss">
  nav > div {
    @apply text-center m-auto  text-black font-normal transition-all duration-700;
  }
  nav > button:hover {
    @apply bg-light-blue-hover;
  }
  
</style>