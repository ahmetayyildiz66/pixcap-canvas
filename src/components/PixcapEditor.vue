<template>
  <div>
    <PixcapToolbar />
    <PixcapCanvas />
  </div>
</template>

<script>
import PixcapToolbar from "./PixcapToolbar.vue";
import PixcapCanvas from "./PixcapCanvas.vue";

export default {
  components: {
    PixcapCanvas,
    PixcapToolbar,
  },
};
</script>

<style></style>