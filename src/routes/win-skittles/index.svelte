<script>
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faFlag, faEnvelope } from '@fortawesome/free-solid-svg-icons'
  import skittles from '../../assets/skittles.jpg'
</script>


<div>
  <i class="fab fa-battle-net"></i>
  <h1>Win the skittles count for your color fam and win a prize</h1>
  <h4>Problems of the Day</h4>
  <p>Each problem that you answer correctly wins you one skittle for your color fam. The PODs will be revealed during the ASM skit, so listen up! Ask your advisors, teachers, or friends for help on any of the PODs!</p>
  <button></button>
  <Fa icon={faEnvelope} />
</div>

<style style lang='postcss'>
  button {
    @apply bg-blue-900 p-2 pr-2;
  }
</style>