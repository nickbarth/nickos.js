<template>
  <div class="menu">
    <ul>
      <li><img class="icon" src="/icons/robot.svg"></li>
      <li>File</li>
      <li>Edit</li>
      <li>View</li>
      <li>Special</li>
    </ul>
  </div>
</template>


<style scope>
  .menu {
    width: 100%;
    background: #fff;
    height: 25px;
    border-bottom: 1px solid #000;
    font-weight: 500;
  }

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    display: inline-block;
    flex: 0 0 50px;
    height: 20px;
    padding-top: 3px;
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-top: -9px;
  }
</style>
