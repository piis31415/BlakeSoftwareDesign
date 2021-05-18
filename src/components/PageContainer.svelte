<div class="mt-20 h-auto w-auto m-4 bg-white">
  <slot />
</div>

<style style lang="postcss">
  /* :global(body) {
    @apply h-full;
  } */
  :global(html) {
    @apply h-full bg-light-blue;
  }
  /* :global(#svelte) {
    @apply h-full;
  } */
</style>