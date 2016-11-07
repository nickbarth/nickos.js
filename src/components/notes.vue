<template>
  <div class="window" :style="position" :class="{ hide: property.hide }">
    <div class="infobar" @mousedown="move(cindex)"
                         @mouseup="move(-1)">
      <button class="close" @click="close"></button>
      <div class="title"><span>{{ property.label }}</span></div>
    </div>
    <div class="area">
      <div class="content">
        <textarea></textarea>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .window {
    background: #fff;
    position: absolute;
    height: 426px;
    width: 302px;
    border: 1px solid #000;
    color: #555;
    border-radius: 3px 3px 0 0;
    box-shadow: 2px 2px 0px #000;
    display: flex;
    flex-direction: column;
  }

  .hide {
    display: none
  }

  .infobar {
    height: 25px;
    border-bottom: 1px solid #000;
    text-align: center;
    display: flex;
    background: #fafafa;
  }

  .infobar .close {
    color: #000;
    margin: 5px 5px;
    font-size: 25px;
    border: 0;
    border-radius: 0;
    border: 1px solid #000;
    background: #fff;
    display: block;
    height: 14px;
    width: 14px;
  }

  .infobar .title {
    align-self: center;
    font-size: 14px;
    flex-grow: 1;
  }

  .infobar span {
    display: inline-block;
    margin-left: -24px;
  }

  .area {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .content {
    background: #eee;
    flex: 1;
  }

  .row {
    display: flex;
    flex: 0 0 30px;
    flex-direction: row;
    height: 30px;
    justify-content: space-between;
    margin: 2px;
  }

  textarea {
    height: 400px;
    width: 300px;
    font-size: 16px;
    outline: none;
    resize: none;
  }
</style>

<script>
  import _ from 'lodash'
  import moveable from './moveable'

  let module = {
    data () {
      return {
        data: '0'
      }
    },
    props: ['cindex', 'property'],
    methods: {
      close () {
        this.property.hide = true
      }
    }
  }

  _.merge(module, moveable)
  export default module
</script>
