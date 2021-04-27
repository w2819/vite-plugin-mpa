import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';
import test from '/src/pages/subpage/test.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/test',
            name: 'test',
            component: test,
            meta: {
                title: '首页',
                noLogin: true
            }
        },
    ],
    strict: true,
});

const app = createApp(App)
app.use(router);
router.isReady().then(() => {
    app.mount('#app', true);
})

