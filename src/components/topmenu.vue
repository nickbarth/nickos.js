<template>
  <div class="menu">
    <ul>
      <li class="submenu">
        <span class="header"><img class="icon" src="icons/robot.svg"></span>
        <ul class="subcontent">
          <li @mousedown="open('About')">About</li>
        </ul>
      </li>
      <li class="submenu">
        <span class="header">File</span>
        <ul class="subcontent">
          <li>New</li>
          <li>Open</li>
          <li>Close</li>
        </ul>
      </li>
      <li class="submenu">
        <span class="header">Edit</span>
        <ul class="subcontent">
          <li>Undo</li>
          <li>Copy</li>
          <li>Paste</li>
        </ul>
      </li>
      <li class="submenu">
        <span class="header">View</span>
        <ul class="subcontent">
          <li>Name</li>
          <li>Date</li>
          <li>Size</li>
        </ul>
      </li>
      <li class="submenu">
        <span class="header">Special</span>
        <ul class="subcontent">
          <li>Restart</li>
          <li>Shutdown</li>
        </ul>
      </li>
      <li class="spacer"></li>
      <li class="submenu">
        <span class="header"><img class="icon" src="icons/computer.svg"></span>
        <ul class="subcontent">
          <li>Docs</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  let module = {
    data () {
      return { }
    },
    methods: {
      open (program) {
        this.$emit('open', program)
      }
    }
  }

  export default module
</script>

<style scoped>
  .menu {
    width: 100%;
    background: #fff;
    height: 25px;
    border-bottom: 1px solid #000;
    font-weight: 500;
  }

  .icon {
    width: 20px;
    height: 20px;
  }

  .menu > ul {
    display: flex;
    flex-direction: row;
  }

  .menu > ul > li {
    display: inline-block;
    flex: 0 0 60px;
    height: 20px;
  }

  .menu > ul > li:first-child,
  .menu > ul > li:last-child {
    margin-left: 20px
  }

  .submenu {
    position: relative;
    display: inline-block;
  }

  li.spacer {
    flex: 1 !important;
  }

  .subcontent {
    position: absolute;
    background: #fff;
    margin-top: 0px;
    display: none;
    z-index: 1000;
    min-width: 50px;
    border: 1px solid #000;
    box-shadow: 1px 1px 0px #000;
  }

  .subcontent li {
    display: inline-block;
    padding: 2px 20px 2px 10px;
    font-weight: 200;
    width: 100%;
  }

  .subcontent li:hover {
    background: #eee;
  }

  .submenu:hover .subcontent {
    display: block;
  }

  .submenu:active .subcontent {
    display: none;
  }

  .submenu:hover .header {
    background: #eee;
    border: 1px solid #000;
    padding: 2px 4px 0 4px;
    border-top: none;
    border-bottom: none;
  }

  .submenu .header {
    width: 100%;
    display: inline-block;
    padding: 2px 5px 0 5px;
    height: 24px;
    text-align: center;
  }
</style>
