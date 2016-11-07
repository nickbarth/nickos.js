<template>
  <div class="window" :style="position" :class="{ hide: property.hide }">
    <div class="infobar" @mousedown="move(cindex)"
                         @mouseup="move(-1)">
      <button class="close" @click="close"></button>
      <div class="title"><span>{{ property.label }}</span></div>
    </div>
    <div class="content">
      <div class="row">
        <img src="icons/computer.svg">
        Nick Plus
      </div>
      <div class="row">
        <strong>NickOS Computing System</strong>
        &copy; 2016 Nick Barth
      </div>
    </div>
  </div>
</template>

<style scoped>
  .window {
    background: #fff;
    position: absolute;
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

  .content {
    display: flex;
    flex: 1;
    flex-direction: row;
    font-size: 12px;
    padding: 20px;
  }

  .row {
    display: flex;
    flex-direction: column;
    flex: 0 0 90px;
    text-align: center;
  }

  .row:last-child {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: left;
    padding-top: 12px;
  }

  img {
    width: 30px;
    height: 30px;
    display: block;
    margin: auto;
  }
</style>

<script>
  import _ from 'lodash'
  import moveable from './moveable'

  let module = {
    data () {
      return {
        height: 120,
        width: 300
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
