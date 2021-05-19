<script lang='ts'>
  import about_img from '../../assets/about-lw-image.png';
  import schedule from '../../assets/link-images/schedule.jpg';
  import meeting from '../../assets/link-images/meeting.jpg';
  import classroom from '../../assets/link-images/class.jpg';
  import passing from '../../assets/link-images/passing.jpg';
  import advisory from '../../assets/link-images/advisory.jpg';
  import lunch from '../../assets/link-images/lunch.jpg';
</script>

<div class="flex flex-col justify-center parent" >
  <div style="background-image: url('{schedule}')">
    <button>Skedj</button>
  </div>
  <!-- <img src={schedule} alt="Schedule" /> -->
  <div style="background-image: url('{meeting}')">
    <button>All School Meeting</button>
  </div>
  <div style="background-image: url('{classroom}')">
    <button>Class Links</button>
  </div>
  <div style="background-image: url('{passing}')">
    <button>Passing Time</button>
  </div>
  <div style="background-image: url('{advisory}')">
    <button>Advisory</button>
  </div>
  <div style="background-image: url('{lunch}')">
    <button>Lunch Groups</button>
  </div>
</div>

<style style lang="postcss">
  .parent > div {
    @apply m-auto flex flex-col w-5/6 h-64;
  }
  .parent > div > button {
    @apply m-auto bg-white rounded-lg px-4 py-1;
  }
  .parent > div:hover{
    @apply opacity-70;
  }
</style>