<script context="module" lang="ts">
  /** @type {import('@sveltejs/kit').Load}*/
  export async function load({ session }) {
    console.log('user logged in:', session.auth);
    if (!session.auth) {
      return {
        status: 302, // redirect
        redirect: '/'
      }
    }
    return {
      status: 200
    }
  }
</script>
<script>
  import { onMount } from 'svelte';
  import DividingBar from '../../components/DividingBar.svelte';

  let editor;
  
  onMount(async () => {
    // Dynamically load editor on client side
    // because the Editor requires access to window
    // globals and such
    editor = (await import('../../components/Editor.svelte')).default;
  })

  function onEditorSave(bruh) {
    console.log('bruh', bruh);
  }
</script>

<main class="grid grid-flow-row">
  <div class="box">
    <h3 class="text-center text-3xl">Make A New Announcement</h3>
    <DividingBar />
    <svelte:component this={editor} on:save={onEditorSave}/>
  </div>
  <div class="box">
    <h3 class="text-center text-3xl">Add New User</h3>
    <DividingBar />
  </div>
</main>

<style style lang='postcss'>
  main {
    @apply grid;
    grid-template-columns: 100%;
  }
  .box {
    @apply border-solid border-highlight-blue border-2 rounded-lg m-4;
  }
  @screen lg {
    main {
      grid-template-columns: 65% 35%;
    }
  } 
</style>