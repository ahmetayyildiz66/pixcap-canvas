<template>
  <div ref="pixcapcanvas" />
</template>

<script>
import PixcapCanvas  from "../canvas/PixcapCanvas.ts"

export default {
  data() {
    return {
      pixcapCanvas: null
    }
  },

  mounted() {
    const { pixcapcanvas } = this.$refs
    this.pixcapCanvas = new PixcapCanvas(pixcapcanvas)

    this.render()
  },

  methods: {
    render() {
      this.pixcapCanvas.render()
    }
  }
}
</script>