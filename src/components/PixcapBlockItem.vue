<template>
  <div class="block" draggable="true" @dragstart.prevent="dragStart">
    <span class="block__image">
      <img :src="imagePath" class="" />
    </span>
    <div class="block__content">
      <h4 class="block__title">{{ title }}</h4>
      <p class="block__description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import Konva from "konva"

import { useGroup } from "@/composables/useGroup";
import { renderBlock } from "@/blocks/renderBlock";
import { useLeftPanel } from "@/composables/useLeftPanel";
import { renderImage } from "@/blocks/renderImage";
import { IMAGE_SIZE } from "@/constants/sizes";

export default {
  name: "BlockItem",

  data() {
    return {
      isDragging: false,
    };
  },

  props: {
    svgName: String,
    title: String,
    description: String,
  },

  computed: {
    imagePath() {
      return require(`./icons/${this.svgName}.svg`);
    },
  },

  methods: {
    async dragStart(ev) {
      const { closePanel } = useLeftPanel();
      const { clientX, clientY } = ev;

      this.$emit("is-dragging", this.isDragging);
      closePanel();

      await this.$nextTick();
      const { addToGroup } = useGroup()

      const group = new Konva.Group({
        name: "dragging",
        draggable: true,
      });

      renderBlock({
        group,
        x: clientX,
        y: clientY,
        draggable: false,
      });

      renderImage({
        group,
        x: clientX + IMAGE_SIZE / 2,
        y: clientY + IMAGE_SIZE / 2,
        svgName: this.groupSvgName,
      });
      addToGroup(group);
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  align-items: center;
  width: 27.5rem;
  height: 7rem;
  &__image {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 0.5rem;
    background-color: #ad8df1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1.8rem;
  }
  &__content {
    width: 19rem;
  }
  &__title {
    font-size: 1.4rem;
    font-weight: 500;
  }
  &__description {
    font-size: 1.2rem;
    color: #a8a5ae;
  }
  &:hover {
    border-radius: 5px;
    cursor: pointer;
    background-color: #e2e2ed;
  }
}
</style>
