<template>
  <div>
    你好，我是pinia -- {{useStore.age }}
    <p> doubleAge = {{ useStore.doubleAge }}</p>
    <p> getNameAndAge = {{ useStore.getNameAndAge }}</p>
    <p> getAddAge = {{ useStore.getAddAge(10) }}</p>
    <button @click="add">+1</button>

    <button @click="changeName">修改名字</button>
  </div>
</template>

<script setup lang="ts">

import {useUserStore} from "./store/user"

const useStore = useUserStore()

const add = ()=>{
  useStore.age ++;
}

const changeName = ()=>{
  useStore.setName('new name')
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
