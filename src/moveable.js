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
    dragstart(event) {
      event.dataTransfer.setData('text/html', this.icon_index)
    },
    move(index) {
      this.$emit('move', index)
    }
  }
}
