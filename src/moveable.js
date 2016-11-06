export default {
  computed: {
    position() {
      return {
        "top": this.property.top,
        "left": this.property.left,
        "z-index": this.property.zindex
      }
    }
  },
  methods: {
    move(index) {
      this.$emit('move', index)
    }
  }
}
