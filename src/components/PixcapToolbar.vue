<template>
  <div class="toolbar">
    <h1 class="toolbar__heading-primary">PixCap</h1>
    <PixcapActions />
    <p>ahmetayyildiz66@gmail.com</p>
  </div>
</template>

<script>
import PixcapActions from "./PixcapActions.vue";

export default {
  components: {
    PixcapActions,
  },
};
</script>

<style lang="scss" scoped>
.toolbar {
  height: 7rem;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--color-grey);
  &__heading-primary {
    font-size: 1.6rem;
    font-weight: 600;
  }
}
</style>
