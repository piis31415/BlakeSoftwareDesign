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
      status: 200,
      props: {
        role: session.role
      }
    }
  }
</script>
<script lang='ts'>
  import { onMount } from 'svelte';
  import DividingBar from '../../components/DividingBar.svelte';
  import { post, supabase } from '../../components/util';

  // post();
  export let role;
  let editor;
  console.log(globalThis.cookie);

  
  onMount(async () => {
    // Dynamically load editor on client side
    // because the Editor requires access to window
    // globals and such
    if (role === 'admin') {
      editor = (await import('../../components/Editor.svelte')).default;
    }
  })

  async function onEditorSave({ detail }) {
    console.log('bruh', JSON.stringify(detail.blocks));
    const { data, error } = supabase.rpc('new_announcement', {
      announcement_data: JSON.stringify(detail.blocks)
    })
    if (error) console.error(error);
    else console.log(data);
  }
  
  let userEmails;
  function addUsers() {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(userEmails);
    if (!userEmails) return;
    // seperate emails by spaces
    let emails = userEmails.split(' ');
    for (const email of emails) {
      if (!re.test(String(email).toLowerCase())) {
        console.error('Invalid Email');
        return;
      }
    }
    post('add-user', {
      emails
    });
  }
</script>

<main class="grid grid-flow-row">
  <div class="box">
    <h3 class="p-2 text-center text-3xl">Make A New Announcement</h3>
    <DividingBar />
    <svelte:component this={editor} on:save={onEditorSave}/>
  </div>
  <div class="box">
    <h3 class="p-2 text-center text-3xl">Add New User</h3>
    <DividingBar />
    <div class="flex flex-col">
      <textarea class = "bg-gray-100 flex-grow" id="add-user-textbox" bind:value={userEmails}></textarea>
      <button on:click={() => addUsers()} class="p-1 border-solid border-highlight-blue border-2 rounded-lg m-4 flex-none">Add Users</button>
    </div>
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
  button {
    @apply  transition duration-100 ease-in-out hover:bg-gray-200;
  }
  #add-user-textbox {
    @apply m-4 h-auto resize-none;
    width: calc(100% - theme('spacing.4') - theme('spacing.4'));
  }
  @screen lg {
    main {
      grid-template-columns: 65% 35%;
    }
  } 
</style>