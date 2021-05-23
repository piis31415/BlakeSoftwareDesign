<script context="module" lang="ts">
  /** @type {import('@sveltejs/kit').Load}*/
  export async function load({ session }) {
		return {
			props: {
				loggedIn: session.auth
			}
		}
  }
</script>
<script lang='ts'>
	import "../app.postcss";
	import NavBar from "../components/NavBar.svelte";
	import PageContainer from "../components/PageContainer.svelte";
	import { onMount } from 'svelte';
  import { supabase } from '../supabase';

	export let loggedIn: boolean;
	let ready = false;
	onMount(() => {
    ready = true;
    supabase.auth.onAuthStateChange((ev, session) => {
      console.log(ev, session);
      window.location.reload();
    })
  });
	console.log('loggedin:',loggedIn);

</script>
{#if ready}
	<NavBar loggedIn={loggedIn}/>
	<PageContainer>
		<slot />
	</PageContainer>
{/if}