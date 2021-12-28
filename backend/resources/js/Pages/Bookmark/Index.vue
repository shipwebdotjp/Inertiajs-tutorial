<template>
    <layout>
        <h2 class="text-lg border-b p-1">
            <Link :href="route('bookmark.index')" class="text-blue-700 underline">
            ブックマーク一覧
            </Link>
        </h2>
        <ul class="list-disc list-inside p-2">
            <li v-for="bookmark in bookmarks" class="list-none flex justify-between">
                <a :href="bookmark.url" target=_blank class="text-blue-700" >{{ bookmark.title }}</a>
                <Link as="button" method="delete" :href="route('bookmark.delete',bookmark.id)" preserve-scroll :only="['bookmarks']" class="border border-red-400 m-1 p-1 text-sm text-red-400">削除</Link>
            </li>
        </ul>
        <h3 class="border-l-4 p-1">ブックマーク追加</h3>
        <div class="flex w-full">
            <div class="w-20 text-right bg-gray-200 text-sm p-1 m-1">タイトル</div>
            <div class="w-40">
                <input type=text name=newTitle v-model="newTitle" size=15 class="p-1 m-1 text-sm w-full" v-bind:class="{'border-red-300': bookmarkError['title']}" />
            </div>
            <div v-if="bookmarkError['title']" class="p-1 m-1 text-sm text-red-400">{{bookmarkError['title']}}</div>
        </div>
        <div class="flex w-full">
            <div class="w-20 text-right bg-gray-200 text-sm p-1 m-1">URL</div>
            <div class="w-40">
                <input type=text name=newUrl v-model="newUrl" size=15 class="p-1 m-1 text-sm w-full" v-bind:class="{'border-red-300': bookmarkError['url']}" />
            </div>
            <div v-if="bookmarkError['url']" class="p-1 m-1 text-sm text-red-400">{{bookmarkError['url']}}</div>
        </div>
        <button v-on:click="addBookmark" class="border border-gray-400 m-1 p-1 text-sm">ブックマーク追加</button>
        <button v-if="cancelToken" v-on:click="cancelToken.cancel()" class="border border-red-300 m-1 p-1 text-sm">キャンセル</button>
        
    
    </layout>
</template>

<script>
    import { Link } from '@inertiajs/inertia-vue3'
    import Layout from '@/Pages/Layout'

    export default {
        components: {
            Link,
            Layout,
        },
        data:function(){
            return {
                newTitle: '',
                newUrl: '',
                status: null,
                cancelToken: null,
            }
        },
        props:{
            bookmarks: {
                type: Array,
            },
            errors: {
                type: Object,
            }
        },
        computed: {
            bookmarkError() {
                return this.$page.props.errors['addBookmark'] || {}
            },
        },
        methods: {
            addBookmark: function(event){
                this.$inertia.visit(route('bookmark.store'),{
                    method: 'post', //POSTメソッドで送信
                    data:{
                        title: this.newTitle, //送信データを指定
                        url: this.newUrl,
                    },
                    errorBag: 'addBookmark',    //エラーバッグ名を指定
                    preserveState: function(page){  //フォームの内容を保持するかどうか
                        return Object.keys(page.props.errors).length != 0 //エラーがあればフォームの内容を保持する
                    },
                    preserveScroll: true,   //スクロールポジションを維持する
                    onCancelToken: (cancelToken) => (this.cancelToken = cancelToken),   //キャンセルトークンが発行されたらキャンセルトークンを保存
                    onBefore: (visit) => confirm('追加しますか？'), //リクエスト送信前に確認ダイアログを表示し、その結果に応じて続行・キャンセル
                    onStart: (visit) => { console.log( visit ) },   //リクエスト開始時に
                    onProgress: (progress) => { console.log( progress ) },  //リクエスト進行中
                    onSuccess: (page) => { console.log(  page ) },  //リクエスト成功時
                    onError: (errors) => {console.log( errors ) },  //エラー発生時
                    onCancel: () => {console.log( 'onCancel' ) },   //リクエストキャンセル時
                    onFinish: visit => {this.cancelToken = null; console.log( 'onFinish' )}, //リクエスト完了時。成功、エラー、キャンセルそれぞれのコールバック実行後に呼び出される
                });
            },
        }
    }
</script>