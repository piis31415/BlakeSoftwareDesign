<script>
    import { post } from "./util.js";
    export let error = false;
    export let errorMsg = "";
    window.onSignIn = async (googleUser) => {
        console.log(googleUser);
        const profile = googleUser.getBasicProfile();
        console.log(profile);
        const token = googleUser.getAuthResponse().id_token;
        const result = await post('token-login', {token});
        console.log(result);
        error = result.error;
        if (error) {
            errorMsg = result.msg;
        } else {
            window.location.path = 'dashboard';
        }
    }
</script>
<svelte:head>
    <meta name="google-signin-scope" content="profile email">
    <meta name="google-signin-client_id" content="238455601010-q1upaaa17s4q3ku3sikr253d4q6pquen.apps.googleusercontent.com">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
</svelte:head>

<div class="g-signin2" data-longtitle="true" data-onsuccess="onSignIn" />

