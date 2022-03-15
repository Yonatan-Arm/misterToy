import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import toyApp from '../views/toy-app.vue'
import toyEdit from '../views/toy-edit.vue'
import toyDetails from '../views/toy-details.vue'


const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'active',
    routes: [{
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/about',
            name: 'about',
            component: about,
        },
        {
            path: '/toy',
            name: 'toy-app',
            component: toyApp,
        },
        {
            path: '/toy/edit/:toyId?',
            name: 'toy-edit',
            component: toyEdit,
        },
        {
            path: '/toy/:toyId',
            name: 'toy-details',
            component: toyDetails,
          },
    ]
})

export default router