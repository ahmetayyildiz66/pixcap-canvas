<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.props.title"
        @click="selectedTab(index)"
        :class="{ 'active-tab': selectedIndex === index }"
        class="tabs__tab"
      >
        {{ tab.props.title }}
      </li>
    </ul>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$slots
      .default()
      .filter((child) => child.type.name === "TheTab");
  },
  mounted() {
    this.selectedTab(0);
  },
  methods: {
    selectedTab(i) {
      this.selectedIndex = i;
      this.tabs?.forEach((tab, index) => {
        if (index === i) this.$emit("selected-tab", tab.props.title);
        tab.isActive = index === i;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.tabs {
  margin-top: 1.8rem;
  &__header {
    border-bottom: 1px solid var(--color-grey);
    display: flex;
    padding: 0 3rem;
    height: 4rem;
  }
  &__tab {
    width: 100%;
    cursor: pointer;
    text-align: center;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid transparent;
  }
}
.active-tab {
  border-bottom: 3px solid var(--color-main);
}
</style>