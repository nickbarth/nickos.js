<template>
  <div class="icon" :style="position" @mousedown="move(cindex)"
                                      @mouseup="move(-1)"
                                      @dblclick="open($event)">
    <div class="graphic"><img :src="'icons/'+property.graphic+'.svg'"></div>
    <div class="label">{{ property.label }}</div>
  </div>
</template>

<style scoped>
  .icon {
    position: absolute;
    color: #222;
    margin: 2px;
    padding: 8px;
    text-align: center;
    font-size: 14px;
  }

  .graphic img {
    color: #222;
    width: 40px;
  }

  .label {
    width: 50px;
    margin-top: 5px;
    background: #fff;
  }
</style>

<script>
  import _ from 'lodash'
  import moveable from './moveable'

  let module = {
    props: ['cindex', 'property'],
    data() {
      return {
      }
    },
    methods: {
      open(event) {
        this.$emit('open', this.property.label)
      }
    },
  }

  _.merge(module, moveable)
  export default module
</script>
