<script setup lang="ts">
</script>

<template>
  <h4>
    Playground Layout
  </h4>
  <div class="playground_grid_box">
    <div class="playground_box">
    <slot/>

    </div>
    <div class="playground_box">
      box
    </div>
    <div class="playground_box">
      box
    </div>
  </div>
</template>

<style>
  .playground_box{
    width: 30rem;
    display: flex;
    height: 30rem;
    justify-content: center;
    align-items: center;
    border-style: dotted;
    justify-self: center;
    align-self: center;
  }
  .playground_grid_box{
      display: grid;
      grid-template-columns: 33% 33% 33%;
      grid-template-rows: 100%;
      justify-content: center;
      align-items: center;
  }
</style>
