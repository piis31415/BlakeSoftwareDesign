<script>
  import frontpage_img from '../assets/front-page.png';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faFacebookSquare, faTwitterSquare, faFlickr as faFlickrSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="h-full">
  <img src={frontpage_img} />
  <div class="flex flex-row">
    <Fa icon={faFacebookSquare} class="m-auto" size="5x"/>
    <Fa icon={faTwitterSquare} class="m-auto" size="5x"/>
    <Fa icon={faFlickrSquare} class="m-auto" size="5x"/>
    <Fa icon={faInstagramSquare} class="m-auto" size="5x"/>
  </div>
</div>

<style style lang="postcss">

</style>

