<template>
    <main>
        <Head :title="title" />
        <header class="bg-gray-100">
            <Link href="/" class="text-blue-700 underline m-2">Home</Link>
            <Link href="/HelloWorld" class="text-blue-700 underline m-2">HelloWorld</Link>
            <Link :href="route('bookmark.index')" class="text-blue-700 underline m-2">ブックマーク一覧</Link>
            <form @submit.prevent="submit" class="inline">
                <input type=text name=search v-model="form.search" size=15 class="p-1 m-1 text-sm" />
                <button type=submit class="border border-gray-400 m-1 p-1 text-sm">ブックマーク検索</button>
            </form>
        </header>
        <article class="max-w-screen-sm">
            <div v-if="$page.props.flash.message" class="bg-green-200 p-2 m-1">
                {{ $page.props.flash.message }}
            </div>
            <slot />
        </article>
    </main>
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
                form: this.$inertia.form({
                    search: null,
                }),
            }
        },
        methods: {
            submit: function(){
                this.$inertia.get(route('bookmark.search', this.form.search),{});
            },
        },
    }
</script>