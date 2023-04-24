<template>
  <div class="left-sidebar" :class="{ 'narrow-sidebar': !isShownSidebar }">
    
    <div class="left-sidebar__content" v-if="isShownSidebar">
      <h3 class="left-sidebar__heading">Blocks</h3>
      <PixcapBlockSearch />
    </div>

    <button @click="toggleSidebar" class="toggle-icon">
      <IconArrowLeft v-if="isShownSidebar" />
      <IconArrowRight v-else />
    </button>

    <PixcapTabs v-if="isShownSidebar" @selectedTab="selectedTab">
      <PixcapSingleTab :title="tab1" :is-active="selected === tab1"
        >
        <PixcapBlockItem svgName="IconFunction" title="Move" description="Moves an item" />
        <PixcapBlockItem svgName="IconOutput" title="Output" description="Shows the output" />
        </PixcapSingleTab
      >
    </PixcapTabs>
  </div>
</template>

<script>
import PixcapBlockSearch from "./PixcapBlockSearch.vue";
import PixcapTabs from "./PixcapTabs.vue"
import PixcapSingleTab from "./PixcapSingleTab.vue"
import PixcapBlockItem from "./PixcapBlockItem.vue"

import IconArrowRight from "./icons/IconArrowRight.vue";
import IconArrowLeft from "./icons/IconArrowLeft.vue";

export default {
  name: "LeftSidebar",
  data() {
    return {
      isShownSidebar: true,
      selected: "Triggers",
      tab1: "Blocks",
      tab2: "Actions",
      tab3: "Loggers",
    };
  },
  components: {
    PixcapBlockSearch,
    PixcapTabs,
    PixcapSingleTab,
    PixcapBlockItem,
    IconArrowRight,
    IconArrowLeft,
  },
  methods: {
    toggleSidebar() {
      this.isShownSidebar = !this.isShownSidebar;
    },

    selectedTab(index) {
      this.selected = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.left-sidebar {
  position: absolute;
  padding: 4rem 0;
  top: 7rem;
  background-color: var(--color-white);
  height: 100%;
  width: 35rem;
  box-shadow: var(--box-shadow);

  &__heading {
    font-weight: 500;
    font-size: 1.5rem;
  }

  &__content {
    padding: 0 3rem;
  }
}
.toggle-icon {
  position: absolute;
  left: calc(100% - 1rem);
  top: 4rem;
}
.narrow-sidebar {
  width: 5rem;
}
</style>
