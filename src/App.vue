<template>
  <div class="container">
    <PixcapEditor />
  </div>
</template>

<script>
import PixcapEditor from "./components/PixcapEditor.vue";

export default {
  name: "App",
  components: {
    PixcapEditor,
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
}
</style>
