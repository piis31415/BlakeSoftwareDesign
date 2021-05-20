<script lang='ts'>
  import skittles from '../../assets/skittles.jpg'
</script>


<div id="skittles" class="h-1/2 flex flex-col" style="background: url({skittles})">
  <h1>WIN THE SKITTLES COUNT FOR YOUR COLOR FAM AND WIN A PRIZE!</h1>
  <button>PODs</button>
  <button>Recruit New Students</button>
  <button>Skittles Count</button>
</div>
<div>
  <h4>Problems of the Day (PODs)!</h4>
  <p>Each problem that you answer correctly wins you one skittle for your color fam. The PODs will be revealed during the ASM skit, so listen up! Ask your advisors, teachers, or friends for help on any of the PODs!</p>
  <button>Submit Today's PODs</button>
</div>
  <div>
    <h4>Recruit Students for Skkkkkkkkkkkittles!!</h4>
  </div>
  <img src="" alt="A group of people doing the limbo"/>
  <h4> Leaderboard </h4>
  <div class="flex mx-auto grid-cols-3 grid-rows-2 gap-4">
    <div class="font-bold text-gray-700 rounded-full bg-black items-center justify-center"> 1 </div>
    <div class="font-bold text-gray-700 rounded-full bg-black items-center justify-center"> 2 </div>
    <div class="font-bold text-gray-700 rounded-full bg-black items-center justify-center"> 3 </div>
    <div class="font-bold text-gray-700 rounded-full bg-black items-center justify-center"> 4 </div>
    <div class="font-bold text-gray-700 rounded-full bg-black items-center justify-center"> 5 </div>
    <div class="font-bold text-gray-700 rounded-full bg-black items-center justify-center"> 6 </div>
  </div>

<style style lang='postcss'>
  * {
    @apply text-dark-blue text-center;
  }
  button {
    @apply bg-dark-blue p-2 m-auto text-white rounded-lg transition duration-100 ease-in-out hover:bg-dark-blue-hover;
  }
  div {
    @apply space-y-4 p-8;
  }
  #skittles {
    @apply text-white text-lg font-bold;
  }
  #skittles h1 {
    @apply text-white;
    text-shadow: rgb(0, 0, 0) 2px 0px 0px, rgb(0, 0, 0) 1.75517px 0.958851px 0px, rgb(0, 0, 0) 1.0806px 1.68294px 0px, rgb(0, 0, 0) 0.141474px 1.99499px 0px, rgb(0, 0, 0) -0.832294px 1.81859px 0px, rgb(0, 0, 0) -1.60229px 1.19694px 0px, rgb(0, 0, 0) -1.97999px 0.28224px 0px, rgb(0, 0, 0) -1.87291px -0.701566px 0px, rgb(0, 0, 0) -1.30729px -1.51361px 0px, rgb(0, 0, 0) -0.421592px -1.95506px 0px, rgb(0, 0, 0) 0.567324px -1.91785px 0px, rgb(0, 0, 0) 1.41734px -1.41108px 0px, rgb(0, 0, 0) 1.92034px -0.558831px 0px;  }
  h1 {
    @apply text-4xl;
  }
  h4 {
    @apply text-2xl font-bold;
  }
</style>