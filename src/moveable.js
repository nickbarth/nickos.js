export default {
  computed: {
    position() {
      return {
        "top": this.icon.top,
        "left": this.icon.left,
        "z-index": this.icon.zindex
      }
    }
  },
  methods: {
    move(index) {
      this.$emit('move', index)
    }
  }
}
