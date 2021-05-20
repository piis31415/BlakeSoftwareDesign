<script lang='ts'>
  import about_img from '../../assets/about-lw-image.png';
  import Fa from 'svelte-fa';
  import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';
</script>

<div>
  <h1>About LearningWorks</h1>
  <div class="grid grid-cols-2">
    <img class = "px-4 pb-8" alt="" src={about_img}/>
    <div class = "p-4">
      "LearningWorks is a unique public-private partnership between Minneapolis Public Schools and The Blake School. Since 2000, LearningWorks has prepared students to thrive in college and offered real-world teaching expereinces to high school and college students."  
    </div>
  </div>
  <h1> Tech Support </h1>
  <div class= "pb-4 text-xl text-center">
    Click on icons for more information! <br> You can also call or text James for support at (612) 367-6187 or email him at <a class="text-blue-600" href = "mailto:jasmiller@blakeschool.org">jasmiller@blakeschool.org</a>. 
  </div>
  <div class = "flex flex-row">

  </div>
</div>


<style style lang="postcss">
  h1 {
    @apply text-center text-5xl mx-auto p-8;
  }
</style>