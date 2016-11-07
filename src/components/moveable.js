export default {
  computed: {
    position () {
      return {
        'top': this.property.top + 'px',
        'left': this.property.left + 'px',
        'height': this.height + 'px',
        'width': this.width + 'px',
        'z-index': this.property.zindex
      }
    }
  },
  methods: {
    move (index) {
      this.$emit('move', index)
    },
    activate (index) {
      this.$emit('active', index)
    }
  }
}
