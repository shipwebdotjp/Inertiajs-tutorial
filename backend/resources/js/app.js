require('./bootstrap');

// Import modules...
import { createApp, h } from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin, Link as InertiaLink, Head } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import Layout from '@/Pages/Layout'

const el = document.getElementById('app');

createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => require(`./Pages/${name}`).default,
            // 持続的レイアウトを使用する場合はこの下のように書き換え
            /*
            resolveComponent: name => import(`./Pages/${name}`)
                .then(({ default: page }) => {
                    if (page.layout === undefined) {
                        page.layout = Layout
                    }
                    return page
                }),
            */

        }),
})
    .mixin({ methods: { route } })
    .use(InertiaPlugin)
    .component('Head', Head)
    .component('InertiaLink', InertiaLink)
    .mount(el);

InertiaProgress.init({ color: '#4B5563' });
