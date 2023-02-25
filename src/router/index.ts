import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            meta: {
                usePathKey: "index",
                keepAlive: false
            },
            component: () => import('../views/Index.vue')
        },
        {
            path: '/user',
            name: 'user',
            meta: {
                usePathKey: "user",
                keepAlive: true
            },
            component: () => import('../views/User.vue')
        },
        {
            path: '/tab',
            name: 'tab',
            meta: {
               //  keepAlive: true
            },
            component: () => import('../views/Tab.vue')
        }
    ]
})

export default router
