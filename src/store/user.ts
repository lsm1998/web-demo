import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    // 相当于data
    state() {
        return {
            age: 18,
            name: "张三"
        }
    },
    // 相当于计算属性
    getters: {
        doubleAge(state) {
            return state.age * 2;
        },
        getNameAndAge(): string {
            return this.name + this.age
        },
        getAddAge() {
            return (number :number) => this.age += number;
        }
    },
    // 相当于methods
    actions: {
        setName(name :string){
            this.name = name
        }
    }
})