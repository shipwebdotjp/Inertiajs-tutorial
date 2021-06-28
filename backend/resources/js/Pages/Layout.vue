<template>
    <html>
        <header class="bg-gray-100">
            <inertia-link href="/" class="text-blue-700 underline m-2">Home</inertia-link>
            <inertia-link href="/HelloWorld" class="text-blue-700 underline m-2">HelloWorld</inertia-link>
            <inertia-link :href="route('bookmark.index')" class="text-blue-700 underline m-2">ブックマーク一覧</inertia-link>
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
    </html>
</template>

<script>
    export default {
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
        }
    }
</script>