<template>
  <div class="modal-overlay">
    <div class="modal">
      <h6>{{ getBlock().type }} -  {{ getBlock().id}}</h6>
      <p>{{ blockName }}</p>
      <button>Go Home</button>
    </div>
    <div class="close" @click="closeModal">
      <IconClose />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

import { useToggleModal } from "@/composables/useToggleModal";
import { useSelectedBlock } from "@/composables/useSelectedBlock";
import IconClose from "./icons/IconClose.vue"

const props = defineProps({
  title: String,
  blockName: String
})

const { closeModal } = useToggleModal()
const { increaseId, getBlockId, selectedBlockId, getSelectedBlock } = useSelectedBlock()

const getBlock = () => {
  const selected = getSelectedBlock(getBlockId())
  return selected
}
    
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 1000px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #814EEE;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>