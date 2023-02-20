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
                keepAlive: true
            },
            component: () => import('../views/Index.vue')
        },
        {
            path: '/tab',
            name: 'tab',
            meta: {
                keepAlive: true
            },
            component: () => import('../views/Tab.vue')
        }
    ]
})

export default router
