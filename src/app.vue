<template>
  <div class="desktop" v-on:mousemove="mousemove($event)">
    <screen></screen>
    <icon v-for="(icon, index) in icons"
      @move="dragIcon($event)"
      v-bind:icon_index="index"
      track-by="index" :icon="icon"></icon>
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
        screen: {
          label: "Finder",
          top: "50",
          left: "50"
        },
        icons: [
          {
            label: "My Computer",
            graphic: "1",
            top: "50",
            left: "50"
          },
          {
            label: "My Documents",
            graphic: "1",
            top: "150",
            left: "50"
          },
          {
            label: "Calc",
            graphic: "1",
            top: "250",
            left: "50"
          },
          {
            label: "Notepad",
            graphic: "1",
            top: "350",
            left: "50"
          },
          {
            label: "Recycle Bin",
            graphic: "1",
            top: "450",
            left: "50"
          },
        ]
      }
    },
    methods: {
      dragIcon (index) {
        this.dragging = index
      },
      mousemove (event) {
        event.preventDefault()
        if (this.dragging !== -1) {
          let index = this.dragging
          this.icons[index].top = event.pageY - 25
          this.icons[index].left = event.pageX - 25
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
