<template>
  <tabbar></tabbar>
  <h2>首页</h2>
</template>

<script setup lang="ts">
import Tabbar from "@/components/Tabbar1.vue";

import {onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();

onMounted(() => {
  console.log('app mounted');
  if (route.query.redirect) {
    const redirect = route.query.redirect as string;
    delete route.query.redirect;
    router.push({
      path: redirect,
      query: {
        ...route.query
      }
    })
  }
});
</script>

<style lang="scss">
.nut-tab-pane {
  padding: 0 !important;
  padding-left: 16px !important;
}

.infiniteUl {
  width: 100%;
  height: calc(100vh - 120px);
  padding: 0;
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

.infiniteLi {
  font-size: 14px;
  color: #333;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}
</style>

