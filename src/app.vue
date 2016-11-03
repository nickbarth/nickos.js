<template>
  <div class="desktop" v-on:mousemove="mousemove($event)">
    <screen @move="drag($event)" :icon_index="0" :icon="components[0]"></screen>
    <screen @move="drag($event)" :icon_index="1" :icon="components[1]"></screen>
    <icon v-for="(obj, index) in getComponents('icon')"
      @move="drag($event)" :icon_index="index + 2"
      track-by="index" :icon="obj"></icon>
  </div>
</template>

<script>
  import programs from './empty.vue'
  import desktop from './empty.vue'
  import icon from './icon.vue'
  import startmenu from './empty.vue'
  import screen from './screen.vue'
  export default {
    data () {
      return {
        dragging: -1,
        computed: {
        },
        components: [
          {
            label: "Finder 1",
            type: "window",
            offsetY: 10,
            offsetX: 250,
            top: "300",
            left: "200"
          },
          {
            label: "Finder 2",
            type: "window",
            offsetY: 10,
            offsetX: 250,
            top: "0",
            left: "0"
          },
          {
            label: "My Computer",
            graphic: "1",
            type: "icon",
            offsetY: 25,
            offsetX: 25,
            top: "50",
            left: "50"
          },
          {
            label: "My Documents",
            graphic: "1",
            type: "icon",
            offsetY: 25,
            offsetX: 25,
            top: "150",
            left: "50"
          },
          {
            label: "Calc",
            graphic: "1",
            type: "icon",
            offsetY: 25,
            offsetX: 25,
            top: "250",
            left: "50"
          },
          {
            label: "Notepad",
            graphic: "1",
            type: "icon",
            offsetY: 25,
            offsetX: 25,
            top: "350",
            left: "50"
          },
          {
            label: "Recycle Bin",
            graphic: "1",
            type: "icon",
            offsetY: 25,
            offsetX: 25,
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
      },
      mousemove (event) {
        event.preventDefault()
        if (this.dragging !== -1) {
          let index = this.dragging
          let item = this.components[index]
          item.top = event.pageY - item.offsetY
          item.left = event.pageX - item.offsetX
        }
      }
    },
    components: {
      screen, programs, desktop, icon, startmenu
    }
  }
</script>

<style scope>
  .desktop {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #fafafa;
    color: #555;
  }
</style>
