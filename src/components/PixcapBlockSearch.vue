<template>
  <div class="search">
    <input class="search__input" type="text" placeholder="Search blocks" />
    <IconSearch class="search__icon" />
  </div>
</template>

<script>
import IconSearch from "./icons/IconSearch.vue";

export default {
  components: {
    IconSearch,
  },
};
</script>

<style lang="scss" scoped>
.search {
  margin-top: 1.2rem;
  position: relative;
  &__input {
    height: 3.2rem;
    padding-left: 4rem;
    width: 100%;
    border: none;
    border: solid 1px var(--color-grey);
    border-radius: 5px;

    &::placeholder {
      font-size: 1.3rem;
      color: var(--color-grey);
    }
  }
  &__icon {
    position: absolute;
    top: 0.5rem;
    left: 1rem;
  }
}
</style>
