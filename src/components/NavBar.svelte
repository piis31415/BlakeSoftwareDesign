<script lang="ts" context="module">
  export async function load({ session }) {
    console.log('bruh', session, context);
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
  <div>
    <a href="/schedules-links">Schedule and Links</a>
  </div>
  <div>
    <a href="/win-skittles">Win Skittles</a>
  </div>
  <div>
    <a href="/other">Extra Info</a>
  </div>
  {#if !loggedIn}
    <Login/>
  {:else}
    <div>
      <a href="/dashboard">Dashboard</a>
    </div>
  {/if}
</nav>

<style style lang="postcss">
  nav > div {
    @apply text-center m-auto  text-black font-normal transition-all duration-700;
  }
  #navigations > div a {
    @apply m-auto;
  }
  #navigation > div a:hover {
    @apply font-medium;
  }
</style>