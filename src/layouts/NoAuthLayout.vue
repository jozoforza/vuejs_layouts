<script setup lang="ts">
</script>

<template>
  <h4>NoAuth Layout</h4>
  <div class="center">
  <div class="no_auth_box">
  <slot/>
  </div>
  </div>
</template>

<style scoped>
  .no_auth_box{
    display: flex;
    height: 30rem;
    justify-content: center;
    align-items: center;
    border-style: dotted;
    width: 20rem;
  }
  .center{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
