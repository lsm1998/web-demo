<template>
  <h1>
    hello
  </h1>
  <nut-button type="success" @click="back">返回</nut-button>
</template>

<script setup>
import router from "@/router";

const back = () => {
  router.back();
}
</script>

<style scoped>

</style>