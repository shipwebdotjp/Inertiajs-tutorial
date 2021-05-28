<template>
    <layout>
        <h2 class="text-lg border-b p-1">
            <inertia-link :href="route('bookmark.index')" class="text-blue-700 underline">
            ブックマーク一覧
            </inertia-link>
        </h2>
        <ul class="list-disc list-inside p-2">
            <li v-for="bookmark in bookmarks">
                <a :href="bookmark.url" target=_blank class="text-blue-700" >{{ bookmark.title }}</a>
            </li>
        </ul>
        <h3 class="border-l-4 p-1">ブックマーク追加</h3>
            <div class="flex w-60">
                <div class="w-20 text-right bg-gray-200 text-sm p-1 m-1">タイトル</div>
                <div class="w-40">
                    <input type=text name=newTitle v-model="newTitle" size=15 class="p-1 m-1 text-sm w-full" />
                </div>
            </div>
            <div class="flex w-60">
                <div class="w-20 text-right bg-gray-200 text-sm p-1 m-1">URL</div>
                <div class="w-40">
                    <input type=text name=newUrl v-model="newUrl" size=15 class="p-1 m-1 text-sm w-full" />
                </div>
            </div>
            <inertia-link as="button" method="post" :href="route('bookmark.store')" :data="{title: newTitle, url: newUrl}" class="border border-gray-400 m-1 p-1 text-sm">ブックマーク追加</inertia-link>
        
    </layout>
</template>

<script>
    import Layout from '@/Pages/Layout'

    export default {
        components: {
            Layout,
        },
        data:function(){
            return {
                newTitle: '',
                newUrl: '',
            }
        },
        props:{
            bookmarks: {
                type: Array,
            }
        },
        mounted: function(){
            document.title = "ブックマーク一覧";
        }
    }
</script>