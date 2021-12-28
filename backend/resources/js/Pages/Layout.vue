<template>
    <Head :title="title" />
    <header class="bg-gray-100">
        <Link href="/" class="text-blue-700 underline m-2">Home</Link>
        <Link href="/HelloWorld" class="text-blue-700 underline m-2">HelloWorld</Link>
        <Link :href="route('bookmark.index')" class="text-blue-700 underline m-2">ブックマーク一覧</Link>
        <input type=text name=search v-model="searchWord" size=15 class="p-1 m-1 text-sm" />
        <Link as="button" method="get" :href="route('bookmark.search',{queryWord: searchWord})" preserve-state class="border border-gray-400 m-1 p-1 text-sm">ブックマーク検索</Link>
    </header>
    <article class="max-w-screen-sm">
        <slot />
    </article>

</template>

<script>
    import { Link, Head } from '@inertiajs/inertia-vue3'

    export default {
        components: {
            Link,
            Head,
        },
        props:{
            title: String 
        },
        data:function(){
            return {
                searchWord: ''
            }
        },
    }
</script>