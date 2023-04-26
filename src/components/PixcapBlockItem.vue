<template>
  <div
    class="block"
    draggable="true"
    @dragstart.prevent="dragStart"
    @click="onBlock"
  >
    <span class="block__image">
      <img :src="imagePath" />
    </span>
    <div class="block__content">
      <h4 class="block__title">{{ type }}</h4>
      <p class="block__description">{{ description }}</p>
    </div>
  </div>

  <PixcapModal v-if="isModalOpen" :title="title" :blockName="description" />
</template>

<script lang="ts" setup>
import Konva from "konva";
import { defineProps, computed, defineEmits, nextTick } from "vue"

import PixcapModal from "./PixcapModal.vue";
import { useToggleModal } from "@/composables/useToggleModal";
import { useGroup } from "@/composables/useGroup";
import { renderBlock } from "@/blocks/renderBlock";
import { renderImage } from "@/blocks/renderImage";
import { BLOCK_SIZE, IMAGE_SIZE, SEPARATOR_SIZE } from "@/constants/sizes";
import { renderPlaceholder } from "@/blocks/renderPlaceholder";
import { usePosition } from "@/composables/usePosition";

const { isModalOpen } = useToggleModal()

const props = defineProps({
  svgName: String,
    title: String,
    type: String,
    description: String,
    groupSvgName: String,
})

const imagePath = computed(() => {
  return require(`./icons/${props.svgName}.svg`);
})

defineEmits(['is-dragging'])

const dragStart = async () => {
  const { getPositionX, getPositionY, updatePosition } = usePosition();
      await nextTick();
      const { addToGroup } = useGroup();

      const group = new Konva.Group({
        name: "dragging",
        draggable: false,
      });

      const placeholderGroup = new Konva.Group({
        name: "placeholder",
        draggable: false,
      });

      updatePosition(getPositionX(), getPositionY() + BLOCK_SIZE);

      renderPlaceholder({
        group: placeholderGroup,
        x: getPositionX() + BLOCK_SIZE / 2,
        y: getPositionY(),
        svgName: "IconSeparator",
      });

      addToGroup(placeholderGroup);

      updatePosition(getPositionX(), getPositionY() + SEPARATOR_SIZE);

      renderBlock({
        group,
        type: props.type,
        x: getPositionX(),
        y: getPositionY(),
        draggable: false,
      });

      renderImage({
        group,
        x: getPositionX() + IMAGE_SIZE / 2,
        y: getPositionY() + IMAGE_SIZE / 2,
        svgName: props.groupSvgName,
      });

      addToGroup(group);
}
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
