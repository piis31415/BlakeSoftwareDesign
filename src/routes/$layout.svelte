<script>
	import "../app.postcss";
	import NavBar from "../components/NavBar.svelte";

	let error, errorMsg;
</script>
<NavBar error={error} errorMsg={errorMsg}/>
<slot />
