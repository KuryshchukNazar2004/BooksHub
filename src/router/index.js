import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Login.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/Home',
            name: 'homep',
            component: () =>
                import ('../views/HomeView.vue')

        },
        {
            path: '/books',
            name: 'books',
            component: () =>
                import ('../views/BooksView.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ('../views/AboutView.vue')
        },
        {
            path: '/events',
            name: 'events',
            component: () =>
                import ('../views/AudioView.vue')
        },
        {
            path: '/Login',
            name: 'login',
            component: () =>
                import ('../views/Login.vue')
        },
        {
            path: '/Registration',
            name: 'registration',
            component: () =>
                import ('../views/Registration.vue')
        },
        {
            path: '/logout',
            name: 'logout',
            component: () =>
                import ('../views/Login.vue')
        },
    ]
})

export default router