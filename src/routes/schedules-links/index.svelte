<script lang='ts'>
  import about_img from '../../assets/about-lw-image.png';
  import schedule from '../../assets/link-images/schedule.jpg';
  import meeting from '../../assets/link-images/meeting.jpg';
  import classroom from '../../assets/link-images/class.jpg';
  import passing from '../../assets/link-images/passing.jpg';
  import advisory from '../../assets/link-images/advisory.jpg';
  import lunch from '../../assets/link-images/lunch.jpg';
</script>

<div class="max-w-screen-md mx-auto flex flex-col justify-center parent " >
  <a sveltekit:prefetch href="/announcements">
    <div style="background-image: url('{schedule}')">
      <button>Skedj</button>
    </div>
  </a>
  <!-- <img src={schedule} alt="Schedule" /> -->
  <a sveltekit:prefetch href="/announcements">
    <div style="background-image: url('{meeting}')">
      <button>All School Meeting</button>
    </div>
  </a>
  <a sveltekit:prefetch href="/announcements">
  <div style="background-image: url('{classroom}')">
    <button>Class Links</button>
  </div>
  </a>
  <a sveltekit:prefetch href="/announcements">
  <div style="background-image: url('{passing}')">
    <button>Passing Time</button>
  </div>
</a>
<a sveltekit:prefetch href="/announcements">
  <div style="background-image: url('{advisory}')">
    <button>Advisory</button>
  </div>
</a>
<a sveltekit:prefetch href="/announcements">
  <div style="background-image: url('{lunch}')">
    <button>Lunch Groups</button>
  </div>
</a>
</div>

<style style lang="postcss">
  .parent > a > div {
    @apply max-w-screen-md m-auto flex flex-col w-5/6 h-64 transition duration-100 ease-in-out hover:opacity-70;
  }
  .parent > a > div > button {
    @apply m-auto bg-white rounded-lg px-4 py-1 outline-none;
  }
</style>