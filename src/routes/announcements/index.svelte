<script lang='ts'>
  import { supabase } from '../../supabase';
  import Announcement_renderer from '../../components/Announcement_renderer.svelte';

  let announcements = [];
  (async ()=>{
    const { data, error } = await (await supabase).from('announcements').select('stored_data');
    console.log(data, error);
    // console.log(data, error);
    announcements = data;
    // console.log('announcements', announcements);
  })();
</script>
<div id="page-container" class="p-4 mt-12 w-full relative">
  <span class="pb-8 text-5xl text-center m-auto">Announcements</span>
  <Announcement_renderer announcements={announcements} />
</div>

<style style lang="postcss">
  /* #page-container {
    height: calc(100vh - theme('spacing.navbar'));
  } */
</style>
