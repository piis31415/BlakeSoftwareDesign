<script>
  let error;
  let errorMsg;
</script>


{#if error}
<!-- error msg box -->
  <div class="absolute w-full flex top-2">
    <!-- parent div is just a container -->
  <div class="bg-white h-auto m-auto w-3/6 sm:w-2/6 lg:w-1/6 transition flex rounded-md justify-self-center">
    <span class="m-auto text-lg">{errorMsg}</span>
  </div>
  </div>

{/if}

<style style lang="postcss">

</style>

