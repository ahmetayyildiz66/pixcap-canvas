<template>
  <div class="undo-redo">
    <button class="undo-redo__buttons undo-redo__undo" @click="undo">
      <IconUndo />
    </button>
    <button class="undo-redo__buttons undo-redo__redo" @click="redo">
      <IconRedo />
    </button>

    <button class="undo-redo__buttons" @click="play">
      <IconPlay />
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue"

import { ceo } from "@/data/ceo";
import { EmployeeOrgApp } from "@/concrete/EmployeeOrgApp";
import { useToggleModal } from "@/composables/useToggleModal";
import { useMove } from "@/composables/useMove";

import IconRedo from "./icons/IconRedo"
import IconUndo from "./icons/IconUndo"
import IconPlay from "./icons/IconPlay"

const app = new EmployeeOrgApp(ceo)

const { openModal } = useToggleModal()
const { getMovingEmployees, setUserList } = useMove()

const undo = () => {
  const ceo = app.undo()
  setUserList(ceo)
  openModal()
}

const redo = () => {
  app.redo()
}

const play = () => {
  const movingEmployees = getMovingEmployees()
  const ceo = app.move(movingEmployees.employeeId, movingEmployees.supervisorId)
  setUserList(ceo)
  openModal()
}
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
    background-color: var(--color-light-purple);
  }
  &__redo {
    margin-right: 1rem;
    background-color: var(--color-grey--2);
  }
}

.undo-disable{
  cursor: default;
  pointer-events: none;
}
</style>
