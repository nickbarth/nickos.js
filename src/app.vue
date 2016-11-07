<template>
  <div class="desktop" @mousemove="mousemove($event)">
    <topmenu></topmenu>
    <folder @move="drag($event)" :cindex="0" :property="components[0]"></folder>
    <folder @move="drag($event)" :cindex="1" :property="components[1]"></folder>
    <folder @move="drag($event)" :cindex="2" :property="components[2]"></folder>
    <calculator @move="drag($event)" :cindex="3" :property="components[3]"></calculator>
    <notes @move="drag($event)" :cindex="4" :property="components[4]"></notes>
    <icon v-for="(obj, index) in getComponents('icon')"
      @move="drag($event)" @open="open($event)" :cindex="index + 5"
      track-by="index" :property="obj"></property>
  </div>
</template>

<script>
  import topmenu from './components/topmenu.vue'
  import icon from './components/icon.vue'
  import folder from './components/folder.vue'
  import notes from './components/notes.vue'
  import calculator from './components/calc.vue'
  import components from './components/components.json'

  export default {
    data () {
      return {
        zstack: 1,
        dragging: -1,
        dragX: 0,
        dragY: 0,
        components: components
      }
    },
    methods: {
      getComponents (type) {
        return this.components.filter(function (item) {
          return item.type === type
        })
      },
      open (program) {
        var item = null
        switch (program) {
          case 'Disk':
            item = this.components[0]
            item.zindex = this.zstack
            this.zstack++
            item.top = 100
            item.left = 150
            item.hide = false
            break
          case 'Docs':
            item = this.components[1]
            item.zindex = this.zstack
            this.zstack++
            item.top = 120
            item.left = 170
            item.hide = false
            break
          case 'Trash':
            item = this.components[2]
            item.zindex = this.zstack
            this.zstack++
            item.top = 140
            item.left = 190
            item.hide = false
            break
          case 'Calc':
            item = this.components[3]
            item.zindex = this.zstack
            this.zstack++
            item.top = 160
            item.left = 210
            item.hide = false
            break
          case 'Notes':
            item = this.components[4]
            item.zindex = this.zstack
            this.zstack++
            item.top = 180
            item.left = 230
            item.hide = false
            break
        }
      },
      drag (index) {
        console.log('mouse move')
        if (index === -1) {
          this.dragY = 0
          this.dragX = 0
        }
        this.dragging = index
      },
      mousemove (event) {
        event.preventDefault()
        if (this.dragging !== -1) {
          let index = this.dragging
          let item = this.components[index]
          if (this.dragY === 0 && this.dragX === 0) {
            this.dragX = item.left - event.pageX
            this.dragY = item.top - event.pageY
            item.zindex = this.zstack
            this.zstack++
          }
          item.top = event.pageY + this.dragY
          item.left = event.pageX + this.dragX
        }
      }
    },
    components: {
      folder, calculator, notes, icon, topmenu
    }
  }
</script>

<style>
  * { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
    cursor: default;
  }

  html, body {
    height: 100%;
    min-height: 100%;
  }

  html {
    padding: 20px;
  }

  body {
    border: 1px solid #000;
    border-radius: 5px;
    position: relative;
    font-family: "helvetica neue", "Lucida Grande", "Lucida Sans", sans-serif;
  }

  .desktop {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #fafafa;
    color: #555;
  }
</style>
