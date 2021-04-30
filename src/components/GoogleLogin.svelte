<script lang="ts">
    import { onMount } from "svelte";
    import { post } from "./util";
    import { goto } from "$app/navigation";
    export let error = false;
    export let errorMsg = "";
    onMount(() => {
        // casts global window to type any
        // so ts doesn't get mad at me
        (window as any).onSignIn = async (googleUser) => {
            console.log(googleUser);
            const profile = googleUser.getBasicProfile();
            console.log(profile);
            const token = googleUser.getAuthResponse().id_token;
            const result = await post('login/token', {token});
            console.log(result);
            error = result.error;
            if (error) {
                errorMsg = result.msg;
            } else {
                goto("dashboard");
            }
        }
        (window as any).init = async () => {
            console.log("INITIALIZED");
        }
    })
</script>
<svelte:head>
    <meta name="google-signin-scope" content="profile email">
    <meta name="google-signin-client_id" content="238455601010-q1upaaa17s4q3ku3sikr253d4q6pquen.apps.googleusercontent.com">
    <script src="https://apis.google.com/js/platform.js?onload=init" async defer></script>
</svelte:head>

<div class="g-signin2" data-longtitle="true" data-onsuccess="onSignIn" data-context="signin"/>

