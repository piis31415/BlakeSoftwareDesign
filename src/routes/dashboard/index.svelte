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

<main>
  <div class="border-solid border-blue-400 border-2 rounded-lg m-4">
    <svelte:component this={editor} on:save={onEditorSave} />
  </div>
</main>

<style style lang='postcss'>
  main {
    @apply grid;
    grid-template-columns: 100%;
  }
  @screen lg {
    main {
      grid-template-columns: 65% 35%;
    }
  } 
</style>