<template>
  <div class="window" :style="position" :class="{ hide: property.hide }">
    <div class="infobar" @mousedown="move(cindex)"
                         @mouseup="move(-1)">
      <button class="close" @click="close"></button>
      <div class="title"><span>{{ property.label }}</span></div>
    </div>
    <div class="area">
      <div class="content">
        <div class="screen">{{ data }}</div>
        <div class="keypad">
          <div class="row">
            <button class="key" @click="press('c')">C</button>
            <button class="key" @click="press('/')">/</button>
            <button class="key" @click="press('*')">*</button>
            <button class="key" @click="press('=')">=</button>
          </div>

          <div class="row">
            <button class="key" @click="press('7')">7</button>
            <button class="key" @click="press('8')">8</button>
            <button class="key" @click="press('9')">9</button>
            <button class="key" @click="press('-')">-</button>
          </div>

          <div class="row">
            <button class="key" @click="press('4')">4</button>
            <button class="key" @click="press('5')">5</button>
            <button class="key" @click="press('6')">6</button>
            <button class="key" @click="press('+')">+</button>
          </div>

          <div class="row">
            <button class="key" @click="press('1')">1</button>
            <button class="key" @click="press('2')">2</button>
            <button class="key" @click="press('3')">3</button>
            <button class="key long" @click="press('E')">E</button>
          </div>

          <div class="row">
            <button class="key wide" @click="press('0')">0</button>
            <button class="key" @click="press('.')">.</button>
            <button class="key" @click="press('.')"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .window {
    background: #fff;
    position: absolute;
    height: 260px;
    width: 170px;
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

  .screen {
    font-size: 25px;
    line-height: 30px;
    text-align: right;
    border: 1px solid #000;
    background: #fff;
    height: 30px;
    margin: 10px;
    padding-right: 5px;
  }

  .keypad {
    display: flex;
    flex-direction: column;
    width: 150px;
    margin: 0 auto;
  }

  .row {
    display: flex;
    flex: 0 0 30px;
    flex-direction: row;
    height: 30px;
    justify-content: space-between;
    margin: 2px;
  }

  .keypad button {
    flex: 0 0 30px;
    width: 30px;
    height: 30px;
    background: #eaeaea;
    border: 1px solid #000;
  }

  button.wide {
    flex: 0 0 70px;
  }

  button.long {
    height: 65px;
    z-index: 1;
  }
</style>

<script>
  import _ from 'lodash'
  import moveable from './moveable'

  let module = {
    data () {
      return {
        data: "0"
      }
    },
    props: ['cindex', 'property'],
    methods: {
      close() {
        this.property.hide = true
      },
      press(key) {
        this.data = key
      }
    }
  }

  _.merge(module, moveable)
  export default module
</script>
