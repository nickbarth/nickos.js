<template>
  <div class="desktop" v-on:mousemove="mousemove($event)">
    <topmenu></topmenu>
    <folder @move="drag($event)" :icon_index="0" :icon="components[0]"></folder>
    <folder @move="drag($event)" :icon_index="1" :icon="components[1]"></folder>
    <folder @move="drag($event)" :icon_index="2" :icon="components[2]"></folder>
    <icon v-for="(obj, index) in getComponents('icon')"
      @move="drag($event)" @open="open($event)" :icon_index="index + 3"
      track-by="index" :icon="obj"></icon>
  </div>
</template>

<script>
  import programs from './empty.vue'
  import desktop from './empty.vue'
  import icon from './icon.vue'
  import topmenu from './topmenu.vue'
  import folder from './folder.vue'
  export default {
    data () {
      return {
        zstack: 1,
        dragging: -1,
        dragX: 0,
        dragY: 0,
        computed: {
        },
        components: [
          {
            label: "Disk",
            type: "window",
            hide: true,
            zindex: 0,
            top: "350",
            left: "250"
          },
          {
            label: "Folder",
            type: "window",
            hide: true,
            zindex: 0,
            top: "75",
            left: "200"
          },
          {
            label: "Trash",
            type: "window",
            hide: true,
            zindex: 0,
            top: "75",
            left: "200"
          },
          {
            label: "Disk",
            graphic: "cpu",
            type: "icon",
            zindex: 0,
            top: "50",
            left: "50"
          },
          {
            label: "Docs",
            graphic: "folder",
            type: "icon",
            zindex: 0,
            top: "150",
            left: "50"
          },
          {
            label: "Calc",
            graphic: "calc",
            type: "icon",
            zindex: 0,
            top: "250",
            left: "50"
          },
          {
            label: "Notes",
            graphic: "notes",
            type: "icon",
            zindex: 0,
            top: "350",
            left: "50"
          },
          {
            label: "Trash",
            graphic: "trash",
            type: "icon",
            zindex: 0,
            top: "450",
            left: "50"
          },
        ]
      }
    },
    methods: {
      getComponents(type) {
        return this.components.filter(function(item) {
          return item.type === type
        })
      },
      open (program) {
        switch (program) {
          case 'Disk':
            var item = this.components[0]
            item.zindex = this.zstack
            this.zstack++
            item.top = 100
            item.left = 150
            item.hide = false
            break
          case 'Docs':
            var item = this.components[1]
            item.zindex = this.zstack
            this.zstack++
            item.top = 120
            item.left = 170
            item.hide = false
            break
          case 'Trash':
            var item = this.components[2]
            item.zindex = this.zstack
            this.zstack++
            item.top = 140
            item.left = 190
            item.hide = false
            break
        }
      },
      drag (index) {
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
      folder, programs, desktop, icon, topmenu
    }
  }
</script>

<style scoped>
  .desktop {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #fafafa;
    color: #555;
  }
</style>
