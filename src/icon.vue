<template>
  <div class="icon" v-bind:style="position" @mousedown="move(icon_index)"
                                            @mouseup="move(-1)"
                                            @dblclick="click($event)">
    <div class="graphic"><img :src="'/icons/'+icon.graphic+'.svg'"></div>
    <div class="label">{{ icon.label }}</div>
  </div>
</template>

<style scope>
  .icon {
    position: absolute;
    color: #222;
    margin: 2px;
    height: 50px;
    width: 50px;
    padding: 8px;
    text-align: center;
    font-size: 14px;
  }

  .graphic img {
    color: #222;
    width: 40px;
  }

  .label {
    margin-top: 5px;
    background: #fff;
  }
</style>

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
