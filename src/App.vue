<script setup lang="ts">
import {  RouterView } from 'vue-router'
import router from './router/index'
import { ref, computed, shallowRef, provide } from 'vue'
import layouts from './layouts/layouts'

const layout = shallowRef('div')
router.afterEach((to) => {
  layout.value = layouts[to.meta.layout] || 'div'
})

provide('app:layout', layout)
</script>

<template>
  <header>
    <h1>VueLayouts!↕️</h1>
    <p>routes:</p>
    <p class="routes">
      /<router-link to="/">home</router-link>
      /<router-link to="/profile">profile</router-link>
      /<router-link to="/about">about</router-link>
      /<router-link to="/login">login</router-link>
      /<router-link to="/register">register</router-link>
      /<router-link to="/response">response</router-link>
      /<router-link to="/request">request</router-link>
    </p>  
  </header>
  <main>
  <div class="router_box">
    <component :is="layout || 'div'">
    <RouterView />
    </component>
  </div>
</main>
</template>

<style>
    .routes{
      color: green;
    }
    *{
      font-family: Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      text-align: center;
      background-color: rgb(18, 18, 18);
      color: rgb(197, 197, 197);
    }
    /* .router_box{
      padding: 5rem;
      border-style: dotted;
      margin: 2rem;
    } */
    /* ol{
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
    } */
</style>
