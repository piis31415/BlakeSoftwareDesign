<script lang="ts">
  import Login from "./GoogleLogin.svelte";
  export let error: boolean;
  export let errorMsg: string;
  export let loggedIn: boolean = false;
</script>


<div class="bg-yellow-400 w-full flex flex-row justify-between h-16 fixed top-0">
  <div id="navigation" class="flex flex-row h-full">
    <a href="/">Home</a>
    <a href="/announcements/">Announcements</a>
    <a href="/schedules-links">Schedule and Links</a>
    <a href="/win-skittles">Win Skittles</a>
    <a href="/other">Other</a>
  </div>
  {#if !loggedIn}
  <div class="h-full">
    <Login error={error} errorMsg={errorMsg}/>
  </div>
  {/if}
</div>

<style style lang="postcss">
  #navigation a {
    @apply bg-yellow-400 text-2xl m-auto px-4 text-blue-600 w-full h-full block flex-grow;
  }
  #navigation a:hover {
    @apply bg-yellow-600;
  }
</style>