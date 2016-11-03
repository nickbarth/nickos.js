<template>
  <div class="screen" v-bind:style="position">
    <div class="infobar" @mousedown="move(icon_index)"
                         @mouseup="move(-1)">
      Finder
      <button class="close">X</button>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import moveable from './moveable'

  let module = {
    props: ['icon_index', 'icon'],
  }

  _.merge(module, moveable)
  export default module
</script>

<style scope>
  .screen {
    position: absolute;
    height: 250px;
    width: 500px;
    margin: 0;
    padding: 0;
    background: green;
    color: #555;
  }

  .infobar {
    background: blue;
    text-align: center;
    clear: both;
  }

  .infobar .close {
    float: right;
  }
</style>
