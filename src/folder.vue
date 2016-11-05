<template>
  <div class="folder" :style="position" :class="{ hide: this.hide }">
    <div class="infobar" @mousedown="move(icon_index)"
                         @mouseup="move(-1)">
      <button class="close" @click="close"></button>
      <div class="title"><span>Folder</span></div>
    </div>
    <div class="area">
      <div class="row">
        <div class="content"></div>
        <div class="scroll scrollbary">
          <div class="arrow top"><i class="fa fa-arrow-up"></i></div>
          <div class="bary"></div>
          <div class="arrow bottom"><i class="fa fa-arrow-down"></i></div>
        </div>
      </div>
      <div class="row bottom">
        <div class="scroll scrollbarx">
          <div class="arrow left"><i class="fa fa-arrow-left"></i></div>
          <div class="barx"></div>
          <div class="arrow right"><i class="fa fa-arrow-right"></i></div>
        </div>
        <div class="resize"><i class="fa fa-arrows-alt"></i></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .folder {
    background: #fff;
    position: absolute;
    height: 250px;
    width: 500px;
    border: 1px solid #000;
    color: #555;
    border-radius: 3px 3px 0 0;
    box-shadow: 2px 2px 0px #000;
    display: flex;
    flex-direction: column;
  }

  .fa {
    color: #fff;
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

  .row {
    display: flex;
    flex: 1;
    flex-direction: row;
  }

  .bottom.row {
    flex: 0 0 20px;
  }

  .content {
    background: #fff;
    flex: 1;
  }

  .scroll {
    display: flex;
    background: #eee;
  }

  .scrollbary {
    flex: 0 0 20px;
    width: 20px;
    border-left: 1px solid #000;
    flex-direction: column;
  }

  .scrollbarx {
    flex: 1;
    height: 20px;
    border-top: 1px solid #000;
    flex-direction: row;
  }

  .arrow {
    text-align: center;
    flex: 0 0 20px;
    background: #aaa;
  }

  .arrow i {
    padding: 1px 0 0 0;
  }

  .top.arrow {
    border-bottom: 1px solid #000;
  }

  .bary {
    flex: 1;
  }

  .bottom.arrow {
    border-top: 1px solid #000;
  }

  .left.arrow {
    border-right: 1px solid #000;
  }

  .barx {
    flex: 1;
  }

  .right.arrow {
    border-left: 1px solid #000;
  }

  .resize {
    flex: 0 0 20px;
    height: 20px;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    text-align: center;
    background: #aaa;
  }

  .resize i {
    padding-top: 2px;
  }
</style>

<script>
  import _ from 'lodash'
  import moveable from './moveable'

  let module = {
    data () {
      return {
        hide: false
      }
    },
    props: ['icon_index', 'icon'],
    methods: {
      close() {
        this.hide = true
      }
    }
  }

  _.merge(module, moveable)
  export default module
</script>
