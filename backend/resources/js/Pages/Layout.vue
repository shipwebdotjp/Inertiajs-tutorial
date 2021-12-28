<template>
    <inertia-head :title="title" />
    <header class="bg-gray-100">
        <inertia-link href="/" class="text-blue-700 underline m-2">Home</inertia-link>
        <inertia-link href="/HelloWorld" class="text-blue-700 underline m-2">HelloWorld</inertia-link>
        <inertia-link :href="route('bookmark.index')" class="text-blue-700 underline m-2">ブックマーク一覧</inertia-link>
    </header>
    <article>
        <slot />
    </article>

</template>

<script>
    import { InertiaLink, InertiaHead } from '@inertiajs/inertia-vue3'

    export default {
        components: {
            InertiaLink,
            InertiaHead,
        },
        props:{
            title: String 
        },
    }
</script>