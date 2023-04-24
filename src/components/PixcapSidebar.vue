<template>
  <div
    class="left-sidebar"
    :class="{ 'narrow-sidebar': !isOpen }"
  >
    <div class="left-sidebar__content" v-if="isOpen">
      <h3 class="left-sidebar__heading">Blocks</h3>
      <PixcapBlockSearch
        @searchInput="searchField"
      />
    </div>

    <button @click="toggleSidebar" class="toggle-icon">
      <IconArrowLeft v-if="isShownSidebar" />
      <IconArrowRight v-else />
    </button>

    <PixcapTabs v-if="isOpen" @selectedTab="selectedTab">
      <PixcapSingleTab :title="tab1" :is-active="selected === tab1">
        <PixcapBlockItem
          v-for="block in blocks"
          :key="`${block.id}-${block.title}`"
          :svgName="block.svgName"
          :title="block.title"
          :description="block.description"
          @isDragging="draggingStart"
        />
      </PixcapSingleTab>
    </PixcapTabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useLeftPanel } from "@/composables/useLeftPanel";
import PixcapBlockSearch from "./PixcapBlockSearch.vue";
import PixcapTabs from "./PixcapTabs.vue";
import PixcapSingleTab from "./PixcapSingleTab.vue";
import PixcapBlockItem from "./PixcapBlockItem.vue";

import triggerBlocks from "../assets/blocks.json";

const { isOpen, toggleSidebar } = useLeftPanel();
const selected = ref("Triggers");
const tab1 = "Triggers";

const blocks = ref(triggerBlocks);
const searchField = (text) => {
  blocks.value = triggerBlocks.filter((block) =>
    block.title.toLowerCase().includes(text.toLowerCase())
  );
};
const selectedTab = (index) => {
  selected.value = index;
};
const draggingStart = (value) => {
  console.log("valuee: ", value);
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
