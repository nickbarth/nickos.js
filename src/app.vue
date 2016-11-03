<template>
  <div class="desktop" v-on:mousemove="mousemove($event)">
    <screen @move="drag($event)" :icon_index="0" :icon="screen"></screen>
    <icon v-for="(obj, index) in getComponents('icon')"
      @move="drag($event)" :icon_index="index + 1"
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
        screen: {
          label: "Finder",
          type: "window",
          top: "0",
          left: "0"
        },
        components: [
          {
            label: "Finder",
            type: "window",
            top: "0",
            left: "0"
          },
          {
            label: "My Computer",
            graphic: "1",
            type: "icon",
            top: "50",
            left: "50"
          },
          {
            label: "My Documents",
            graphic: "1",
            type: "icon",
            top: "150",
            left: "50"
          },
          {
            label: "Calc",
            graphic: "1",
            type: "icon",
            top: "250",
            left: "50"
          },
          {
            label: "Notepad",
            graphic: "1",
            type: "icon",
            top: "350",
            left: "50"
          },
          {
            label: "Recycle Bin",
            graphic: "1",
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
      },
      mousemove (event) {
        event.preventDefault()
        if (this.dragging !== -1) {
          let index = this.dragging
          this.components[index].top = event.pageY - 25
          this.components[index].left = event.pageX - 25
          console.log(this.components[index].top)
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
