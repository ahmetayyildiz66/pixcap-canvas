<template>
  <div class="block">
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
export default {
  name: "BlockItem",
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