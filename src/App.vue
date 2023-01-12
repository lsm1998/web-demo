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
    dayjs : {{dayjs('2023-01-12T16:23:00+08:00').format('YYYY-MM-DD HH:mm:ss')}}
  </div>
</template>

<script setup lang="ts">

import {useUserStore} from "./store/user"
import {ref} from "vue";
import {PickerOption} from "@nutui/nutui/dist/types/__VUE/picker/types";

import dayjs from "dayjs";

const useStore = useUserStore()

const add = () => {
  useStore.age++;
}

const changeName = () => {
  useStore.setName('new name')
}

const show = ref(false);
const desc = ref('2022年05月10日');

const minDate = new Date(2020, 0, 1);
const maxDate = new Date(2025, 10, 1);
const currentDate = new Date(2022, 4, 10, 10, 10);

const confirm = ({selectedValue, selectedOptions}: {
  selectedValue: (string | number)[];
  selectedOptions: PickerOption[];
}) => {
  desc.value = selectedOptions.map((option: PickerOption) => option.text).join('');
}
</script>

<style scoped>
</style>
