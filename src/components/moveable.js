export default {
  computed: {
    position () {
      return {
        'top': this.property.top + 'px',
        'left': this.property.left + 'px',
        'z-index': this.property.zindex
      }
    }
  },
  methods: {
    move (index) {
      this.$emit('move', index)
    }
  }
}
