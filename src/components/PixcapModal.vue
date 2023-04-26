<template>
  <div class="modal-overlay">
    <div class="modal">
      <h6 class="modal__heading" v-if="getBlock()?.type">
        {{ getBlock()?.type }} - {{ getBlock()?.id }}
      </h6>
      <h6 class="modal__heading" v-else>
        Initial state
      </h6>
      <div class="modal__inputs" v-if="getBlock()?.type === 'Move'">
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
      <div class="center">
        <button @click="onSave" v-if="getBlock()?.type === 'Move'">Save</button>
      </div>
      <div v-if="getUserList()" style="margin-top: 40px">
        <div v-if="getUserList().uniqueId">{{ getUserList().uniqueId }} - {{ getUserList().name }}</div>
        <ul
          v-for="subordinate in getUserList().subordinates"
          :key="subordinate.uniqueId"
          class="pl"
        >
          <div class="pl">
            {{ subordinate.uniqueId }} - {{ subordinate.name }}
          </div>

          <div v-if="subordinate" class="pl">
            <div
              v-for="sub in subordinate.subordinates"
              :key="sub?.uniqueId"
              class="pl"
            >
              <span class="pl" v-if="sub"
                >{{ sub.uniqueId }} - {{ sub.name }}</span
              >

              <div v-if="sub" class="pl">
                <div v-for="s in sub.subordinates" :key="s.uniqueId" class="pl">
                  <span>{{ s.uniqueId }} - {{ s.name }}</span>
                  <div v-if="s" class="pl">
                    <div v-for="child in s.subordinates" :key="child.uniqueId">
                      <span>{{ child.uniqueId }} - {{ child.name }}</span>
                      <div v-if="child" class="pl">
                        <div
                          v-for="c in child.subordinates"
                          :key="c.uniqueId"
                        >
                          <span>{{ c.uniqueId }} - {{ c.name }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
import { defineProps, ref } from "vue";

import { useToggleModal } from "@/composables/useToggleModal";
import { useSelectedBlock } from "@/composables/useSelectedBlock";
import { useMove } from "@/composables/useMove";
import IconClose from "./icons/IconClose.vue";

defineProps({
  title: String,
  blockName: String,
});

const employeeId = ref("");
const supervisorId = ref("");

const { closeModal } = useToggleModal();
const { getBlockId, getSelectedBlock } =
  useSelectedBlock();
const { movingItems, getUserList } = useMove();

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
  // text-align: center;
  background-color: white;
  height: 800px;
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

.align-center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.pl {
  padding-left: 30px;
}
</style>
