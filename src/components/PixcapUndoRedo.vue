<template>
  <div class="undo-redo">
    <button class="undo-redo__buttons undo-redo__undo" @click="undo">
      <IconUndo />
    </button>
    <button class="undo-redo__buttons undo-redo__redo" @click="redo">
      <IconRedo />
    </button>

    <button class="undo-redo__buttons" @click="play">Play</button>
  </div>
</template>

<script>
import { ceo } from "@/data/ceo";
import { EmployeeOrgApp } from "@/concrete/EmployeeOrgApp";

import IconRedo from "./icons/IconRedo"
import IconUndo from "./icons/IconUndo"

export default {
  components: {
    IconRedo,
    IconUndo,
  },

  data() {
    return {
      app: EmployeeOrgApp
    }
  },

  mounted() {
    this.app = new EmployeeOrgApp(ceo)
  },

  methods: {
    undo() {
      this.app.undo()
    },
    redo() {
      this.app.redo()
    },
    play() {
      this.app.move()
    }
  }
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
    background-color: var(--color-light-purple);
  }
  &__redo {
    margin-right: 1rem;
    background-color: var(--color-grey--2);
  }
}
</style>