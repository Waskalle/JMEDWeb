
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

import VueRouter from 'vue-router'
import VueProgressBar from 'vue-progressbar'
import VueMaterial from 'vue-material'

Vue.use(VueRouter)
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})

Vue.use(VueMaterial)

Vue.material.theme.register('default', {
    primary: 'indigo',
    accent: 'white'
})

const Home = require('./components/Example.vue')

const User = require('./components/User.vue')
const UserCreate = require('./components/user/Create.vue')
// Vue.component('example', require('./components/Example.vue'));

const routes = [
    {
        path: '/home',
        component: Home,
        meta: {
            breadcrumb: 'Inicio',
        }
    },
    {
        path: '/user',
        component: User,
        meta: {
            breadcrumb: 'Usuarios',
        },
        children: [
            {
                path: 'create',
                component: UserCreate,
                meta: {
                    breadcrumb: 'Crear',
                },
            },
        ],
    }
]

const router = new VueRouter({
    history: true,
    mode: 'history',
    linkActiveClass : 'active',
    root: '/home',
    routes
})

router.beforeEach((to, from, next) => {
    router.app.$Progress.start()
    next()
})

router.afterEach(() => {
    router.app.$Progress.finish()
})

const app = new Vue({
    el: '#app',
    router
});
