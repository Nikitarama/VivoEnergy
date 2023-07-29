<template>
    <div>
    <video controls>
      <!-- Use the 'src' attribute to provide the path to your video file -->
      <source :src="videoPath" type="video/mp4" />
      <!-- Add fallback content if the browser doesn't support the video -->
      Your browser does not support the video tag.
    </video>
  </div>


</template>

<script>
export default {
  data() {
    return {
      // Set the path to your video file
      videoPath:"./assets/content/",
    };
  },
};

</script>