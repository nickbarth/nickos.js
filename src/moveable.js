export default {
  computed: {
    position() {
      return {
        top: this.icon.top,
        left: this.icon.left
      }
    }
  },
  methods: {
    move(index) {
      this.$emit('move', index)
    }
  }
}
