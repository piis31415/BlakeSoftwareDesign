<script lang='ts'>
  import frontpage_img from '../assets/front-page.png';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faFacebookSquare, faTwitterSquare, faFlickr as faFlickrSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="h-full">
  <img src={frontpage_img} class="w-full" alt="random people studying and enjoying themselves"/>
  <div class="flex flex-row">
    <a href="https://www.facebook.com/LearningWorksatBlake/" >
        <Fa icon={faFacebookSquare} size="5x"/>
    </a>
    <a href="https://twitter.com/LearningWorks">
      <Fa icon={faTwitterSquare}  size="5x"/>
    </a>
    <a href="https://flickr.com/photos/lwblakeschool">
      <Fa icon={faFlickrSquare}  size="5x"/>
    </a>
    <a href="https://www.instagram.com/learningworks/">
      <Fa icon={faInstagramSquare}  size="5x"/>
    </a>
  </div>
</div>

<style style lang="postcss">
 div > div > a {
   @apply m-auto;
 }
</style>

