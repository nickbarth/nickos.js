<template>
  <div class="icon" v-bind:style="style" @mousedown="move(icon_index)"
                                         @mouseup="move(-1)"
                                         @dblclick="click($event)">
    <div>{{ icon.graphic }}</div>
    <div>{{ icon.label }}</div>
  </div>
</template>

<script>
  export default {
    props: ['icon_index', 'icon'],
    data() {
      return {
        test: 4
      }
    },
    computed: {
      style() {
        return {
          top: this.icon.top,
          left: this.icon.left
        }
      }
    },
    methods: {
      ready() {
        console.log(this.props.graphic)
      },
      dragstart(event) {
        event.dataTransfer.setData('text/html', this.icon_index)
      },
      move(index) {
        this.$emit('move', index)
      },
      click(event) {
        console.log("clicked")
      }
    },
  }
</script>

<style scope>
  .icon {
    position: absolute;
    color: #222;
    background: red;
    width: 50px;
    height: 50px;
    margin: 2px;
  }
</style>
