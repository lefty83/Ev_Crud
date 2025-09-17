import { createRouter, createWebHistory } from 'vue-router'
import mainLayout from '../layouts/mainLayout.vue'
import dashboardView from '../views/dashboardView.vue'

const routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/home', component: mainLayout,
        children: [
            { path: 'dashboard', component: dashboardView }
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})