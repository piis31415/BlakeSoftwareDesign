<script lang='ts'>
	import "../app.postcss";
	import NavBar from "../components/NavBar.svelte";
	import PageContainer from "../components/PageContainer.svelte";
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>
{#if ready}
	<NavBar/>
	<PageContainer>
		<slot />
	</PageContainer>
{/if}