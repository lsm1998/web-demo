<template>
  <div>
    你好，我是pinia -- {{ useStore.age }}
    <p> doubleAge = {{ useStore.doubleAge }}</p>
    <p> getNameAndAge = {{ useStore.getNameAndAge }}</p>
    <p> getAddAge = {{ useStore.getAddAge(10) }}</p>
    <button @click="add">+1</button>
    <nut-button type="info" @click="changeName">修改名字</nut-button>
  </div>

  <div>
    <nut-cell title="显示中文" :desc="desc" @click="show = true"></nut-cell>
    {{ currentDate }}
    <nut-datepicker
        v-model="currentDate"
        v-model:visible="show"
        :min-date="minDate"
        :max-date="maxDate"
        :is-show-chinese="true"
        :three-dimensional="false"
        @confirm="confirm"
    ></nut-datepicker>
  </div>

  <div>
    dayjs : {{ dayjs('2023-01-12T16:23:00+08:00').format('YYYY-MM-DD HH:mm:ss') }}
  </div>

  <div>
    <nut-tabbar v-model:visible="tabIndex" :bottom="true" @tab-switch="tabSwitch" unactive-color="#7d7e80"
                active-color="#1989fa">
      <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="搜索" icon="find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="购物车" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="个人" icon="my"></nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "./store/user"
import {ref, watch} from "vue";
import {PickerOption} from "@nutui/nutui/dist/types/__VUE/picker/types";

import dayjs from "dayjs";

const useStore = useUserStore()

const add = () => {
  useStore.age++;
}

const tabIndex = ref(0);

const changeName = () => {
  useStore.setName('new name')
}

const show = ref(false);
const desc = ref('2022年05月10日');

const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 10, 1);
const currentDate = ref(new Date(2022, 4, 10, 10, 10));

const confirm = ({selectedValue, selectedOptions}: {
  selectedValue: (string | number)[];
  selectedOptions: PickerOption[];
}) => {
  desc.value = selectedOptions.map((option: PickerOption) => option.text).join('');
}

const tabSwitch = (data: any, index: number) => {
  console.log(data.tabTitle)
  console.log(index)
  console.log(tabIndex.value)
}

watch(currentDate, (newVal: Date, oldVal: Date) => {
  console.log("newVal=", newVal)
  console.log("oldVal=", oldVal)
})
</script>

<style scoped>
</style>
