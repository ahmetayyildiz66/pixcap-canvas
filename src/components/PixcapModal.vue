<template>
  <div class="modal-overlay">
    <div class="modal">
      <h6 class="modal__heading">
        {{ getBlock().type }} - {{ getBlock().id }}
      </h6>
      <div class="modal__inputs" v-if="getBlock().type === 'Move'">
        <input
          placeholder="employeeId"
          class="input"
          type="number"
          v-model="employeeId"
        />
        <input
          placeholder="supervisorId"
          class="input"
          type="number"
          v-model="supervisorId"
        />
      </div>
      <button @click="onSave" v-if="getBlock().type === 'Move'">Save</button>
      <div v-if="getUserList().ceo">
        <p>{{ getUserList().ceo?.uniqueId }} - {{ getUserList().ceo.name }}</p>
        <ul
          v-for="subordinate in getUserList().ceo.subordinates"
          :key="subordinate.uniqueId"
        >
          <li>{{ subordinate.uniqueId }} - {{ subordinate.name }}</li>
          <div v-if="subordinate">
            <li v-for="sub in subordinate.subordinates" :key="sub.uniqueId">
            {{ sub.uniqueId }} - {{ sub.name }}
            <div v-if="sub">
              <li v-for="s in sub.subordinates" :key="s.uniqueId">
                {{ s.uniqueId }} - {{ s.name }}
              </li>
            </div>
          </li>
          </div>
        
        </ul>
      </div>
    </div>
    <div class="close" @click="closeModal">
      <IconClose />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, computed } from "vue";

import { useToggleModal } from "@/composables/useToggleModal";
import { useSelectedBlock } from "@/composables/useSelectedBlock";
import { useMove } from "@/composables/useMove";
import IconClose from "./icons/IconClose.vue";

const props = defineProps({
  title: String,
  blockName: String,
});

const employeeId = ref("");
const supervisorId = ref("");

const { closeModal } = useToggleModal();
const { increaseId, getBlockId, selectedBlockId, getSelectedBlock } =
  useSelectedBlock();
const { movingItems, getUserList } = useMove();

const users = getUserList();


const getBlock = () => {
  const selected = getSelectedBlock(getBlockId());
  return selected;
};

const onSave = () => {
  movingItems(employeeId.value, supervisorId.value);
  closeModal();
};
</script>

<style lang="scss" scoped>
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
  height: auto;
  width: 1000px;
  margin-top: 10%;
  padding: 60px 40px;
  border-radius: 20px;

  &__heading {
    text-align: center;
  }

  &__inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    & > * {
      margin-right: 10px;
    }
  }
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
  background-color: #814eee;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}

.input {
  padding: 10px;
}
</style>
