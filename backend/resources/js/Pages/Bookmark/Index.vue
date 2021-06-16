<template>
    <layout>
        <h2 class="text-lg border-b p-1">
            <inertia-link :href="route('bookmark.index')" class="text-blue-700 underline">
            ブックマーク一覧
            </inertia-link>
        </h2>
        <ul class="list-disc list-inside p-2">
            <li v-for="bookmark in bookmarks" :key="bookmark.id" class="list-none flex justify-between">
                <a :href="bookmark.url" target=_blank class="text-blue-700" >{{ bookmark.title }}</a>
                <inertia-link as="button" method="delete" :href="route('bookmark.delete',bookmark.id)" preserve-scroll :only="['bookmarks']" class="border border-red-400 m-1 p-1 text-sm text-red-400">削除</inertia-link>
            </li>
        </ul>
        <form @submit.prevent="submit">
            <h3 class="border-l-4 p-1">ブックマーク追加</h3>
            <div class="flex w-full">
                <div class="w-20 text-right bg-gray-200 text-sm p-1 m-1">タイトル</div>
                <div class="w-40">
                    <input type=text name=title v-model="form.title" size=15 class="p-1 m-1 text-sm w-full" v-bind:class="{'border-red-300': form.errors.title}"/>
                </div>
                <div v-show="form.errors.title" class="p-1 m-1 text-sm text-red-400">{{ form.errors.title }}</div>
            </div>
            <div class="flex w-full">
                <div class="w-20 text-right bg-gray-200 text-sm p-1 m-1">URL</div>
                <div class="w-40">
                    <input type=text name=url v-model="form.url" size=15 class="p-1 m-1 text-sm w-full" v-bind:class="{'border-red-300': form.errors.url}" />
                </div>
                <div v-show="form.errors.url" class="p-1 m-1 text-sm text-red-400">{{ form.errors.url }}</div>
            </div>
            <button type="submit" class="border border-gray-400 m-1 p-1 text-sm" :disabled="form.processing" v-bind:class="{'cursor-not-allowed': form.processing}">ブックマーク追加</button>
            <button @click="form.reset()" type="reset" class="border bg-gray-200 m-1 p-1 text-sm" :disabled="!form.isDirty" v-bind:class="{'cursor-not-allowed': !form.isDirty}">リセット</button>
            <button v-if="form.processing" @click="form.cancel()" type="button" class="border bg-red-200 m-1 p-1 text-sm">送信中止</button>
            <div v-if="form.recentlySuccessful" class="p-1 m-1 bg-green-200">送信が完了しました。</div>
        </form>
    </layout>
</template>

<script>
    import Layout from '@/Pages/Layout'

    export default {
        components: {
            Layout,
        },
        data: function() {
            return {
                form: this.$inertia.form({
                    title: null,
                    url: null,
                }),
            }
        },
        props:{
            bookmarks: {
                type: Array,
            }
        },
        mounted: function(){
            document.title = "ブックマーク一覧";
        },
        methods: {
            submit() {
                this.form.transform(function(data){
                    return {
                        title: data.title ? data.title : '無題',
                        url: data.url,
                    }
                }).post(route('bookmark.store'))
            },
        },
    }
</script>