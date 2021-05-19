<script lang='ts'>
  import skittles from '../../assets/skittles.jpg'
</script>


<div id="skittles" class="h-1/2 flex flex-col" style="background: url({skittles})">
  <h1>WIN THE SKITTLES COUNT FOR YOUR COLOR FAM AND WIN A PRIZE</h1>
  <button>PODs</button>
  <button>Recruit New Students</button>
  <button>Skittles Count</button>
</div>
<div>
  <h4>Problems of the Day (PODs)!</h4>
  <p>Each problem that you answer correctly wins you one skittle for your color fam. The PODs will be revealed during the ASM skit, so listen up! Ask your advisors, teachers, or friends for help on any of the PODs!</p>
  <button>Submit Today's PODs</button>
</div>
<div class="flex-row">
  <div>
    <h4>Recruit Students for Skitkkkkkkkkkkkittles!!</h4>
  </div>
  <img src="" alt="A group of people doing the limbo"/>
</div>

<style style lang='postcss'>
  * {
    @apply text-dark-blue text-center;
  }
  button {
    @apply bg-dark-blue p-2 m-auto text-white rounded-lg;
  }
  div {
    @apply space-y-4 p-8;
  }
  #skittles {
    @apply text-white text-lg font-bold;
  }
  #skittles h1 {
    @apply text-white;
  }
  h1 {
    @apply text-4xl;
  }
  h4 {
    @apply text-2xl font-bold;
  }
</style>