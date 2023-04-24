<template>
  <div class="tab" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TheTab",
  props: {
    title: {
      type: String,
      default: "Tab",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  padding: 1rem 3rem;
}
</style>