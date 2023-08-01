<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed } from 'vue'

const count = ref(73)
let list = ['a', 'b', 'c','a', 'b', 'c']

function increment() {
  count.value++
}

const computed_value = computed(() => {return count.value + "_computed 🖥️"})

</script>

<template>
  <header>
    <h1>Apex charts!😆</h1>
    <p>{{computed_value}}</p>
  </header>
  <main>
  <ol>
  <li v-for="(item, index) in list">
      {{item}}
  </li>
</ol>
  <div class="router_box">
    <RouterView />
  </div>
</main>
</template>

<style>
    *{
      font-family: Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      text-align: center;
    }
    .router_box{
      padding: 5rem;
      border-style: dotted;
      margin: 2rem;
    }
    ol{
      border-style:dotted;
      justify-self: center;
      width: 30px;
      margin: 2rem;
      padding: 3rem;
    }
    main{
      display: grid;
      grid-template-columns: 10% 90%;
      grid-template-rows: 100%;
    }
</style>
