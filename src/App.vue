<template>
  <div class="container">
    <PixcapEditor />
    <PixcapSidebar />
  </div>
</template>

<script>
import PixcapEditor from "./components/PixcapEditor.vue";
import PixcapSidebar from "./components/PixcapSidebar.vue"

export default {
  name: "App",
  components: {
    PixcapEditor,
    PixcapSidebar,
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
}
</style>
