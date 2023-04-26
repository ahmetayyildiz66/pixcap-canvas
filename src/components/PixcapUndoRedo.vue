<template>
  <div class="undo-redo">
    <button
      class="undo-redo__buttons undo-redo__undo"
      :class="{ 'active-bg': getStackCount() }"
      @click="undo"
    >
      <IconUndo :fill="getStackCount() ? '#814EEE' : '#A8A5AE'" />
    </button>
    <button class="undo-redo__buttons undo-redo__redo" :class="{ 'active-bg': getRedoStackCounter() }" @click="redo">
      <IconRedo :fill="getRedoStackCounter() ? '#814EEE' : '#A8A5AE'" />
    </button>

    <button class="undo-redo__buttons" @click="play">
      <IconPlay />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { ceo } from "@/data/ceo";
import { EmployeeOrgApp } from "@/concrete/EmployeeOrgApp";
import { useToggleModal } from "@/composables/useToggleModal";
import { useMove } from "@/composables/useMove";
import { useStack } from "@/composables/useStack";

import IconRedo from "./icons/IconRedo";
import IconUndo from "./icons/IconUndo";
import IconPlay from "./icons/IconPlay";

const app = new EmployeeOrgApp(ceo);

const { openModal } = useToggleModal();
const { getMovingEmployees, setUserList } = useMove();
const { setStackCounter, getStackCount, setRedoStackCounter, getRedoStackCounter } = useStack();

const undo = () => {
  let ceo = app.undo()

  if (Object.prototype.hasOwnProperty.call(ceo, "ceo")) {
    ceo = app.undo().ceo
  }
  setUserList(ceo);
  setUndoStack();

  const stack = app.getRedoStack().filter((item) => item).filter(el => el.id !== 0)
  setRedoStackCounter(stack.length)

  openModal();
};

const redo = () => {
  const ceo = app.redo();
  setUserList(ceo.ceo);
  setRedoStack()

  const stack = app.getUndoStack().filter((item) => item.id !== 0)
  setStackCounter(stack.length)

  openModal();
};

const play = () => {
  const movingEmployees = getMovingEmployees();
  const ceo = app.move(
    movingEmployees.employeeId,
    movingEmployees.supervisorId
  );
  setUserList(ceo);

  setUndoStack();
  openModal();
};

const setRedoStack = () => {
  const stack = app.getRedoStack().filter((item) => item.id !== 0);
  setRedoStackCounter(stack.length)
}

const setUndoStack = () => {
  const stack = app.getUndoStack().filter((item) => item.id !== 0);
  setStackCounter(stack.length);
};

</script>

<style lang="scss" scoped>
.undo-redo {
  display: flex;
  align-items: center;
  &__buttons {
    width: 2.8rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  &__undo {
    margin-right: 1rem;
    cursor: default;
    pointer-events: none;
    background-color: var(--color-grey--2);
  }
  &__redo {
    cursor: default;
    pointer-events: none;
    margin-right: 1rem;
    background-color: var(--color-grey--2);
  }
}

.active-bg {
  cursor: pointer;
  pointer-events: auto;
  background-color: var(--color-light-purple);
}

.undo-disable {
  cursor: default;
  pointer-events: none;
}
</style>
