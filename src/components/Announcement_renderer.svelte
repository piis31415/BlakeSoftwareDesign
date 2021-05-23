<script lang="ts">
  import renderer from 'editorjs-html';
  export let announcements;
  const parser = renderer();
  console.log(parser);
  console.log(announcements)
</script>

<div class="container">
  {#if announcements}
    {#each announcements as announcement}
      <div>
      {#each JSON.parse(announcement.stored_data) as block}
        {@html block? parser.parseBlock(block):null}
      {/each}
      </div>
    {/each}
  {/if}
</div>

<style style lang="postcss">
  .container {
    @apply space-y-4;
  }
  .container > div {
    @apply p-4 bg-gray-100 border-highlight-blue rounded-lg;
  }
</style>