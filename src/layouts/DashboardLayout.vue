<script setup lang="ts">
</script>

<template>
  <h4>Dashboard Layout</h4>
  <div class="dashboard_box">
    <ol>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/profile">Profile</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ol>
    <div class="slot">
    <slot/>
    </div>
  </div>
</template>

<style scoped>
    .dashboard_box{
      padding: 5rem;
      border-style: dotted;
      margin: 2rem;
      display: grid;
      grid-template-columns: 20% 80%;
      grid-template-rows: 100%;
    }
    .slot{
      border-style: ridge;
      padding: 5rem;
      color: red;
      align-self: center;
    }
    ol{
      align-self: center;
      justify-self: center;
    }
    
</style>
