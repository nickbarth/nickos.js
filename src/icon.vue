<template>
  <div class="icon" v-bind:style="position" @mousedown="move(icon_index)"
                                            @mouseup="move(-1)"
                                            @dblclick="click($event)">
    <div>{{ icon.graphic }}</div>
    <div>{{ icon.label }}</div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import moveable from './moveable'

  let module = {
    props: ['icon_index', 'icon'],
    data() {
      return {
        test: 4
      }
    },
    methods: {
      click(event) {
        console.log("clicked")
      }
    },
  }

  _.merge(module, moveable)
  export default module
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
