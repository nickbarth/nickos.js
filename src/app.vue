<template>
  <div class="desktop" v-on:mousemove="mousemove($event)">
    <topmenu></topmenu>
    <folder @move="drag($event)" :icon_index="0" :icon="components[0]"></folder>
    <folder @move="drag($event)" :icon_index="1" :icon="components[1]"></folder>
    <icon v-for="(obj, index) in getComponents('icon')"
      @move="drag($event)" :icon_index="index + 2"
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
        dragging: -1,
        dragX: 0,
        dragY: 0,
        computed: {
        },
        components: [
          {
            label: "Finder 1",
            type: "window",
            top: "350",
            left: "250"
          },
          {
            label: "Finder 2",
            type: "window",
            top: "75",
            left: "200"
          },
          {
            label: "Disk",
            graphic: "cpu",
            type: "icon",
            top: "50",
            left: "50"
          },
          {
            label: "Docs",
            graphic: "folder",
            type: "icon",
            top: "150",
            left: "50"
          },
          {
            label: "Calc",
            graphic: "calc",
            type: "icon",
            top: "250",
            left: "50"
          },
          {
            label: "Notes",
            graphic: "notes",
            type: "icon",
            top: "350",
            left: "50"
          },
          {
            label: "Trash",
            graphic: "trash",
            type: "icon",
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
      drag (index) {
        console.log('dragging', index)
        this.dragging = index
        if (index === -1) {
          this.dragY = 0
          this.dragX = 0
        }
      },
      mousemove (event) {
        event.preventDefault()
        if (this.dragging !== -1) {
          let index = this.dragging
          let item = this.components[index]
          if (this.dragY === 0 && this.dragX === 0) {
            this.dragX = item.left - event.pageX
            this.dragY = item.top - event.pageY
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
